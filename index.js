/* let cards = []
let sum = 0
let message = ""
let hasBlackjack = false
let isAlive = false
let player = {
    name : "Per",
    chips : 145,
    
}

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if ( randomNumber > 10) {
        return 10
    } else {
        return randomNumber 
    }
}

function newCard() {
    if (isAlive && hasBlackjack === false) {
        let newCard  = getRandomCard()
        console.log("Drawing a new card from the deck.")
        cards.push(newCard)
        
        sum += newCard
        renderGame()
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i =0; i<cards.length; i += 1) {
        cardEl.textContent += cards[i] + " "
    } 
    sumEl.textContent = "Sum: "  +  sum
    if (sum < 21) {    
        message = "Do you want to draw a new card?"
    } else if (sum == 21) {
        message = "wohoo! You've got Blackjack!"
        hasBlackjack = true    
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
 */



