import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS, FORM_ERROR, LOG_OUT } from "../actions";
import { itemArr } from "../Libraries/Items";

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
    
}

const reducer = (state= initialState, action)=>{
    switch (action.type) {
        case FETCH_SUCCESS: {
            return {
                ...state,
                loggedIn: true,
                fetching: false,
                error: '',
            }
        }

        default: {
            return state
        }
    }
}

export default reducer;
