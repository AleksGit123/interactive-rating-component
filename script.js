"use strict"

let numbers = document.querySelectorAll(".rate_button");
let star = document.querySelector(".star");

numbers.forEach(button => {
   button.addEventListener("click", () => {
    star.classList.remove("animation");

    void star.offsetWidth;

    star.classList.add("animation");
    
   })
});



// star.addEventListener("animationend", () => {
//     setTimeout(() => {
//         star.classList.remove("animation")
//     },100)
// });






