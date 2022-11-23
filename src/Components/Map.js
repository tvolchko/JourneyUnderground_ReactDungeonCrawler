import React from "react";
import '../App.css';
import MapTile from './MapTile'
import { connect } from "react-redux";





const Map = ({currentRoom}) => {
    let rooms = Array(100).fill(0) //Initializes an array size 100 to be mapped 
        return (
            <div className="mapContainer">
            
                {rooms.map((room, idx) => { // Renders 100 maptiles and passes idx which is used as the mapId key of currentRoom or adjecent rooms
                    return(
                        <MapTile key={idx} idx={idx}/>
                    )
                })}
            </div>
        )
    }

    const mapState = (state) => {
        return {
            currentRoom: state.currentRoom,
        }
    }
    
    export default connect(mapState)(Map)
