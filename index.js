let myLeads  = []
let oldLeads = []
const inputEl = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const ulEl = document.querySelector("#ul-el")
const myLocalLeads = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.querySelector("#delete-btn")
const tabBtn = document.querySelector("#tab-btn")

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    ulEl.innerHTML = ""
    myLeads = []
})


tabBtn.addEventListener('click', function() {
    // chrome.tabs.query({active:true, currentWindow: true}, function(tabs){
    // })
    chrome.tabs.query({active: true, currentWindow : true}, function(tab) {
        myLeads.push(tab[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
    

})

if (myLocalLeads) {
    myLeads = myLocalLeads
    render(myLeads)
}



inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render()
    console.log(localStorage.getItem("myLeads"))
}) 

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i += 1) {
        listItems += `<li>
            <a target= _blank href = ${leads[i]}>
                ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}

