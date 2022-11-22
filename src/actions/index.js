
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FORM_ERROR = 'FORM_ERROR'
export const LOG_OUT = 'LOG_OUT'
export const EXPLORE_ROOM = 'EXPLORE_ROOM'
export const CLIMB_FLOOR = 'CLIMB_FLOOR'



export const exploreRoom = (rmId, mapId) => {
    return ({ type: EXPLORE_ROOM, payload: [rmId, mapId]})
    
}

export const climbFloor = () => {
    return ({type: EXPLORE_ROOM})
}
