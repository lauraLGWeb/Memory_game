/*-----------------------------------------------
 * Project Name: Memory Game
 * File: script.js
 * Description: Main JavaScript logic for the project
 * Author: Laura
 * Date: Novembre 2025
 --------------------------------------------------*/
/* 
- shuffle les images au clic sur restart 
- 
*/




/* ============================
   GLOBAL VARIABLES
   ============================ */


   const cardsFrame = document.querySelector(".cards"); // yellow frame wich contains all the cards = parent

  


    
const restartBtn = document.querySelector(".Rtg");

const eachCard = document.querySelectorAll(".EachCard");

// array of pictures 
const cardsArray = ["assets/bulldozer.png", "assets/cementmixer.png","assets/crane.png","assets/dumptruck.png","assets/excavator.png","assets/frontlader.png","assets/grader.png","assets/roadroller.png","assets/bulldozer.png", "assets/cementmixer.png","assets/crane.png","assets/dumptruck.png","assets/excavator.png","assets/frontlader.png","assets/grader.png","assets/roadroller.png"];





/* ============================
   DOM ELEMENTS
   ============================ */
// const button = document.querySelector('');




/* ============================
   MAIN FUNCTIONS
   ============================ */

//shuffle the array 
function shuffle() {
  cardsArray.sort((a, b) => 0.5 - Math.random());
}



function createCard() {
cardsArray.forEach(function(card){
    
 //create the card with the picture 
    let newCard = document.createElement("img");
    newCard.src = card;
    newCard.alt = "Une image";
    newCard.className = "frontImage";


    // add it to the dom 
    cardsFrame.appendChild(newCard);  
  
    console.log(card);
    
   
    
})
}

/* ============================
   EVENT LISTENERS
   ============================ */


/* ============================
   INITIALIZATION
   ============================ */


//---------------create the cards from the array 
  createCard();
//----------------reset the order of pictures 


restartBtn.addEventListener("click", function(){
    const cardsFrame = document.querySelector(".cards"); // yellow frame wich contains all the cards = parent
    shuffle();
    cardsFrame.innerHTML ="";
    cardsArray.forEach(function(card){
    

   //create the card with the picture 
    let newCard = document.createElement("img");
    newCard.src = card;
    newCard.alt = "Une image";
    newCard.className = "frontImage";

    
     // add it to the dom 
    cardsFrame.appendChild(newCard);  
    
    
})
    

});

