import React from "react";
import { connect } from "react-redux";
import { beginCombat } from "../actions";



const FightScreen = ({dispatch, currentRoom, enemy}) => {

    if(currentRoom.enemyPresent === null){ // prevents render if no enemies in current room
        return null
    }
    if(currentRoom.enemyPresent >= 0){
        dispatch(beginCombat(currentRoom.enemyPresent))
    }
    return (
        <div id="fightScreen">

                                <div>
                                    <img id="enemyImg" src= {enemy.enemyImg} className="enemyImg" alt="enemy image"/>
                                    <p id="enemyName"></p>
                                </div>

                                <div id = 'enemyStats'>
                                    <div>
                                        <img id= "enemyHealthImg" src = {require("../assets/heart pixel art.png")}/>
                                        <p id="enemyHealth">{enemy.hpCurrent}</p>
                                    </div>
                                    <div>
                                        <img id="enemyDefenseImg" src= {require('../assets/Shield1.png')}/>
                                        <p id="enemyDefense">{enemy.armor}</p>
                                    </div>
                                    <div>
                                    <img id="enemyAttackImg" src= {require('../assets/sword_small (1).png')}/>
                                    <p id= "enemyAttack">{enemy.dmg}</p>
                                    </div>
                                </div>
                            </div> 
    )
}
const mapState = (state) => {
    return {
        enemy: state.enemy,
        currentRoom: state.currentRoom
    }
}

export default connect(mapState)(FightScreen)