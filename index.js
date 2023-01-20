let myLeads  = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
let myLocalLeads = JSON.parse(localStorage.getItem("myLeads"))
console.log(myLocalLeads)

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
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

 

