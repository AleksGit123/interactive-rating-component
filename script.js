"use strict"

let rate = document.querySelector(".rate");
let thanks = document.querySelector(".thanks");
let numbers = document.querySelectorAll(".rate_button");
let star = document.querySelector(".star");
let submitButton = document.querySelector(".submit_button");

numbers.forEach(button => {
   button.addEventListener("click", () => {
    star.classList.remove("animation");

    void star.offsetWidth;

    star.classList.add("animation");
    
   })
});



submitButton.addEventListener("click", () =>{
    rate.classList.add("hidden");
    thanks.classList.remove("hidden");
})








