let myLeads  = '["www.example.com"]'
myLeads=  JSON.parse(myLeads)
myLeads.push("www.example2.com")
myLeads = JSON.stringify(myLeads)
console.log(myLeads)
console.log(typeof(myLeads))

const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")

// localStorage.setItem("name", "Nitin Sharma")
console.log(localStorage.getItem("name"))
localStorage.clear()



inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    renderLeads()
    inputEl.value =""
}) 

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i += 1) {
        listItems += `<li>
            <a target= _blank href = ${myLeads[i]}>
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

 

