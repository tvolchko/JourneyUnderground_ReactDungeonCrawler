import React from "react";
import Controls from './Controls'
import { connect } from "react-redux";
import FightScreen from "./FightScreen";
import PcCreation from "./CharacterCreation/PcCreation";


const RightSide = ({enemy}) => {
    
        return (
            <div className="roomContainer">
                            <div>
                                <FightScreen/> {/* FightScreen renders conditionally if there is an enemy in current room*/ }
                            </div> 
                            <div>
                                <Controls/> {/* Dyanamically renders options for player based on choices available in current room*/ }
                                <PcCreation/>
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