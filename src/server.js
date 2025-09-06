/**
 * The core server that runs on a Cloudflare worker.
 */

import { AutoRouter } from 'itty-router';
import {
  InteractionResponseType,
  InteractionType,
  verifyKey,
} from 'discord-interactions';
import { _COMMAND, _COMMAND_HOSHI, _COMMAND_NEMI } from './aliases.js';
import { commandMap, commandGroups } from './commands.js';

class JsonResponse extends Response {
  constructor(body, init) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    };
    super(jsonBody, init);
  }
}

const router = AutoRouter();

/**
 * A simple :wave: hello page to verify the worker is working.
 */
router.get('/', (request, env) => {
  return new Response(`👋 ${env.DISCORD_APPLICATION_ID}`);
});

/**
 * Main route for all requests sent from Discord.  All incoming messages will
 * include a JSON payload described here:
 * https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object
 */
router.post('/', async (request, env) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(
    request,
    env,
  );
  if (!isValid || !interaction) {
    return new Response('Bad request signature.', { status: 401 });
  }

  if (interaction.type === InteractionType.PING) {
    // The `PING` message is used during the initial webhook handshake, and is
    // required to configure the webhook in the developer portal.
    return new JsonResponse({
      type: InteractionResponseType.PONG,
    });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    // Most user commands will come as `APPLICATION_COMMAND`.
    switch (interaction.data.name.toLowerCase()) {
      case _COMMAND.name.toLowerCase():
      case _COMMAND_HOSHI.name.toLowerCase():
      case _COMMAND_NEMI.name.toLowerCase(): {
        // I know this code doesn't look or feel too great...
        // Please leave me alone, I'm a C# dev... I hate JS......
        const optionValue = interaction.data.options?.[0]?.value;
        const responseContent = commandMap[optionValue] || commandMap['help'];
        const message = responseContent.replace('<COMMANDS>', commandGroups.join(', '));
        return new JsonResponse({
          type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: message,
          },
        });
      }
      default:
        return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
    }
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND_AUTOCOMPLETE) {
    switch (interaction.data.name.toLowerCase()) {
      case _COMMAND.name.toLowerCase():
      case _COMMAND_HOSHI.name.toLowerCase():
      case _COMMAND_NEMI.name.toLowerCase(): {
        // I know this code doesn't look or feel too great...
        // Please leave me alone, I'm a C# dev... I hate JS......
        const optionValue = interaction.data.options?.[0]?.value.toLowerCase();
        const focused = optionValue || '';

        const matches = Object.keys(commandMap)
          .filter(key => key.toLowerCase().includes(focused))
          .slice(0, 25) // Discord max
          .map(key => ({
            name: `${key}${/^(https?:\/\/)/.test(commandMap[key] || commandMap['help']) ? '' : ' - ' + ((commandMap[key] || commandMap['help']).split(' ').reduce((a, w) => a.length ? (a + ' ' + w).length <= 25 ? a + ' ' + w : a : w.length <= 25 ? w : '', '')) + ((commandMap[key] || commandMap['help']).length > 25 ? '...' : '')}`,  // what shows up in dropdown
            value: key, // what gets sent back if selected
          }));

        return new JsonResponse({
          type: InteractionResponseType.APPLICATION_COMMAND_AUTOCOMPLETE_RESULT,
          data: {
            choices: matches,
          },
        });
      }
      default:
        return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
    }
  }

  console.error('Unknown Type');
  return new JsonResponse({ error: 'Unknown Type' }, { status: 400 });
});
router.all('*', () => new Response('Not Found.', { status: 404 }));

async function verifyDiscordRequest(request, env) {
  const signature = request.headers.get('x-signature-ed25519');
  const timestamp = request.headers.get('x-signature-timestamp');
  const body = await request.text();
  const isValidRequest =
    signature &&
    timestamp &&
    (await verifyKey(body, signature, timestamp, env.DISCORD_PUBLIC_KEY));
  if (!isValidRequest) {
    return { isValid: false };
  }

  return { interaction: JSON.parse(body), isValid: true };
}

const server = {
  verifyDiscordRequest,
  fetch: router.fetch,
};

export default server;
