"use strict"

let rate = document.querySelector(".rate");
let thanks = document.querySelector(".thanks");
let numbers = document.querySelectorAll(".rate_button");
let star = document.querySelector(".star");
let submitButton = document.querySelector(".submit_button");
let score = document.querySelector(".score");
let selectedValue = "";


numbers.forEach(button => {
    
   button.addEventListener("click", () => {
    // animation add
    

    star.classList.remove("animation");

    void star.offsetWidth;

    star.classList.add("animation");
    
    // default bg color for clicking

    numbers.forEach(btn => btn.style.backgroundColor = "#252D37");


    button.style.backgroundColor = "#e68226";
    
    selectedValue = button.textContent.trim(); 

    console.log("Selected Button:", selectedValue); 


   })
});


// submit button click

submitButton.addEventListener("click", () =>{
    if(!selectedValue){
        
        numbers.forEach(button =>{
            button.style.border = "2px solid red";
        })
        setTimeout(() => {
            numbers.forEach(button =>{
                button.style.border = "0";
            })
            
        }, 1000)
        return;
        
    }
    rate.classList.add("hidden");
    thanks.classList.remove("hidden");
   

    numbers.forEach(button =>{

        if (selectedValue) {
            score.innerHTML = selectedValue;
        } 
        else{
            console.log("None");
        }    

    })
})
