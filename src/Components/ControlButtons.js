import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";
import { lootRoom } from "../actions";


const ControlButton = ({dispatch, currentRoom, direction}) => {
    let heading
    const roomTravel = () => {
        dispatch(exploreRoom(heading, currentRoom.mapId))
    }
    const lootRoomButton = () => {
        dispatch(lootRoom(currentRoom.treasurePresent))
    }
    if(currentRoom.treasurePresent >= 0 && direction === 'treasurePresent'){
        return (
            <button id= {direction} onClick= {lootRoomButton}>Loot the room!</button>
        )
    }
    if(currentRoom[direction]  || currentRoom[direction] === 0){
        heading = currentRoom[direction]
        return (
            <button id= {direction} onClick= {roomTravel}>{direction}</button>
        )
    }else {
        return null
        
    }
    

    
    
}
const mapState = (state) => {
    return {
        currentRoom: state.currentRoom
    }
}
export default connect(mapState)(ControlButton)