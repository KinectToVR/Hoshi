/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const _COMMAND = {
  name: 'help',
  description: 'Provides help for a specific topic or lists all topics if none is given.',
  options: [
    {
      name: 'topic',
      description: 'What seekest thou to understand?',
      type: 3
    },
  ],
};
