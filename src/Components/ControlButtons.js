import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";
import { lootRoom } from "../actions";
import { useEffect } from "react";
import useHotKeyFunc from "../Utils/hotKeyFunc";


const ControlButton = ({dispatch, currentRoom, direction}) => {//These move the player about the map. Expects a direction prop : roomNorth, roomWest, roomSouth, roomEast, nextFloor, or treasurePresent. A copy of this component will be rendered for each prop present on currentRoom


    const roomTravel = () => {//Uses direction prop to access current room key of same name, providing destination
        dispatch(exploreRoom(currentRoom[direction], currentRoom.mapId)) //Needs destination to update current room, and current mapId to update explored rooms array
    }

    useHotKeyFunc(direction, currentRoom, roomTravel) //Custom hook to add WASD control to movement

    
    const lootRoomButton = () => {
        dispatch(lootRoom(currentRoom.treasurePresent)) //Takes current room's item Id and loots it to the player's inventory
        //Currently bugged, does not remove treasurePresent from current room
    }
    if(currentRoom.treasurePresent != null && direction === 'treasurePresent'){ //Treasurepresent will be an Id starting at 0, or null if no loot present
        return (
            <button id= {direction} onClick= {lootRoomButton}>Loot the room!</button>
        )
    }
    if(currentRoom[direction] != null){ //Room keys of roomNorth or roomSouth etc will be the Id of the adjacent room, or null if no room adjacent
        return (
            <button id= {direction}  onClick= {roomTravel}>{direction}</button>
        )
    }else {
        return null //Renders nothing if no option exists for this direction
        
    }
    

    
    
}
const mapState = (state) => {
    return {
        currentRoom: state.currentRoom
    }
}
export default connect(mapState)(ControlButton)