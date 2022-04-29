# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/GeekyCoder25/Snap)
- Live Site URL: [Add live site URL here](https://geekycoder25.github.io/Snap/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<a href="javascript:void(0)" onclick="nav1()">
  Features <img src="./images/icon-arrow-down.svg" alt="drop-down" id="down" />
  <div class="nav1" id="nav1"></div
></a>
```

```js
function nav1() {
  var x = document.getElementById("nav1");
  var y = document.getElementById("down");
  if (x.style.display == "block") {
    x.style.display = "none";
    y.src = "./images/icon-arrow-down.svg";
  } else {
    x.style.display = "block";
    y.src = "./images/icon-arrow-up.svg";
  }
}
```

### Continued development

CSS flexbox
CSS grid
Javascript

### Useful resources

- [W3 Schools](https://www.w3schools.com) - This helped me learning codes I don't understand

## Author

- Website - [Toyib Lawal A.K.A Geeky Coder]("Don't have one yet")
- Frontend Mentor - [@yGeekyCoder25](https://www.frontendmentor.io/profile/GeekyCoder25)
- Twitter - [@_GeekyCoder_](https://twitter.com/_GeekyCoder_)
