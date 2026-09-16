let input = document.querySelector('.champ')
let btn = document.querySelector('.btn')
let spaceForResult = document.querySelector('.result')
let form = document.querySelector('form')

let list = document.createElement("ol")
let listElement = document.createElement("li")


list.appendChild(listElement)

form.addEventListener('submit', (e) => {
    e.preventDefault
})

btn.addEventListener('click', () => {
    listElement.textContent = input.value
    spaceForResult.appendChild(list)
})
