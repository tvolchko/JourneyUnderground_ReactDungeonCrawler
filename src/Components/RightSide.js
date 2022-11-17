import React from "react";
import Controls from './Controls'
import { connect } from "react-redux";
import FightScreen from "./FightScreen";


const RightSide = ({enemy}) => {
    
        return (
            <div className="roomContainer">
                            <div>
                                <FightScreen/>
                            </div> 
                            <div>
                                <Controls/>
                            </div>
                        </div>
        )
    }
    const mapState = (state) => {
        return {
            enemy: state.enemy,
        }
    }
    
    export default connect(mapState)(RightSide)