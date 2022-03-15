# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](/screenshot_desktop.png)
![](/screenshot_mobile.png)

### Links

- Solution URL: https://github.com/Rapha445/article-preview-component-master
- Live Site URL: https://rapha445.github.io/article-preview-component-master/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Custom Javascript

### What I learned

- Change image on hover with CSS:

```html
<div class="profile__share">
  <img id="fixed" src="images/icon-share.svg" alt="Share">
  <img id="hover" src="images/icon-share_focus.svg" alt="Share icon_focus">
</div>
```

```css
.profile__share #fixed {
  width: 50%;
  margin: auto;
  display: block;
}

.profile__share #hover {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0;
  transition: opacity .2s;
  width: 50%;
  height: 50%;
  border-radius: 50%;
  margin: auto;
  display: block;
}

.profile__share:hover #hover {
  opacity: 1;
}
```

- Apply transition from display:none to display:block

```css
@-webkit-keyframes fadeIn {
  from { opacity: 0; }
    to { opacity: 1; }
}
@keyframes fadeIn {
  from { opacity: 0; }
    to { opacity: 1; }
}

.share {
  display: none;
}

.active, .share:focus {
  display: flex;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 0.5s;
```

- Remove the class "active" when clicking anywhere BUT ...

```js
const shareBtn = document.querySelector(".profile__share");
const shareLinks = document.querySelector(".share");
const html = document.querySelector("html");
const ImgHover = document.querySelector("#hover")

html.addEventListener("click", function (e) {
    if (e.target !== shareBtn & e.target !== ImgHover & e.target !== shareLinks) shareLinks.classList.remove("active");
})
```

### Continued development

- I want to learn more Javascript and become more comfortable with it.

- I want to be more precise when positioning elements (not approximative placement)

### Useful resources

- [Beautiful CSS box-shadow examples](https://getcssscan.com/css-box-shadow-examples) - Nice box-shadow that I can copy paste
- [Bubbly](http://projects.verou.me/bubbly/) - Very practical tool to copy paste the speech bubble CSS.
- [Toggle class by adding the class name when element is clicked and remove when clicked outside](https://www.geeksforgeeks.org/toggle-class-by-adding-the-class-name-when-element-is-clicked-and-remove-when-clicked-outside/) - I used this code to remove the "active" class when clicking anywhere on the page.
- [Transitions on the CSS display property](https://stackoverflow.com/questions/3331353/transitions-on-the-css-display-property) - This page gives some advice on how to have a transition on the display property.

## Author

Frontend Mentor - [@Rapha445](https://www.frontendmentor.io/profile/Rapha445)
