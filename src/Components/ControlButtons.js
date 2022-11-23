import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";
import { lootRoom } from "../actions";
import { useEffect } from "react";


const ControlButton = ({dispatch, currentRoom, direction}) => {//These move the player about the map. Expects a direction prop : roomNorth, roomWest, roomSouth, roomEast, nextFloor, or treasurePresent. These will be keys of current room object

    let button
    switch(direction){
        case 'roomNorth' : button = 'w'; break;
        case 'roomSouth' : button = 's'; break;
        case 'roomWest' : button = 'a'; break;
        case 'roomEast' : button = 'd'; break;
        case 'nextFloor' : button = 'Enter'; break;
        default : button = null;
    }
    
    // const keyPressActive = null
    // const handleKeyPress = (event) => {
    //     if(event.key === button){
    //         roomTravel()
    //     }
    //   }
    const roomTravel = () => {//Uses direction prop to access current room key of same name, providing destination
        dispatch(exploreRoom(currentRoom[direction], currentRoom.mapId)) //Needs destination to update current room, and current mapId to update explored rooms array
    }
      useEffect(() => {
        function handleKeyDown(e) {
            
            if(e.key === button && currentRoom[direction] != null){
                console.log(direction, currentRoom[direction], 'this')
                        roomTravel()
                    }
        }
    
        document.addEventListener('keydown', handleKeyDown);
    
        // Don't forget to clean up
        return function cleanup() {
          document.removeEventListener('keydown', handleKeyDown);
        }
      }, []);

    
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
            <button id= {direction}  onClick= {roomTravel}>{direction} {button} {currentRoom[direction]}</button>
        )
    }else {
        return null //renders nothing if no option exists for this direction
        
    }
    

    
    
}
const mapState = (state) => {
    return {
        currentRoom: state.currentRoom
    }
}
export default connect(mapState)(ControlButton)