import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";
import ControlButton from "./ControlButtons";


const Controls = ({dispatch, rooms, currentRoom, currentFloor}) => {
        if(currentRoom.enemyPresent != null){
            return null
        }
        return(
            <div className="buttons"> {/* These buttons render dynamically based on properties of currentRoom*/}
                <ControlButton direction='roomNorth'/>                
                <ControlButton direction='roomWest'/>
                <ControlButton direction='roomSouth'/>  
                <ControlButton direction='roomEast'/>
                <ControlButton direction='nextFloor'/> 
                <ControlButton direction='treasurePresent'/> 
                 <div>{currentRoom.roomId}</div> {/*This is just here for debugging, displays current room ID */}
            </div>    
        )
    }
    const mapState = (state) => {
        return {
            rooms: state.rooms,
            currentRoom: state.currentRoom,
            currentFloor: state.currentFloor
        }
    }

    export default connect(mapState)(Controls)

