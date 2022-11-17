import React from "react";
import '../App.css';


let rooms = []
for(let i = 1; i<101; i++){
    rooms.push(`rm${i}`)
}


const Map = () => {
        return (
            <div className="mapContainer">
            
                {rooms.map(room => {
                    return(
                        <div className="mapBox" id={room} style={{border: '1px solid black', width: '9%'}}>'</div>
                    )
                })}
            </div>
        )
    }

export default Map
