import React from "react";
import { connect } from "react-redux";
import { beginCombat } from "../../actions";
import FightControls from "./FightControls";
import { useEffect } from "react";


const FightScreen = ({dispatch, currentRoom, enemy, readOutText}) => {

    
    useEffect(() => {
        if(currentRoom.enemyPresent != null){ //Moves appropriate enemy to the enemy state to be used to render its stats here

            dispatch(beginCombat(currentRoom.enemyPresent, "You've encountered an angry "))
        }
    }, [currentRoom.enemyPresent])

    if(enemy === null){ //Prevents render if no enemies in current room
        return null
    }
    
    return (
        <div id="fightScreen">

                                <div>
                                    <img id="enemyImg" src= {enemy.enemyImg} className="enemyImg" alt="enemy image"/>
                                    <p id="enemyName"></p>
                                </div>

                                <div id = 'enemyStats'>
                                    <div>
                                        <img id= "enemyHealthImg" src = {require("../../assets/heart pixel art.png")}/>
                                        <p id="enemyHealth">{enemy.hpCurrent}</p>
                                    </div>
                                    <div>
                                        <img id="enemyDefenseImg" src= {require('../../assets/Shield1.png')}/>
                                        <p id="enemyDefense">{enemy.armor}</p>
                                    </div>
                                    <div>
                                        <img id="enemyAttackImg" src= {require('../../assets/sword_small (1).png')}/>
                                        <p id= "enemyAttack">{enemy.dmg}</p>
                                    </div>
                                </div>
                                <div id="combatText">
                                   {readOutText ? <><p>{readOutText[0]}</p><br></br><p>{readOutText[1]}</p></> : null} 
                                </div>
                                <div id="fightControls">
                                    <FightControls/>
                                </div>

                                <div>
                                    {/* character stats here? */}
                                </div>
                            </div> 
    )
}
const mapState = (state) => {
    return {
        enemy: state.enemy,
        currentRoom: state.currentRoom,
        readOutText: state.readOutText,
    }
}

export default connect(mapState)(FightScreen)