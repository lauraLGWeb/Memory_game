/*-----------------------------------------------
 * Project Name: Memory Game
 * File: script.js
 * Description: Main JavaScript logic for the project
 * Author: Laura
 * Date: Novembre 2025
 --------------------------------------------------*/
/* 
- shuffle les images au clic sur restart 
- mettre un timer dés que permiere carte decouverte et derniere 
- selectionner deux cartes maximum
- si cartes identique ok on valide et elles restent apparentes
- si cartes diiférentes, on valide pas et elles se retournent 
- au clic sur une image ca prends sa valeur et sa la retourne 
*/




/* ============================
   GLOBAL VARIABLES
   ============================ */

let flipCards = []
const cardsFrame = document.querySelector(".cards"); // yellow frame wich contains all the cards = parent

const restartBtn = document.querySelector(".Rtg");

const eachCard = document.querySelectorAll(".EachCard");

// array of pictures 
const cardsArray = ["assets/bulldozer.png", "assets/cementmixer.png","assets/crane.png","assets/dumptruck.png","assets/excavator.png","assets/frontlader.png","assets/grader.png","assets/roadroller.png","assets/bulldozer.png", "assets/cementmixer.png","assets/crane.png","assets/dumptruck.png","assets/excavator.png","assets/frontlader.png","assets/grader.png","assets/roadroller.png"];





/* ============================
   DOM ELEMENTS
   ============================ */





/* ============================
   MAIN FUNCTIONS
   ============================ */

//shuffle the array 
function shuffle() {
  cardsArray.sort((a, b) => 0.5 - Math.random());
}



function createCard() {
cardsArray.forEach(function(card){
    
    

//create the div for both 
    let bothCards = document.createElement("div");
    bothCards.className = "both";


//create the card with the picture 
    let newCard = document.createElement("img");
    newCard.src = card;
    newCard.alt = "Une image";
    newCard.className = "frontImage";


     //create the back of the card
    let newCardBack = document.createElement("div");
    newCardBack.className = "backImage";
    
     // add them to the dom 

    bothCards.appendChild(newCard);  
    bothCards.appendChild(newCardBack);  
    cardsFrame.appendChild(bothCards); 
    
    })
}

/* ============================
   EVENT LISTENERS
   ============================ */

// restart button
   restartBtn.addEventListener("click", function(){
    const cardsFrame = document.querySelector(".cards"); // yellow frame wich contains all the cards = parent
    shuffle();
    cardsFrame.innerHTML ="";
    cardsArray.forEach(function(card){
    

    //create the div for both 
    let bothCards = document.createElement("div");
    bothCards.className = "both";


    //create the card with the picture 
    let newCard = document.createElement("img");
    newCard.src = card;
    newCard.alt = "Une image";
    newCard.className = "frontImage";


     //create the back of the card
    let newCardBack = document.createElement("div");
    newCardBack.className = "backImage";
    
     // add them to the dom 

    bothCards.appendChild(newCard);  
    bothCards.appendChild(newCardBack);  
    cardsFrame.appendChild(bothCards);  
    })

});



/* ============================
   INITIALIZATION
   ============================ */
//---------------create the cards from the array 
  createCard();
//----------------


cards = document.querySelectorAll(".both")
cards.forEach(function(card){
    let flip = false;


        card.addEventListener("click", function(){
        // retourn card if not two returned
           
            if (flipCards.length < 2)  {
                //flip card
                let name = card.querySelector(".frontImage")
                srcImg = name.src
                // return the card 
                card.classList.add ("flip"); 
                flipCards.push(card);

                // comparaison if two cards returned
                if (flipCards.length === 2){
                    
                    if(flipCards[0].querySelector(".frontImage").src === flipCards[1].querySelector(".frontImage").src){


                    } else if(flipCards[0].querySelector(".frontImage").src !== flipCards[1].querySelector(".frontImage").src){

                        // if cards not identicals, flipping back after few secs 
                        setTimeout(function(){
                        flipCards[0].classList.remove("flip");
                        flipCards[1].classList.remove("flip");
                        flipCards = [];
                        },1500); 


                        

                        }
                    
                    }  
            
        }

    })

});
       
        
