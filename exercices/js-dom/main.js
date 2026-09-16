let input = document.querySelector('.champ')
let btn = document.querySelector('.btn')
let spaceForResult = document.querySelector('.result')
let form = document.querySelector('form')

let list = document.createElement("ol")


btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (input.value === "") {
        window.alert('le champ est obligatoire')
        return
    }
    
    let listElement = document.createElement("li")

    listElement.textContent += input.value

    let btnDelete = document.createElement("button")
    btnDelete.textContent = 'Supprimer'
    btnDelete.className = 'btnDelete'

    btnDelete.addEventListener('click', ()=> {
        list.removeChild(listElement)
        list.removeChild(btnDelete)
    })

    list.appendChild(listElement)
    list.appendChild(btnDelete)
    spaceForResult.appendChild(list)

    input.value = ""
})
