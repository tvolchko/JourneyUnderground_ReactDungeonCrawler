
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FORM_ERROR = 'FORM_ERROR'
export const LOG_OUT = 'LOG_OUT'
export const EXPLORE_ROOM = 'EXPLORE_ROOM'



export const exploreRoom = (rmId, mapId) => {
    return ({ type: EXPLORE_ROOM, payload: [rmId, mapId]})
    
}

export const logout = () => {
    window.localStorage.removeItem('login')
    return({type: LOG_OUT})
}
