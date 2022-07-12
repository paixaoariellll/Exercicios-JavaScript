// change the count-el in the HTML to reflect the new count

// camelCase
let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}