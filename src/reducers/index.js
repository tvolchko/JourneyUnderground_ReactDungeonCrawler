import {EXPLORE_ROOM, LOOT_ROOM, BEGIN_COMBAT, COMBAT_ACTION, END_COMBAT, SUBMIT_CHARACTER} from '../actions/index'
import { itemArr } from "../Libraries/Items";
import enemyArr from "../Libraries/Enemies";
import { floors } from "../Libraries/Rooms";
import { roomArr } from '../Libraries/Rooms';
import { itemObj } from '../Libraries/Items';

export const initialState = {
    player: {
        portait: null,
        name: 'Bill the Barbarian',
        strength: null,
        dexterity: null,
        intelligence: null,
        hpCurrent: 10,
        hpTotal: 10,
        armor: 15,
        tempArmor: 0,
        dmg: 4,
        weapon: null
        
    },
    inventory: [],
    enemy: null,
    currentRoom: roomArr[0],
    currentFloor: 0,
    exploredRooms: [[67], [64], [64]],
    lootedRooms: [],
    rooms: roomArr,
    readOutText: []
    
}

const reducer = (state= initialState, action)=>{
    switch (action.type) {

        case EXPLORE_ROOM : { //Used to move between rooms. Expects payload: [rmId, mapId]. rmId will be the destination to change current room, mapId is from the room being left as to be added to explored rooms array
            if(state.exploredRooms[state.currentRoom.floor - 1].includes(action.payload[1])){ // Prevents bloat if rooms are returned to
                return {
                    ...state,
                    currentRoom: state.rooms[action.payload[0]],
                }
            }
            const exploredCopy = state.exploredRooms.slice() //Deep copy to sidestep mutation
            exploredCopy[state.currentRoom.floor - 1].push(action.payload[1]) //Pushes newly explored mapId to explored array
            return {
                ...state,
                currentRoom: state.rooms[action.payload[0]],
                exploredRooms: exploredCopy
            }
        }

        case LOOT_ROOM : { //Expects payload: [itemId]
            const newInv = state.inventory.slice() //Mutation avoidance
            newInv.push(action.payload) 
            return {
                ...state,
                inventory: newInv
            }
        }

        case BEGIN_COMBAT : { //Expects payload: [enemyId]. Enemy being added to state will cause the fightScreen to render automatically
            const newEnemy = enemyArr.slice(action.payload[0], action.payload[0] + 1) //Grabs copy of enemy at enemyId
            return {
                ...state,
                enemy: newEnemy[0],
                readOutText: [`${action.payload[1] + newEnemy[0].name}`]
            }
        }

        case COMBAT_ACTION : { //Expects payload: [enemy, player]. Recieves updated combatant objects after combat action occurs, and updates state

            return {
                ...state,
                player: action.payload[1],
                enemy: action.payload[0],
                readOutText: action.payload[2]
            }
        }

        case END_COMBAT : { //No payload, updates current room state and its entry in the state.rooms array to clear enemyPresent
            const defeatedRoom = JSON.parse(JSON.stringify(state.currentRoom))
            const copyRoomArr = state.rooms.slice()
            defeatedRoom.enemyPresent = null
            copyRoomArr[state.currentRoom.roomId] = defeatedRoom
            return {
                ...state,
                rooms: copyRoomArr,
                currentRoom: defeatedRoom,
                enemy: null,
                readOutText: []
            }
        }

        case SUBMIT_CHARACTER : {

            return {
                ...state,
                inventory: action.payload[1],
                player: {...state.player, ...action.payload[0]}
            }
        }


        default: {
            return state
        }
    }
}

export default reducer;