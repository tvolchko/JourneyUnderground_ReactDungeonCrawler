import React from "react";
import { connect } from "react-redux";



const MapTile = ({idx, currentFloor, exploredRooms, currentRoom}) => {

    
    if(idx === currentRoom){
        return (
            <div className="mapBox" id={idx} style={{border: '1px solid white', width: '9%', background: 'black'}}>'</div>
        )
    }
    
    if(exploredRooms[currentFloor].includes(idx)){
        return (
            <div className="mapBox" id={idx} style={{border: '1px solid black', width: '9%', background: 'black'}}>'</div>
        )
    }

    return (
        <div className="mapBox" id={idx} style={{border: '1px solid black', width: '9%'}}>'</div>
    )
}

const mapState = (state) => {
    return {
        currentFloor: state.currentFloor,
        currentRoom: state.currentRoom,
        exploredRooms: state.exploredRooms,
        rooms: state.rooms
    }
}

export default connect(mapState)(MapTile)