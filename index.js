//document.getElementById("count-el").innerText = 5
let count = 0
function increment() {
    count += 1
    document.getElementById("count-el").innerText = count

}


function save() {
    console.log(count)
}

let username = 'Per'
let greeting = "Hi, my name is "
myGreeting =greeting + username
console.log(myGreeting)
