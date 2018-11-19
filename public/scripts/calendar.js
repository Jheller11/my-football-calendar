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
    let string = 'teams=' + favorites.teams.join(',')
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        let data = JSON.parse(xhttp.response)
        console.log(data)
        updateCalendar(data.matches, calendarList)
      }
    }
    xhttp.open('POST', '/calendar/refresh', true)
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    xhttp.send(string)
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
    let listItem = document.createElement('div')
    listItem.innerHTML = `<p>${item.awayTeam.name}: ${
      item.score.fullTime.awayTeam
    }</p><p> ${item.homeTeam.name}: ${item.score.fullTime.homeTeam}</p>`
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
