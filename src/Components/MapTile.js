import React from "react";
import { connect } from "react-redux";


const MapTile = ({idx, explored}) => {
    let active = 'black' 

    return (
        <div className="mapBox" id={idx} style={{border: '1px solid black', width: '9%', background: {active}}}>'</div>
    )
}

export default MapTile