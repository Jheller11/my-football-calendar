console.log('working')
const teamList = document.querySelector('.team-list')
const input = document.querySelector('.team-input')
const addButton = document.querySelector('.add-button')
const refreshButton = document.querySelector('.refresh-button')
const calendarList = document.querySelector('.calendar-list')

const initialize = () => {
  addButton.addEventListener('click', e => {
    e.preventDefault()
    handleInput()
  })
  refreshButton.addEventListener('click', e => {
    e.preventDefault()
    console.log('clicked')
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        let data = JSON.parse(xhttp.response)
        console.log(data)
        updateCalendar(data, calendarList)
      }
    }
    xhttp.open('GET', 'http://localhost:4000/calendar/refresh', true)
    xhttp.send()
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

const updateCalendar = (arr, list) => {
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
