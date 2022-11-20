import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";
import ControlButton from "./ControlButtons";


const Controls = ({dispatch, rooms, currentRoom, currentFloor}) => {

    const testButton = (x) => {
        dispatch(exploreRoom(x))
    }
    console.log(currentRoom)
        return(
            <div class="buttons">
                <ControlButton direction='roomNorth'/>                
                <ControlButton direction='roomWest'/>
                <ControlButton direction='roomSouth'/>  
                <ControlButton direction='roomEast'/>  
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

