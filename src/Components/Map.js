import React from "react";
import '../App.css';
import MapTile from './MapTile'
import { connect } from "react-redux";



let rooms = []
for(let i = 1; i<101; i++){
    rooms.push(`rm${i}`)
}
const clickTest = () => {

}

const Map = ({currentRoom}) => {
        return (
            <div className="mapContainer">
            
                {rooms.map((room, idx) => {
                    return(
                        <MapTile key={idx} idx={idx} explored={true}/>
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
