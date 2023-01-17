/* let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 

let message = ""
let hasBlackjack = false
let isAlive = true

messageEl = document.getElementById("message-el")
sumEl = document.querySelector("#sum-el")
cardEl = document.querySelector("#card-el")

function getRandomCard() {
    return 5
}

function newCard() {
    let newCard  = getRandomCard()
    console.log("Drawing a new card from the deck.")
    cards.push(newCard)
    
    sum += newCard
    renderGame()
}

function startGame() {
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
    } else if (sum === 21) {
        message = "wohoo! You've got Blackjack!"
        hasBlackjack = true    
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
 */

let randomNumber = Math.random() * 6  // 0.0000 to 5.9999999
console.log(randomNumber)

let floorNumber = Math.floor(randomNumber) +1
console.log(floorNumber)   // 0.0000 to 5.999999

function rollDice() {
    return floorNumber 
}

let diceNum = rollDice()
console.log(diceNum)


