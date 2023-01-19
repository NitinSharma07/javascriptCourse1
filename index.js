let myLeads  = ["a", "b", "c"]
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")


inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
}) 

let listItems = []
for (let i = 0; i < myLeads.length; i += 1) {
    
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li)
}





