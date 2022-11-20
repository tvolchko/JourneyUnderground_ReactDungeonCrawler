import React from "react";
import { connect } from "react-redux";
import { exploreRoom } from "../actions";


const Controls = ({dispatch}) => {

    const testButton = () => {
        dispatch(exploreRoom(12))
    }
        return(
            <div class="buttons">
                            <button onClick={testButton()}>Room Button</button>
                            <button id= 'roomOption5' onClick= {null}></button>
                            <button id= 'roomOption1' onClick= {testButton}></button>
                            <button id= 'roomOption3' onClick= {testButton}></button>
                            <button id= 'roomOption4' onClick= {testButton}></button> 
                            <button id= 'roomOption2' onClick= {testButton}></button>                    

                            <div id="roomIdTester"></div>
                            <div id="playerLog"></div>   
                            <div id="combatLog"></div>
                            
                        </div>    
        )
    }
    export default connect()(Controls)

