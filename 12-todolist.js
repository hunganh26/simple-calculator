let myList = JSON.parse(localStorage.getItem('list')) || []

displayList()
function displayList() {
    let myListHTML = ''
    myList.forEach((myListObject, index) => {
        const name = myListObject.name
        const date = myListObject.dueDate
        const html = `
        <div class="list-item">${name}</div>
        <div class="due-date">${date}</div>
        <button class="delete-button js-delete-button">Delete</button>
        `
        myListHTML += html
    })
        
    document.querySelector('.js-display-list').innerHTML = myListHTML
    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            myList.splice(index, 1)
            saveToStorage()
            displayList()
        })
    })
}


document.querySelector('.js-list-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addToList()
    }
})

document.querySelector('.js-add-button').addEventListener('click', () => {
    addToList()
})
function addToList() {
    const input = document.querySelector('.js-list-input').value
    const date = document.querySelector('.js-date').value

    myList.push({
        name: input,
        dueDate: date
    })
    saveToStorage()
    document.querySelector('.js-list-input').value = ''
    displayList()
}
function saveToStorage() {
    localStorage.setItem('list',JSON.stringify(myList))
}
