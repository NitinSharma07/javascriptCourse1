/* let cards = []
let sum = 0
console.log(cards)
let message = ""
let hasBlackjack = false
let isAlive = false

messageEl = document.getElementById("message-el")
sumEl = document.querySelector("#sum-el")
cardEl = document.querySelector("#card-el")

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
    let newCard  = getRandomCard()
    console.log("Drawing a new card from the deck.")
    cards.push(newCard)
    
    sum += newCard
    renderGame()
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
let likesDocumentaries = false
let likesStartups  = true

if (likesDocumentaries || likesStartups) {
    recommendMovie()
}

function recommendMovie() {
    console.log("Hey, check out this new film we think you will like.")
}