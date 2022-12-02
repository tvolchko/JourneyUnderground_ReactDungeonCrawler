class Room {
  constructor (roomAtt) {
    this.roomId = roomAtt.roomId
    this.option1Text = roomAtt.option1Text
    this.option2Text = roomAtt.option2Text
    this.option3Text = roomAtt.option3Text
    this.option4Text = roomAtt.option4Text
    this.roomNorth = roomAtt.roomNorth
    this.roomEast = roomAtt.roomEast
    this.roomWest = roomAtt.roomWest
    this.roomSouth = roomAtt.roomSouth
    this.treasurePresent = roomAtt.treasurePresent
    this.explored = false
    this.enemyPresent = roomAtt.enemyPresent
    this.mapId = roomAtt.mapId
    this.nextFloor = roomAtt.nextFloor
    this.previousFloor = roomAtt.previousFloor
    this.floor = roomAtt.floor
  }

}
const startingRoom = new Room({
    roomId: 0, // Largely not used, mostly for own reference. Represents room's index in roomArr
    roomNorth: 1, //the id and index of room adjacent in the direction of the key
    roomWest: null, //Null if no room adjacent
    roomEast: null,
    roomSouth: null,
    treasurePresent: null, //itemArr index of lootable item in the room, null if no loot
    enemyPresent: null, //enemyArr index of present enemy, null if no enemy present
    mapId: 67, //Represents the index of the map tile where this room is to be located
    floor: 1 //Represents the dungeon floor this room is on. Would have been easier to start at 0, but here we are
  })
  const room1 = new Room({
    roomId: 1,
    roomNorth: 2,
    roomWest: null,
    roomEast: null,
    roomSouth: 0,
    treasurePresent: 'key',
    enemyPresent: 0,
    mapId: 57,
    floor: 1
  })
  const room2 = new Room({
    roomId: 2,
    roomNorth: 3,
    roomWest: null,
    roomEast: null,
    roomSouth: 1,
    treasurePresent: 'potion',
    enemyPresent: null,
    mapId: 47,
    floor: 1
  })
  const room3 = new Room({
    roomId: 3,
    roomNorth: null,
    roomWest: 4,
    roomEast: null,
    roomSouth: 2,
    treasurePresent: 'key',
    enemyPresent: null,
    mapId: 37,
    nextFloor: 10, //Represents the index of the room that connects this room to the next floor
    floor: 1
  })
  const room4 = new Room({
    roomId: 4,
    roomNorth: null,
    roomWest: 5,
    roomEast: 3,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: 1,
    mapId: 36,
    floor: 1
  })
  const room5 = new Room({
    roomId: 5,
    roomNorth: null,
    roomWest: null,
    roomEast: 4,
    roomSouth: 6,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 35,
    floor: 1
  })
  const room6 = new Room({
    roomId: 6,
    roomNorth: 5,
    roomWest: 7,
    roomEast: null,
    roomSouth: null,
    treasurePresent: 'potion',
    enemyPresent: null,
    mapId: 45,
    floor: 1
  })
  const room7 = new Room({
    roomId: 7,
    roomNorth: null,
    roomWest: null,
    roomEast: 6,
    roomSouth: 8,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 44,
    floor: 1
  })
  const room8 = new Room({
    roomId: 8,
    roomNorth: 7,
    roomWest: 9,
    roomEast: null,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 54,
    floor: 1
  })
  const room9 = new Room({
    roomId: 9,
    roomNorth: null,
    roomWest: null,
    roomEast: 8,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 53,
    nextFloor: 10,
    floor: 1
  })
  const room10 = new Room({
    roomId: 10,
    roomNorth: 11,
    roomWest: null,
    roomEast: null,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 64,
    previousFloor: 9,
    floor: 2
  })
  const room11 = new Room({
    roomId: 11,
    roomNorth: 12,
    roomWest: null,
    roomEast: null,
    roomSouth: 10,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 54,
    nextFloor: 25,
    floor: 2
  })
  const room12 = new Room({
    roomId: 12,
    roomNorth: null,
    roomWest: 19,
    roomEast: 13,
    roomSouth: 11,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 44,
    floor: 2
  })
  const room13 = new Room({
    roomId: 13,
    roomNorth: null,
    roomWest: 12,
    roomEast: 14,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 45,
    floor: 2
  })
  const room14 = new Room({
    roomId: 14,
    roomNorth: null,
    roomWest: 13,
    roomEast: 15,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 46,
    floor: 2
  })
  const room15 = new Room({
    roomId: 15,
    roomNorth: 16,
    roomWest: 14,
    roomEast: null,
    roomSouth: 18,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 47,
    floor: 2
  })
  const room16 = new Room({
    roomId: 16,
    roomNorth: 17,
    roomWest: null,
    roomEast: null,
    roomSouth: 15,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 37,
    floor: 2
  })
  const room17 = new Room({
    roomId: 17,
    roomNorth: null,
    roomWest: null,
    roomEast: null,
    roomSouth: 16,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 27,
    nextFloor: 25,
    floor: 2
  })
  const room18 = new Room({
    roomId: 18,
    roomNorth: 15,
    roomWest: null,
    roomEast: null,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 57,
    floor: 2
  })
  const room19 = new Room({
    roomId: 19,
    roomNorth: 20,
    roomWest: null,
    roomEast: 12,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 43,
    floor: 2
  })
  const room20 = new Room({
    roomId: 20,
    roomNorth: 21,
    roomWest: null,
    roomEast: null,
    roomSouth: 19,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 33,
    floor: 2
  })
  const room21 = new Room({
    roomId: 21,
    roomNorth: 22,
    roomWest: 23,
    roomEast: 24,
    roomSouth: 20,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 23,
    floor: 2
  })
  const room22 = new Room({
    roomId: 22,
    roomNorth: null,
    roomWest: null,
    roomEast: null,
    roomSouth: 21,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 13,
    floor: 2
  })
  const room23 = new Room({
    roomId: 23,
    roomNorth: null,
    roomWest: null,
    roomEast: 21,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 22,
    floor: 2
  })
  const room24 = new Room({
    roomId: 24,
    roomNorth: null,
    roomWest: 21,
    roomEast: null,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 24,
    floor: 2
  })
  const room25 = new Room({
    roomId: 25,
    roomNorth: 26,
    roomWest: null,
    roomEast: null,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 64,
    previousFloor: 17,
    floor: 3
  })
  const room26 = new Room({
    roomId: 26,
    roomNorth: 27,
    roomWest: 30,
    roomEast: 35,
    roomSouth: 25,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 54,
    floor: 3
  })
  const room27 = new Room({
    roomId: 27,
    roomNorth: 28,
    roomWest: null,
    roomEast: null,
    roomSouth: 26,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 44,
    floor: 3
  })
  const room28 = new Room({
    roomId: 28,
    roomNorth: 29,
    roomWest: 34,
    roomEast: 39,
    roomSouth: 27,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 34,
    floor: 3
  })
  const room29 = new Room({
    roomId: 29,
    roomNorth: null,
    roomWest: null,
    roomEast: null,
    roomSouth: 28,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 24,
    floor: 3
  })
  const room30 = new Room({
    roomId: 30,
    roomNorth: null,
    roomWest: 31,
    roomEast: 26,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 53,
    floor: 3
  })
  const room31 = new Room({
    roomId: 31,
    roomNorth: 32,
    roomWest: null,
    roomEast: 30,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 52,
    floor: 3
  })
  const room32 = new Room({
    roomId: 32,
    roomNorth: 33,
    roomWest: null,
    roomEast: null,
    roomSouth: 31,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 42,
    floor: 3
  })
  const room33 = new Room({
    roomId: 33,
    roomNorth: null,
    roomWest: null,
    roomEast: 34,
    roomSouth: 32,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 32,
    floor: 3
  })
  const room34 = new Room({
    roomId: 34,
    roomNorth: null,
    roomWest: 33,
    roomEast: 28,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 33,
    floor: 3
  })
  const room35 = new Room({
    roomId: 35,
    roomNorth: null,
    roomWest: 26,
    roomEast: 36,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 55,
    floor: 3
  })
  const room36 = new Room({
    roomId: 36,
    roomNorth: 37,
    roomWest: 35,
    roomEast: null,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 56,
    floor: 3
  })
  const room37 = new Room({
    roomId: 37,
    roomNorth: 38,
    roomWest: null,
    roomEast: null,
    roomSouth: 36,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 46,
    floor: 3
  })
  const room38 = new Room({
    roomId: 38,
    roomNorth: 40,
    roomWest: 39,
    roomEast: null,
    roomSouth: 37,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 36,
    floor: 3
  })
  const room39 = new Room({
    roomId: 39,
    roomNorth: null,
    roomWest: 28,
    roomEast: 38,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 35,
    floor: 3
  })
  const room40 = new Room({
    roomId: 40,
    roomNorth: 41,
    roomWest: null,
    roomEast: null,
    roomSouth: 38,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 26,
    floor: 3
  })
  const room41 = new Room({
    roomId: 41,
    roomNorth: 42,
    roomWest: null,
    roomEast: null,
    roomSouth: 40,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 16,
    floor: 3
  })
  const room42 = new Room({
    roomId: 42,
    roomNorth: null,
    roomWest: null,
    roomEast: 43,
    roomSouth: 41,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 6,
    floor: 3
  })
  const room43 = new Room({
    roomId: 43,
    roomNorth: null,
    roomWest: 42,
    roomEast: 44,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 7,
    floor: 3
  })
  const room44 = new Room({
    roomId: 44,
    roomNorth: null,
    roomWest: 43,
    roomEast: null,
    roomSouth: null,
    treasurePresent: null,
    enemyPresent: null,
    mapId: 8,
    floor: 3
  })
  export const roomArr = [startingRoom, room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24, room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36, room37, room38, room39, room40, room41, room42, room43, room44] //Collection of all rooms, their index here will be used to identify them in most circumstances



  // I thought I might want to be able to access all rooms on a given floor from one array, but haven't found a good reason to use them
  // const floorOne = [startingRoom, room1, room2, room3, room4, room5, room6, room7, room8, room9]
  // const floorTwo = [room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24]
  // const floorThree = [room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36, room37, room38, room39, room40, room41, room42, room43, room44]
  // export const floors = [floorOne, floorTwo, floorThree]


