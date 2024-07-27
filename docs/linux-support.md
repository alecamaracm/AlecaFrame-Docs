# Linux support (Workaround)

Running AlecaFrame on Discord (Unofficial)

## Disclaimer (READ FIRST):

**OVERWOLF DOES NOT OFFICIALLY SUPPORT LINUX, SO BY DOING THIS YOU ARE DOING IT UNDER YOUR OWN RISK.** 

This guide has been written by Set8 (@brandencodesthings on Discord) and uses 3rd party software (Wine/Proton/Protonhax) that, unlike Overwolf, are not explicitly allowed by DE in their 3rd party policy. Therefore, if you follow this guide, you are doing it under your own risk.


## Guide (by Set8):

**Step 1:** Download ProtonHax for your distrobution from their Github repository. (Contrary to the name, this is not any form of a cheating program and won't get you banned. It simply allows AlecaFrame + Overwolf to run alongside Warframe so it can properly hook the game.)

**Step 2:** Add this line to the end of your Warframe launch options protonhax init %command%.

**Step 3:** Open ProtonTricks (install it if you don't have it already) and select Warframe's prefix.

**Step 4:** Download the Overwolf Setup package from their official website (not AlecaFrames!).

**Step 5:** Click "run an exe/msi/bat" in ProtonTricks and select the Overwolf Setup package.

**Step 6:** The overwolf installer should open in a few seconds. Go through the prompts and install it fully.

**Step 7:** Click "run an exe/msi/bat" again and select AlecaFrames installer.

**Step 8:** Wait a few seconds, and AlecaFrame should open and throw out an error. This is normal! Close the AlecaFrame installer and wait 10-30 seconds. Overwolf should start itself and begin installing AlecaFrame on its own.

**Step 9:** Run AlecaFrame in the same wine prefix as Warframe via ProtonHax. Below i've attached an example desktop file that does the job:

```
[Desktop Entry]
Name=AlecaFrame
Exec=protonhax run 230410 "/home/branden/.local/share/Steam/steamapps/compatdata/230410/pfx/drive_c/users/steamuser/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Overwolf/AlecaFrame.lnk"
Type=Application
StartupNotify=true
Icon=/home/branden/.local/share/Steam/steamapps/compatdata/230410/pfx/drive_c/users/steamuser/AppData/Local/Overwolf/AppShortcutIcons/afmcagbpgggkpdkokjhjkllpegnadmkignlonpjm.ico
Name[en_US]=AlecaFrame
Terminal=false
TerminalOptions=
```

## Tips & Bugs
- I recommend using a bleeding edge proton build for Warframe, as your compatibility with AlecaFrame may vary. This guide was made with GE-Proton9.3 and I really don't recommend any version below 9.0
When Warframe launches, stay on the launcher and THEN run AlecaFrame. This allows it to load before Warframe and still become activated in the same prefix. You can then launch the game after AlecaFrame finishes loading.
- Depending on your Proton version, moving the window AT ALL will be broken. It can vary from crashing on maximization to crashing when moved at all. This is due to AlecaFrame's UI library not being designed for linux at all (obviously). Your mileage may vary.
- If AlecaFrame crashes at all, you must go into Task Manager for Warframe's proton prefix and kill the Overwolf service. Otherwise, AlecaFrame will fail to start.
Don't report issues with this setup to the AlecaFrame developers. This is a hacky solution and they cannot help you (nor should they).

## Credits

The method and guide was written by Set8 (@brandencodesthings on Discord)