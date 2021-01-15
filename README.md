# K-Pay-Scriptable-Widget
An iOS widget to pull your sales data from K-Pay

# Installation
- [Download Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188)
- Create New Script
- Copy and paste all of script.js to the new script
- Find your api key at https://kiezelpay.com/account/api and add it to the urls on lines 11, 20, & 29
- Then find your timezone offset at https://en.wikipedia.org/wiki/List_of_UTC_time_offsets
- Next take your offset (ie: +2) and then multiply it buy 60, and flip the symbol. (so -120)
- Add the offset to the url on line 20, same with platform (fitbit, garmin, pebble, all)
- Finally, Add a link to your png logo on line 96 (252px By 152px)

# Add to homescreen
Instructions.png contains visuals for some of these steps

- Add a medium sized scriptable widget to your home screen
- Press the home button to get out of homescreen edit mode
- Press and hold (3D touch) on the widget until the context menu appears
- Select: Edit "Scriptable" (i)
- For Script, select whatever you called the script
- For When interacting, select Run Script
- That's It! Enjoy!
