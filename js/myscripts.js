
const shareBtn = document.querySelector(".profile__share");
const shareLinks = document.querySelector(".share");
const html = document.querySelector("html");
const ImgHover = document.querySelector("#hover")

shareBtn.addEventListener("click", function () {
    shareLinks.classList.add("active");
})

ImgHover.addEventListener("click", function () {
    shareLinks.classList.add("active");
})

html.addEventListener("click", function (e) {
    if (e.target !== shareBtn & e.target !== ImgHover & e.target !== shareLinks) shareLinks.classList.remove("active");
})

