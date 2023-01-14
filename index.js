//document.getElementById("count-el").innerText = 5
// let count = 0
// function increment() {
//     count += 1
//     document.getElementById("count-el").innerText = count

// }


// function save() {
//     console.log(count)
// }

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}
function save(){
    record = count + " - " 
    saveEl.innerText += record
    console.log(count)
}
