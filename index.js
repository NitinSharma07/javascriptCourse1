/* let firstCard = 10
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard 

let message = ""
let hasBlackjack = false
let isAlive = true

messageEl = document.getElementById("message-el")
// sumEl = document.getElementById("sum-el")
sumEl = document.querySelector("#sum-el")
cardEl = document.querySelector("#card-el")

function newCard() {
    let newCard  = 2
    console.log("Drawing a new card from the deck.")
    sum += newCard
    renderGame()
}

function startGame() {
    renderGame()
}

function renderGame() {
    // cardEl.textContent = "Cards: "
    // sumEl.textContent = "Sum: "
    cardEl.textContent = "Cards: " +  cards[0] + ", " + cards[1] 
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
} */



let featuredPosts = ["Check out my Netflix clone",
    "Here's the code for my project" ,
    "I've just relaunched my portfolio"
]
console.log(featuredPosts)

let per = ["Pe Haral Borgen", 35, true]

let messages = [
    "Hey, how's it going?",
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]
let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)

messages.pop()
console.log(messages)
messages.pop()
console.log(messages)