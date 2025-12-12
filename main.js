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

//timer 
const timer = document.querySelector(".timer");
let temps = 0;
let minutesStr = "";
let secondesStr ="";
let timerStarted = false;   
let secondsCount = ""


let flipCards = [];
// found cards 
let flip = 0;

const cardsFrame = document.querySelector(".cards"); // yellow frame wich contains all the cards = parent

const shuffleBtn = document.querySelector(".Rtg");

const eachCard = document.querySelectorAll(".EachCard");

// array of pictures
const cardsArray = [
    "assets/bulldozer.png",
    "assets/cementmixer.png",
    "assets/crane.png",
    "assets/dumptruck.png",
    "assets/excavator.png",
    "assets/frontlader.png",
    "assets/grader.png",
    "assets/roadroller.png",
    "assets/bulldozer.png",
    "assets/cementmixer.png",
    "assets/crane.png",
    "assets/dumptruck.png",
    "assets/excavator.png",
    "assets/frontlader.png",
    "assets/grader.png",
    "assets/roadroller.png",
];

/* ============================
   DOM ELEMENTS
   ============================ */

/* ============================
   MAIN FUNCTIONS
   ============================ */

//shuffle the array


//---------------set up the timer


// give the timer for seconds and minuts
function addTime(){
let minutes = parseInt(temps / 60,10);
let secondes = parseInt(temps % 60, 10);

// Formater pour toujours avoir deux chiffres
 minutesStr = String(minutes).padStart(2, '0');
 secondesStr = String(secondes).padStart(2, '0');

timer.innerHTML = minutesStr + ":" + secondesStr;
temps++
}

function startTimer(){
     if (!timerStarted){
              secondsCount = setInterval(addTime, 1000);
            timerStarted = true;  
        }
}

function shuffle() {
    cardsArray.sort((a, b) => 0.5 - Math.random());
}

function createCard() {
    cardsArray.forEach(function (card) {
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
    });
}


function restart() {

    const cardsFrame = document.querySelector(".cards"); // yellow frame wich contains all the cards = parent
    flipCards = [];
    flip = 0;
    temps = 0;
    clearInterval(secondsCount);
    timerStarted = false;
    
    shuffle();
    cardsFrame.innerHTML = "";
    createCard();
    play();

}


function play(){
cards = document.querySelectorAll(".both");
cards.forEach(function (card) {
   

    card.addEventListener("click", function () {

       startTimer();

        // return card if not two returned
        if (flipCards.length < 2) {
            //flip card
            let name = card.querySelector(".frontImage");
            srcImg = name.src;
            // return the card
            card.classList.add("flip");
            flipCards.push(card);

            // comparaison if two cards returned
            if (flipCards.length === 2) {
                if (
                    flipCards[0].querySelector(".frontImage").src ===
                    flipCards[1].querySelector(".frontImage").src
                ) {
                    flipCards = [];
                    flip += 2;

                    // if all the card are returned, win message with new game
                    if (flip === 16){   
                        wonMessage();
                        //desactivate shuffle the game 
                       

                                               
                        
                    } else {
                        console.log(flip);  
                    }

                } else if (
                    flipCards[0].querySelector(".frontImage").src !==
                    flipCards[1].querySelector(".frontImage").src
                ) {
                    // if cards not identicals, flipping back after few secs
                    setTimeout(function () {
                        flipCards[0].classList.remove("flip");
                        flipCards[1].classList.remove("flip");
                        flipCards = [];
                    }, 1000);
                }
            }
        }
    });
});


}
 

function wonMessage(){

let popUpMsgSection = document.querySelector(".popUpMsg");

//div creation
let divWonMessage = document.createElement("div");
divWonMessage.classList.add("divMsg");

//message creation
let wonMessageP = document.createElement("p");
wonMessageP.innerHTML = "You are a winner!!<br> Only "  + minutesStr + " : " + secondesStr;
wonMessageP.classList.add("winMsg");
//Close button creation
let closeBtn = document.createElement("button");
closeBtn.classList.add("closeBtn");
closeBtn.innerHTML = "Close";

//restart button creation
let restartBtn = document.createElement("button");
restartBtn.classList.add("restartBtn");
restartBtn.innerHTML = "Restart";

 // add them to the dom
popUpMsgSection.appendChild(divWonMessage);
divWonMessage.appendChild(wonMessageP);
divWonMessage.appendChild(closeBtn);
divWonMessage.appendChild(restartBtn);


clearInterval(secondsCount);
temps = 0;
timerStarted = false;

shuffleBtn.removeEventListener("click", restart);


//closing and restart buttons
closeBtn.addEventListener("click", function(){
    divWonMessage.remove()
    shuffleBtn.addEventListener("click", restart);
    
})

restartBtn.addEventListener("click", function(){
    restart()
    divWonMessage.remove();
    shuffleBtn.addEventListener("click", restart);
   
})

};


/* ============================
   EVENT LISTENERS
   ============================ */

// restart button
shuffleBtn.addEventListener("click", restart);


/* ============================
   INITIALIZATION
   ============================ */
//---------------create the cards from the array
createCard();
play();
//----------------


//----------------