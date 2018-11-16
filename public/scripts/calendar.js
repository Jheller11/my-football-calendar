console.log('working')
const teamList = document.querySelector('.team-list')
const input = document.querySelector('.team-input')
const addButton = document.querySelector('.add-button')

const initialize = () => {
  addButton.addEventListener('click', e => {
    e.preventDefault()
    handleInput()
  })
}

let favorites = {
  teams: []
}

const updateList = (arr, list) => {
  list.childNodes.forEach(child => {
    list.removeChild(list.childNodes[0])
  })
  arr.forEach(item => {
    let listItem = document.createElement('li')
    listItem.innerText = item
    list.appendChild(listItem)
  })
}

const handleInput = () => {
  let newTeam = input.value
  favorites.teams.push(newTeam)
  updateList(favorites.teams, teamList)
  input.value = ''
}

initialize()
