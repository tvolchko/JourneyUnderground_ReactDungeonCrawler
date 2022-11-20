import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";


const ControlButton = ({dispatch, currentRoom, direction}) => {
    let heading
    if(currentRoom[direction]){
        heading = currentRoom[direction]
    } else {
        return null
            // <button id= {direction} >Nothing this way</button>
        
    }
    const testButton = () => {
        dispatch(exploreRoom(heading, currentRoom.mapId))
        console.log(heading)
    }

    return (
        <button id= {direction} onClick= {testButton}>{direction}</button>
    )
}
const mapState = (state) => {
    return {
        currentRoom: state.currentRoom
    }
}
export default connect(mapState)(ControlButton)