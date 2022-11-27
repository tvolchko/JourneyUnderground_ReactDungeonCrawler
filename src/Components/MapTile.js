import React from "react";
import { connect } from "react-redux";



const MapTile = ({idx, exploredRooms, currentRoom}) => {

    //mapIds of rooms are set to reflect the idx of the tile they are supposed to show
    if(idx === currentRoom.mapId){ //currentRoom gets black background and white border to identify where player is
        return (
            <div className="mapBox" id={idx} style={{border: '1px solid white', width: '10%', background: 'black'}}></div>
        )
    }
    
    if(exploredRooms[currentRoom.floor -1].includes(idx)){ //room's floor key starts at 1 instead of 2, so must be reduced by one. explored rooms state has sub arrays for each floor, so it can remember where the player has been on previos floors while still wiping clean on floor change
        return (
            <div className="mapBox" id={idx} style={{border: '1px solid black', width: '10%', background: 'black'}}></div>
        )
    }

    return ( // generic unexplored
        <div className="mapBox" id={idx} style={{border: '1px solid black', width: '10%'}}></div>
    )
}

const mapState = (state) => {
    return {
        currentRoom: state.currentRoom,
        exploredRooms: state.exploredRooms,
        rooms: state.rooms
    }
}

export default connect(mapState)(MapTile)