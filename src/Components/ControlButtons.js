import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";


const ControlButton = ({dispatch, currentRoom, direction}) => {
    let heading
    const roomTravel = () => {
        dispatch(exploreRoom(heading, currentRoom.mapId))
        console.log(heading)
    }
    const climbFloor = () => {

    }
    if(currentRoom[direction]  || currentRoom[direction] === 0){
        heading = currentRoom[direction]
        return (
            <button id= {direction} onClick= {roomTravel}>{direction}</button>
        )
    } else if(direction === 'stairs' && currentRoom.nextFloor){

    return (
        <button id= {direction} onClick= {roomTravel}>Climb the stairs</button>
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