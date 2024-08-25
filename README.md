# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See animations done with the intersection observer API

### Screenshot

[alt text?](/Screenshots/Screenshot%20desktop.png)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

This is shaping up to be my cleanest and quickest project ever, Everything is working so well together and I've made it all so well ordered and organized, Glory be to God. Yh so I'm back, Project got kinda messy when I started doing the responsive side of things, but I got it to work at the end of the day sha, Thank God. So my process for this project was basically to do everything section by section and also to pay really close attention to semantic styling(although that kinda fell apart when I started working of the mobile side of things😅 but I thing the code is still quite readable) I did incorporate some original feature into it like to slide into view which I did with intersection observer. Anyways I'm glad I'm done with the project, pheww! To God be the glory.

### Built with

- Semantic HTML5 markup
- Semantic CSS styling
- Some JS for interactivity and animations
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

Yh so I actually took some notes in my sticky notes app while I was working on the project so I'll just paste them here😅

1. You can't set multiple different transitions on multiple different transforms of the same element(this was basically the last thing I did in the project and it was probably the most challenging problem I ran in too although it didn't take too long to fix and the sollution was pretty straightforward)
2. instead of manipulaing the height and width of images which can cause your container to be non-fluid, instead give them a width and then set an aspect ratio
3. Image width doesn't appear to change upon shrinking until it is explicitly given a width in the css styling
4. You can use negative margin to suck up space you don't need(I kind of already knew this but it really helped me a lot when I was the working on the mobile side)
5. Pay attention to specificity in your media queries too!(This caught me off guard quite a few times but it's something I quickly realized)
6. Z-index has no effect on a non-positioned element(I ran into an issue that was super frustrating until I opened my developer tools)
7. you can use min-width and max-width both in media queries and in the picture element(The picture element own kinda frustrating cause I had used it on another project and it worked normally but on my own project even after setting a min-width on the desktop image, it was still showing when I was past the min-width, that was until I then set a max-width on the mobile image)
8. It seems you can't apply a transition on an element with a display of none

### Continued development

If I'm gonna improve on anything that I used in this project it will probably be my css, not that it's bad or anything but I want to learn more, I'm actually looking at learning tailwind quite soon

### Useful resources

- [Example resource 1](https://youtube.com) - I feel like this one is a no-brainer, I didn't really use any online resources for this project but trust you can always rely on youtube for remembering concepts you forgot. Shoutout to \_ for helping me refresh my knowledge on grid

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

Tbh i probably got most of my inspiration from previous projects I've worked on, that being said I'll like to acknowledge the countless coding content creators on youtube that constantly strive to help many people around the world grasp difficult concepts that they wouldn't otherwise understand and keep the coding community alive and bubbling
