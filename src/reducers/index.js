import {EXPLORE_ROOM} from '../actions/index'
import { itemArr } from "../Libraries/Items";
import enemyArr from "../Libraries/Enemies";
import { floors } from "../Libraries/Rooms";
import { roomArr } from '../Libraries/Rooms';


export const initialState = {
    player: {
        name: 'Bill the Barbarian',
        strength: 5,
        dexterity: 4,
        constitution: 3,
        hpCurrent: 10,
        hpTotal: 10,
        armor: 15,
        tempArmor: 0,
        dmg: 4,
        room: 0,
        inventory: [itemArr[0], itemArr[1]]
    },
    enemy: null,
    currentRoom: roomArr[0],
    currentFloor: 0,
    exploredRooms: [[67], [], []],
    lootedRooms: [],
    rooms: roomArr
    
}

const reducer = (state= initialState, action)=>{
    switch (action.type) {

        case EXPLORE_ROOM : {
            const exploredCopy = state.exploredRooms.slice()
            exploredCopy[state.currentFloor].push(action.payload[1])
            return {
                ...state,
                currentRoom: state.rooms[action.payload[0]],
                exploredRooms: exploredCopy
            }
        }

        default: {
            return state
        }
    }
}

export default reducer;