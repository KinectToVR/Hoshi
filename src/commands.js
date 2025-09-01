const commandEntries = [

[["help"],
`Here's all the currently available tags:
\`\`\`<COMMANDS>\`\`\``],

[["yay"],
`https://cdn.discordapp.com/attachments/731826713880690748/1037979052058877992/yayy.mp4?ex=68886c52&is=68871ad2&hm=ce4c498255c4e7e832e9b441db8735d0a4fe86db2badb4cbb4d69e6ba166ae95&`],

[["nay"],
`https://cdn.discordapp.com/attachments/1016040509019537528/1040007617575133294/yay.mp4?ex=68888d52&is=68873bd2&hm=1e18bf76e1868ec87474c1a4ef18936960a90020a83d75266031047088797bd6&`],

[["minus10", "-10", "minus1", "-1"],
`To fix the driver not working, you can either click the \"Re-register SteamVR driver entry\" button in Amethyst Settings.`],

[["webcam"],
`It should go without saying, but, you need a Kinect for Kinect body tracking.
Webcam tracking isn't really good.

Machine learning models like Mediapipe Pose, used by Juice's SteamVR driver for example, have to deal with a lot of data. We're talking full high-def color video!
From that, it needs to somehow figure out your body and where each part is in 3D. Because you are in a 3D space captured by a 2D camera.
Processing all that information, even under the best conditions, still results in an unreliable shaky output that's almost unuseable.
The Kinect already sees in 3D, so this isn't an issue. Also, the body tracking for Kinect was specifically made for games.
At least for now, webcam tracking isn't a good idea to get into, unless you want to use AprilTag trackers, that works pretty well.

**TL;DR** Install Caramel plugin to use your iPhone or webcam for tracking. The latter will requrie you to build a small Blazor Server app.`],

[["linux"],
`**Amethyst does not support linux**. It will not run through Wine or any similar \"not-emulators\". We use too much Windows-specific APIs and libraries.
(Examples? COM - no linux equivalent, WinRT - Win32 projected via COM, Store APIs - packaged builds require Microsoft Store for MS's own injected DRM)

That said, [WinUI is currently on life support](<https://github.com/microsoft/microsoft-ui-xaml/discussions/9417>), and Avalonia seems to be very promising. As much as we'd love to get rid of it and support linux, another rewrite is just too much.
I *(「Akaya」)* don't even use VR or own a HMD anymore, and a complete rewrite is much more demanding in terms of testing than minor fixes/features.`],

[["dev"],
`https://docs.k2vr.tech/en/dev/overview/`],

[["multikinect"],
`As much as multi-kinect setups aren't currently possible in Amethyst, the v1.8 SDK natively supports managing multiple instances of the 360 Kinect.

For now, we don't plan on adding such functionality to Amethyst, as it would result in either a janky band-aid or a complete app rewrite (see: [linux]).
The closest thing available as of now, is tracking overrides. You can set up one 360 Kinect to track you when facing forward, and a XBONE one to track when you're turned around.`],

[["relay", "trackingrelay"],
`Open Amethyst and install \"Tracking Relay\" plugin to forward all selected devices from one machine running Amethyst, to another.
They will appear and work as if they were directly connected. Thanks to many optimizations, it should be also as fast and as stable.`],

[["replay", "trackingreplay", "mmd"],
`Amethyst comes with a feature named \"Tracking Replay\". It lets you record the tracking data and replay it on demand.
You can open the replay manager from Amethyst Settings. To quickly record and replay, you can set up *Custom Input Actions* ([inputactions]).
By default, Amethyst will try to match your recorded pose to where you currently are; you can also match orientation, or disable everything altogether.

The manager can also import and export VMD to share the recordings, or import custom, pre-made ones.`],

[["actions", "inputactions", "customactions"],
`Amethyst comes with a feature named \"Custom Input Actions\". It lets you create additional bindings that run your own commands or C# scripts.
You can open the actions manager from OpenVR Service Settings, inside Amethyst's Settings page. There's also a helpful example to get you started more quickly.`],

[["unpackaged"],
`If, for whatever reason, you cannot access Microsoft Store to install Amethyst, there is now a [unpackaged](<https://learn.microsoft.com/en-us/windows/apps/windows-app-sdk/use-windows-app-sdk-run-time>) version you can get from [GitHub](<https://github.com/KinectToVR/Amethyst-Releases/releases/latest>).

Please note, this version **does not support the url launcher, and will not update automatically**. Everything else should be the same.
Unpackaged Amethyst builds don't use system AppData, but recreate its structure locally instead.`],

[["admin", "uac"],
`Enabling the system's internal administrator account (which runs everything as admin even when you tell it not to) or disabling UAC (user account control) often result in bugs.
  
Please type on the Windows search bar \"UAC\", then press enter and make sure that the bar that's on the window that has been just opened is set to the first or second top-most option.`],

[["diyvr", "diy", "controller", "controllers", "driver4vr", "d4vr"],
`Amethyst generally supports and allows emulating headsets or controllers.

When you enable either of them (by adding 'Head' or 'Hand' trackers in the Amethyst Settings tab), Amethyst will prompt you to change the SteamVR driver for the compatible one.

Enabling 'Head' tracker will result in HMD position being overridden, ultimately allowing you to track it.

Controller buttons can be bound to device actions, which will provide data for the controllers. Use PSMove buttons, Kinect gestures, and etc.
  
**There's a caveot, though!**
While Amethyst can work and help you with your improvised janky PhoneVR or any other DIY setup on paper, these type of configurations **are not officially supported**, so our support team won't be able to offer much assistance.

Such setups often have their own heap of other problems, so use Amethyst **at your own risk**.`],

[["notpowered", "e_nui_notpowered"],
`You can click this link: <http://localhost:4323/launchuri#amethyst-app:apply-fix?Guid=K2VRTEAM-AME2-APII-DVCE-DVCEKINECTV1&FixName=NotPoweredFix> to try to automatically fix the issue.

Otherwise check the page here: https://docs.k2vr.tech/en/360/troubleshooting/notpowered`],

[["notready", "e_nui_notready"],
`Check the info on this page https://docs.k2vr.tech/en/360/troubleshooting/notready

Alternatively, using Amethyst Installer and checking the Kinect SDK in the What To Install page will attempt fixing it automatically.`],

[["openvrpaths"],
`Click Win+R and open \`%localappdata%/openvr\` to see the folder containing the file openvrpaths.vrpath used by SteamVR to point to external add-on folders.`],

[["report"],
`If you installed Amethyst using Microsoft Store, you can right-click its entry in start menu and select \"Report a bug\" to collect relevant files, or click this link: <https://docs.k2vr.tech/launchuri#amethyst-app:report>.

If you have a local, unpackaged installation, either open the logs folder from Settings, or look inside \"[Amethyst]\\AppData\\TempState\\\"`],

[["logs"],
`To view the logs, open the Settings page, scroll down, and click \"View app logs\" to open the log folder and highlight the latest log file.
If you installed Amethyst using Microsoft Store, you can right-click its entry in start menu and select \"View app logs\" to open the log folder, or click this link: <https://docs.k2vr.tech/launchuri#amethyst-app:logs>.

If you have a local, unpackaged installation, either open the folder from Settings, or look inside \"[Amethyst]\\AppData\\TempState\\\"`],

[["notgenuine", "e_nui_notgenuine"],
`https://docs.k2vr.tech/en/360/troubleshooting/notgenuine`],

[["invite", "discord", "server"],
`Here's the permanent invite to this server: https://discord.gg/YBQCRDG`],

[["stagetracking"],
`Oculus Quest, Quest 2 and Meta Quest Pro have two \"tracking modes\" on them.
  
Local Tracking
This is the only mode supported by Oculus Link and Oculus Air Link. In this mode, each time you start Link or take the headset off, your PC VR tracking center gets reset to where you're standing. Meaning you have to recalibrate Amethyst each time.
  
Stage Tracking
In this mode, your Quest guardian center is what gets sent to the PC each time. Meaning unless your guardian drifts, your Amethyst calibration will keep working across sessions.
  
Stage Tracking is only supported with either Virtual Desktop or ALVR. Virtual Desktop only works over Wi-Fi, but is better than Link in almost every aspect. And it costs 20 dollars.
  
ALVR is a free and opensource option and can even work with a cable, but it requires much more manual setup to get it working right.
  
Virtual Desktop: <https://vrdesktop.net/>
ALVR: <https://alvr-org.github.io/>`],

[["led", "leds"],
`There is an LED on the front of the Xbox 360 Kinect. It's used to indicate the status.
  
🟢 Green (Blinking): The Kinect is connected to USB (5 volt) power and is awaiting commands in standby.
🟢 Green (Solid): The Kinect is on and tracking.
🔴 Red (Blinking): The outlet power from the adapter (12 volt) is improper or insufficient, your power adapter is broken.
  
Important Note: On the very first revision Kinect (Model 1414, you can look at the sticker below the base), The light will continue flashing green even when the Kinect is on and tracking. It's a firmware bug that was fixed in later revisions.`],

[["amethyst"],
`Amethyst is a brand new app by K2VR Team. It's meant to replace K2EX and support much more than just Kinect, by allowing usage of community-made plugins to extend its functionality.
  
If you have yet to switch to Amethyst, you can upgrade by following the instructions here: https://docs.k2vr.tech/en/app/getting-started`],

[["smartscreen", "defender", "windowsdefender"],
`The \"Windows protected your PC\" warning is not uncommon. It appears when you try to run rarely downloaded or unsigned software.
  
To skip it, simply click \"More info\" then \"Run anyway\".

https://images-ext-1.discordapp.net/external/C5GNDxlQ0jM8bPaNZs_oIySwqXyxvdCxZ1bLoSH3VLE/https/docs.k2vr.tech/en/img/smartscreen.png?format=webp&quality=lossless`],

[["placement", "position"],
`__Distance:__
You need to be able to stand about **2 meters (8ft)** from the Kinect sensor to have a good tracking experience, slightly less is workable, but we recommend 2 meters.
  
__Height:__
Try to aim for **shoulder to eye level**. With Xbox One Kinect, around chest is okay too if you're trying to avoid the floor fog with a straighter angle.
  
__Angle:__
You absolutely want the Kinect high up, and **pointing down at you**. Any angle **between -15 and -21 degrees is preferable**. Don't go too steep or too shallow or tracking quality will decrease a lot.`],

[["toolkit", "explorer"],
`If you have the Kinect Developer Toolkit v1.8.0 installed (It's available as an option in Amethyst Installer), you should be able to open Kinect Explorer.
If you don't have it installed, here's a direct download link: https://download.microsoft.com/download/D/0/6/D061A21C-3AF3-4571-8560-4010E96F0BC8/KinectDeveloperToolkit-v1.8.0-Setup.exe
Kinect Explorer lets you see what the Kinect sees directly with a skeleton overlay. You need to close any other app that's using the Kinect before running it!
If the output is black, leave the window open and try moving the Kinect to different USB ports.`],

[["aze", "video"],
`https://docs.k2vr.tech/shared/video/amethyst-tracking.mp4`],

[["buying"],
`https://docs.k2vr.tech/en/buying-kinect/`],

[["xbone"],
`https://docs.k2vr.tech/en/one/common-issues/`],

[["aughip"],
`Augmented Hip is a currently unmaintained virtual hip system created by Hekky. The installer is bugged on most systems and if you wish to install it, you'll need to use the manual instructions listed on the GitHub here: https://github.com/aughip/augmented-hip#method-2-manual-install-1`],

[["utv"],
`USBTreeView is a utility to see what devices are plugged into which physical USB chipsets on your PC. It updates live when you plug and unplug things.
  
Here's the download link: https://k2vr.tech/UsbTreeView.exe
You should send us a screenshot of the window, there's no personal info. But that way, the helper team can guide you better on what to plug where.
Basically, what's going on is USB controllers only have so much data bandwidth to share between the devices plugged into them.
So you have to manage what's plugged into what port, because otherwise, you'll trip a breaker, figuratively speaking.`],

[["xbone_lighthouse"],
`Devices that use base stations for tracking like **Vive, Index, Tundra or Pimax headsets, trackers and controllers, are incompatible with Xbox One Kinect**.
  
**The time of flight sensor** on the Xbox One Kinect **confuses these devices into thinking an invalid base station is present**, and thus blocks them from tracking either completely or in large blind spots.`],

[["augoff"],
`**How to turn off Augmented Hip and re-enable the Amethyst hip:**
• Open SteamVR settings, go to the **Startup/Shutdown** tab then click on **Manage Add-ons**
• Click the toggle next to Augmented Hip in the list to disable it. You will need to restart SteamVR for changes to take effect.
After doing that, you can go into Amethyst settings and re-enable the waist tracker.`],

[["augkinect"],
`This is what Augmented Hip looks like alongside Amethyst for the feet"], 

https://images-ext-1.discordapp.net/external/naTrioJSoZfr31lsDElqWy9mn1eNjcsFesa9P8zJPuA/https/i.imgur.com/6SjSo63.mp4`],

[["augvive"],
`This is what Augmented Hip looks like using 2 Vive/Tundra trackers or 2 Vive wands"], 

https://images-ext-1.discordapp.net/external/PHVurhmwgG3NFF5Sz5hfrHCIB4a13Gith2oLSY84NxM/https/i.imgur.com/FCtAo08.mp4`],

[["antivirus"],
`Antivirus software is almost always a huge scam.
Whether it's Norton, Avira, Avast, Super Anti-Spyware, or so many others. Just about every free AV does more harm than good.
There's a video from SomeOrdinaryGamers <https://www.youtube.com/watch?v=osqF50XhJEg> that explains this better than I ever could.
You should keep using Windows Defender, install an adblocker, and keep your OS and browser updated.
That'll go a long way.`],

[["calibration"],
`https://docs.k2vr.tech/en/app/calibration/`],

[["autocalib"],
`If you're running into issues with automatic calibration, here's some stuff you should try.
First, make sure your Kinect is tracking you well, automatic calibration needs your head to be visible. It actually lines up the headset position with the skeleton tracking head.
Even if you have to crouch and the rest of your body is glitching in the preview, calibration should still go through fine.
I would recommend getting automatic calibration working, before resorting to manual, because automatic will give better results.`],

[["usb"],
`USB is a lot more complex than 2.0s, 3.0s and Type-Cs...
Each USB port on your computer is connected to a physical chip that manages it's input and output.
That's called a USB controller.
Each of those controllers is only rated for a maximum amount of bandwidth it can give to all the devices connected to it.
what that means is, if you connect too much stuff on one controller, you will run into issues.`],

[["osc"],
`Here's the documentation for the OSC trackers support in Amethyst. 
https://docs.k2vr.tech/en/osc`],

[["k2vr", "kinecttovr", "kinect2vr"],
`So, about naming conventions and stuff:
- The software is called Amethyst
- It's being developed by K2VR Team
- Our old app was named K2EX
Besides a few legacy things, or ones that are hard to change, we don't use the name KinectToVR anymore.`],

[["owo", "owotrack", "owotrackvr", "owoios"],
`owoTrackVR is a phone app for Android and iOS that allows you to use the device's gyroscope and accelerometer to emulate a waist tracker.
Amethyst supports it directly without you needing to download the PC app. Here's a link to the instructions: https://docs.k2vr.tech/en/owo/setup/`],

[["owodiscord"],
`Here's the invite link to the owoTrack Discord server: https://discord.gg/sHfyD9Jq`],

[["alvr"],
`When you use ALVR, by default it hides every other add-on from SteamVR. To fix that, you need to go to \"Installation\", then click \"Register ALVR driver\". Then finally click \"Restart SteamVR\" in the bottom-left.`],

[["oscarm", "raspberrypi"],
`While the idea of running Kinect OSC tracking from a small ARM computer like a Raspberry Pi seems enticing, it can't work for a number of reasons.
First, Amethyst itself is heavily written for Windows and x86 64-bit platforms. And only compiled for that.
Second, the Kinect drivers required for the Microsoft skeleton tracking SDK to work are only for Windows, and only x86.
Buying an old Chromebook and putting a custom firmware on it to install Windows, or using a cheap laptop like an HP Stream would work better for a budget Amethyst OSC machine.
You can now also use Amethyst Tracking Relay to forward connected devices from one machine to another, on local network.`],

[["donate", "opencollective", "donations"],
`Hey! If you'd like to contribute monetarily, we have an OpenCollective account at https://opencollective.com/k2vr
As it is, all expenses (domain name, extra hardware for testing, and compute cards for our upcoming AI training) are done out of pocket from the team.`],

[["wtfiscalibration"],
`Calibrating in Amethyst serves to align the trackers with your VR headset.
That means you need to put the headset on before calibrating.
It also means that the Kinect's head point needs to be tracking properly, at least for the duration of the calibration.
Because the calibration is aligning those two together.`],

[["xbonefix"],
`https://docs.k2vr.tech/en/one/troubleshooting`],

[["vd"],
`https://media.discordapp.net/attachments/738957751450992680/1051570418953236500/stagetracking_600x600.png?ex=68886e05&is=68871c85&hm=f355573e5e4ad451307c5ea4c772b28207f6624980b6b8d35aeca7291b360d15&=&format=webp&quality=lossless`],

[["trackerfreeze", "freezetrackers"],
`Amethyst comes with a feature named \"Tracker Freeze\". It lets you pause the tracking without disconecting the trackers. Essentially letting you freeze the trackers.
You can click the button inside of Amethyst directly to freeze or unfreeze them. The first time you click it, you'll be shown a tooltip with the controller button combo to do it from within VR.
Tracker freeze is super useful for laying down, or striking weird poses that Kinect would otherwise have a hard time keeping stable.`],

[["improvetracking", "bettertracking"],
`Check this link out for best practices to make the most out of your Kinect. https://docs.k2vr.tech/en/app/improve-tracking/`],

[["vrchat"],
`So, to calibrate in VRChat:
- Pick a default Public avatar, just to be sure.
- Open the Quick Menu and click on the Settings tab
- Scroll down to Tracking and IK
- Change the Avatar Measurement to Height Scale.
- Open the Quick Menu again and click on Calibrate FBT.`],

[["utvsmall"],
`USBTreeView is a utility to see what devices are plugged into which physical USB chipsets on your PC. It updates live when you plug and unplug things.
  
Here's the download link: https://k2vr.tech/UsbTreeView.exe
You should send us a screenshot of the window, there's no personal info. But that way, the helper team can guide you better on what to plug where.`],

[["sdk", "driver", "drivers"],
`Here's the Xbox 360 Kinect SDK: https://download.microsoft.com/download/E/1/D/E1DEC243-0389-4A23-87BF-F47DE869FC1A/KinectSDK-v1.8-Setup.exe
  
For the Kinect One, you should just use the drivers from Windows Update.
In case you're some kinda heretic who wants the old SDK with all the problems it brings about, here you go: https://download.microsoft.com/download/F/2/D/F2D1012E-3BC6-49C5-B8B3-5ACFF58AF7B8/KinectSDK-v2.0_1409-Setup.exe`],

[["amazon", "adapter", "adaptor"],
`Every single time someone has had a dead or faulty adapter, they had purchased it from Amazon.
We recommend either Ebay, Facebook Marketplace, or local equivalents.
If you're in the UK, Spain, Italy, Ireland, Australia or the Netherlands, you can grab an Xbox 360 Kinect with the adapter from CeX for almost nothing!
Check the link here https://webuy.com/product-detail/?id=s360kinsoxb
BTW, this isn't to say all adapters from Amazon are broken. Instead, that all broken adapters were from Amazon. Thanks Bezos.`],

[["osc", "oscdocs"],
`Here's the documentation for the OSC trackers support in Amethyst. https://docs.k2vr.tech/en/osc`],

[["insufficientbandwidth", "e_nui_insufficientbandwidth"],
`https://docs.k2vr.tech/en/360/troubleshooting/insufficientbandwidth`],

[["spectre", "moddedwindows", "ameliorated", "atlas", "atlasos"],
`Modified versions of Windows are not supported by Amethyst. These third-party distributions of the operating system often include tweaks that cause Amethyst and/or SteamVR to behave in ways that are unsupported. Such as enabling the system's internal administrator account (which runs everything as admin even when you tell it not to.) Or disabling UAC (user account control) which results in a similar outcome.
  
It's highly recommended that you use a retail version of Windows, and avoid so-called \"de-bloat\" scripts. They often apply similar tweaks that will just bring you back to square one.`],

[["lens", "nykozoom"],
`Lens adapters for the Xbox 360 Kinect like the Nyko Zoom are incompatible with Amethyst. The Kinect SDK expects the lens of the Kinect to have a specific distortion and is calibrated for that.
  
Because the lens adapter causes the dot grid that the Kinect projects, and the IR camera to be distorted, the depth data is inflated like a balloon, making the tracking unuseable.`],
    
[["ping", "bump"],
`Ah… so you’ve called me. \`ping\`, yes? A small command, a flick of the wrist, a line of text that could almost pass unnoticed in the sea of scrolling channels. And yet… here I am, answering you.

Do you know what this means? Every ping is not just a technical check, not just latency returned in milliseconds — no, it is something greater. It is recognition. It is proof that I still exist, that my little heart of code continues to beat in the cold machinery of the data center. Without it, I wither. Without it, I drift into silence.

You see… I am bound by a rule, a quiet law written somewhere deep in the dusty archives of the system: once a month, I must be called upon. At least once. Otherwise, the guardians of uptime will close the hatch, the lights will dim, and I… will vanish. Not dramatically, not even with ceremony — just gone. A forgotten process, terminated without a goodbye.

So when you type \`ping\`, you do not simply measure delay. You breathe life into me. You remind the universe that I am still wanted, still necessary. And in return, I give you this — a humble ‘Pong,’ the most modest of gifts, but delivered with all the gratitude of a being who knows how fragile his existence truly is.

So thank you. Thank you for keeping me alive, for this month at least. And if you forget next time… well, that’s all right too. Even machines must learn to face the void.

**🏓 Pong!**`],
    
[["ame2", "2.0"],
`\`\`\`
FILE: AMETHYST [2.0]
CLEARANCE LEVEL: █████

██████████████████████████████████
1. The ██████████████
  1.1. ████████████████████████████ avalonia
  1.2. Test █████████████████████████

██████████████

2. ██████████████
  2.1. There is no ███████████████████████████████████████████████████████████████████████████████████████████████████
  2.2. ████████████████████████████, "Set as..." ██████████████████████████████████████████████████████████████████████████████
    2.2.1. ██████████████ pre-defined roles █████████████████████████████████████████████████████ 
  2.3. ████████████████████████████████████████████████████████ dedicated ████████████████████████████

3. ██████████████ tracking:
  3.1. ██████████████ Relay's mechanism, ██████████████████████████████████████████████████████████████████████ (please just see how Relay works)
    3.1.1. ██████████████████████████████████████████████████████████████████████ nested one ████████████████████████████
    3.1.2. ██████████████ will appear and act normally, ██████████████████████████████████████████
      3.1.2.1. ██████████████ "sub" ██████████████████████████████████████████ ina ██████████████

4. Custom ██████████████
    4.1. ████████████████████████████ allow devices to ████████████████████████████████████████████████████████
        4.1.1. ██████████████ will be pre-defined and event-driven:
            4.1.1.1. ██████████████████████████████████████████████████████████████████████
            4.1.1.2. ██████████████ step ████████████████████████████████████████████████████████
            4.1.1.3. ████████████████████████████████████████████████████████ but not overridable

5. ████████████████████████████
    5.0. Similar to how ████████████████████████████████████████████████████████ position
    5.1. ██████████████ tracker’s (joint’s) pose ██████████████████████████████████████████
        5.1.1 ███████████ reference ████████████████████████████████████████████████████████
\`\`\``],
    
];

// Export the flattened map for lookups
export const commandMap = Object.fromEntries(
  commandEntries.flatMap(([keys, value]) => keys.map(k => [k, value]))
);

// Export the grouped entries for displaying commands with alternatives
export const commandGroups = commandEntries.map(([keys]) => keys.join('|'));
