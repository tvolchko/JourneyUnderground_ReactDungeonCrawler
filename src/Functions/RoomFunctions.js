export function nextFloor () {
    roomArr.forEach((room) => {
      document.getElementById(room.mapId).style.backgroundColor = ''
      document.getElementById(room.mapId).style.border = ''
    })
    roomArr.forEach((room) => {
      if (room.explored === true && room.floor === roomArr[player.room].floor) {
        document.getElementById(room.mapId).style.backgroundColor = 'black'
        document.getElementById(room.mapId).style.border = ''
      }
    })
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
  }
  
  export function roomText () {
    document.getElementById(roomArr[player.room].mapId).style.border = '1px solid white'
    document.getElementById(roomArr[player.room].mapId).style.backgroundColor = 'black'
    if (roomArr[player.room].roomNorth != null) {
      document.getElementById('roomOption1').innerHTML = 'Go North!'
    } else {
      document.getElementById('roomOption1').innerHTML = ''
    }
    if (roomArr[player.room].roomSouth != null) {
      document.getElementById('roomOption2').innerHTML = 'Go South!'
    } else {
      document.getElementById('roomOption2').innerHTML = ''
    }
    if (roomArr[player.room].roomEast != null) {
      document.getElementById('roomOption3').innerHTML = 'Go East!'
    } else {
      document.getElementById('roomOption3').innerHTML = ''
    }
    if (roomArr[player.room].roomWest != null) {
      document.getElementById('roomOption4').innerHTML = 'Go West!'
    } else {
      document.getElementById('roomOption4').innerHTML = ''
    }
    if (roomArr[player.room].treasurePresent != null) {
      document.getElementById('roomOption5').innerHTML = 'Loot the Chest!'
    } else if (roomArr[player.room].nextFloor != null) {
      document.getElementById('roomOption5').innerHTML = 'Advance to the next floor!'
    } else if (roomArr[player.room].previousFloor != null) {
      document.getElementById('roomOption5').innerHTML = 'Return to the last floor!'
    } else {
      document.getElementById('roomOption5').innerHTML = ''
    }
  }