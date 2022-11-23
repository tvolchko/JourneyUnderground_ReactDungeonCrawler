import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";
import ControlButton from "./ControlButtons";


const Controls = ({dispatch, rooms, currentRoom, currentFloor}) => {

        return(
            <div class="buttons"> {/* These buttons render dynamically based on properties of currentRoom*/}
                <ControlButton direction='roomNorth'/>                
                <ControlButton direction='roomWest'/>
                <ControlButton direction='roomSouth'/>  
                <ControlButton direction='roomEast'/>
                <ControlButton direction='nextFloor'/> 
                <ControlButton direction='treasurePresent'/> 
                <div>{currentRoom.roomId}</div>
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

