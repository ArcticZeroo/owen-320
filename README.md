# Owen CSE 320 Webpage Helper

## About

This is a chrome extension that helps to improve Dr. Owen's course lib websites for MSU. These are his step-based online classes. The extension doesn't have anything chrome-specific in it, so if you want you could probably definitely load it as a firefox/edge/whatever extension.

It works on any CSE faculty website that seems to be using courselib

## Features

### Site-Wide

* the "michigan state university" logo thing on the very top of the page now redirects to the base website rather than msu.edu (i have no idea who would ever want it to go to msu.edu instead)

### Assignments

#### General

* The navigation bar now shows your current progress in the assignment
* Hovering over the green bar also shows the progress of that element
* There is an extra nav bar on the bottom of the assignment pages now (you can't hover over it though, too lazy to figure that out)
  * Sometimes the nav bar is on the top for some reason. I think the CSE 477 website is laid out differently
* `Shift` + (`B`, `N`, `M`, `L`) will navigate (Back, Next, Next and Mark Complete, List) through pages
* There is a step sidebar on all step section pages which allow quick navigation between steps (basically an abbreviated version of the list page)

#### Videos

* Touchscreens can now tap to play/pause (before touch events did nothing)
* You can press `left arrow` to go back 5 seconds, and `right arrow` to go forward 5 seconds
* You can press `+` or `=` to speed the video up, `-` or `_` to slow it down, or `0` (zero) to reset it to normal speed.
    * There is also some text below the video which displays the current playback speed relative to the base 1.0
    * This speed is also saved across the extension when you reload the page, etc., but there are known issues when you click the buttons for large/medium and such
* `Spacebar` will play/pause the video (before it would scroll. It still scrolls if you are not focused on the video!)
* The play button is now centered (apparently the position property is animated in the css so it makes a funny floating animation towards the center) 

#### Quizzes

* Once you've answered a question, you can now press `Enter` or `Right Arrow` to continue to the next question (before you could press enter to submit an answer but not go to the next question)
    * These keys (enter and right arrow) can also start a quiz if you are on the main page of one.
* Quiz inputs no longer have autofill! This should prevent giant annoying walls of autofill suggestions.
* The first input box in a quiz (that's not hidden -- since there's a few hidden input boxes) is now focused automatically at the start of a question, to make it easier to tab through things

## Future Planned Features

* CSS changes to better support wider screens
* Force closed captions button to be enabled
* Notifications for grades being posted

## Installation

[Install on the chrome web store](https://chrome.google.com/webstore/detail/owen-cl-helper/gmlgnninocoenengbjdmjnidgabmpkmd?hl=en)

I have no current plans to port to firefox, safari, etc.