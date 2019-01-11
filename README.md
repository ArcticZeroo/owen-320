# Owen CSE 320 Webpage Helper

## About

This is a chrome extension that helps to improve Dr. Owen's CSE 320 site for MSU. It doesn't have anything chrome-specific in it, so if you want you could probably definitely load it as a firefox/edge/whatever extension.

Obviously it only works on owen's 320 website.

## Features

### Site-Wide

* the "michigan state university" logo thing on the very top of the page now redirects to the base 320 website rather than msu.edu (i have no idea who would ever want it to go to msu.edu instead)

### Assignments

#### General

* The navigation bar now shows your current progress in the assignment
* Hovering over the green bar also shows the progress of that element

#### Videos

* Touchscreens can now tap to play/pause (before touch events did nothing)
* If the video is focused...
    * You can press `left arrow` to go back 5 seconds, and `right arrow` to go forward 5 seconds
    * You can press `+` or `=` to speed the video up, `-` or `_` to slow it down, or `0` (zero) to reset it to normal speed.
        * There is also some text below the video which displays the current playback speed relative to the base 1.0
    * `Spacebar` will play/pause (before it would scroll. It still scrolls if you are not focused on the video!)
* The play button is now centered (apparently the position property is animated in the css so it makes a funny floating animation towards the center) 

#### Quizzes

* Once you've answered a question, you can now press `Enter` or `Right Arrow` to continue to the next question (before you could press enter to submit an answer but not go to the next question)

## Installation

I don't feel like dealing with chrome webstore publishing (never done it and I suspect it costs $$), so you need to install it as a developer extension:

1. Clone this repo
2. Go to `about://extensions`
3. Toggle the button on the top right to enable developer mode extensions if it is off
4. Click "load unpacked", and select `dist/` from the cloned repo (the whole folder)
5. ??? 
6. Profit!

It's generally a bad idea to just install random github code into chrome, so if you want to be sure that `dist/bundle.js` isn't some malicious code (it's not, but there's no reason you need to believe a random person on the internet), you can clone this repo, open up the terminal, run `npm install`, and then `npx webpack`. The project will bundle all the TS to `dist/bundle.js` and copy the manifest there as well. 