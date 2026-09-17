let input = document.querySelector('.champ')
let btn = document.querySelector('.btn')
let spaceForResult = document.querySelector('.result')

let boxList = document.createElement("ul")
boxList.className = 'boxList'

let textCount = document.querySelector('.textCount')
count = 1


btn.addEventListener('click', (e) => {
    e.preventDefault()

    if (input.value === "") {
        window.alert('le champ est obligatoire')
        return
    }

    let div = document.createElement('div')
    div.className = "capsule"

    let span = document.createElement('span')
    span.className = 'spanCap'

    let check = document.createElement('input')
    check.type = 'checkbox'
    
    let listElement = document.createElement("li")
    listElement.className ="listElement"

    listElement.textContent += input.value

    let btnDelete = document.createElement("button")
    btnDelete.textContent = 'Supprimer'
    btnDelete.className = 'btnDelete'

    btnDelete.addEventListener('click', ()=> {
        boxList.removeChild(div)
    })

    boxList.appendChild(div)
    div.appendChild(span)
    span.appendChild(check)
    span.appendChild(listElement)
    div.appendChild(btnDelete)
    spaceForResult.appendChild(boxList)

    input.value = ""

    textCount.textContent = 'Total: ' + document.querySelectorAll('li').length
})
