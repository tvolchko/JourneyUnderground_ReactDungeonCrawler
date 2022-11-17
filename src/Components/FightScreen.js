import React from "react";
import { connect } from "react-redux";


const FightScreen = ({enemy}) => {
    if(enemy === null){
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
                                        <img id= "enemyHealthImg" src = ""/>
                                        <p id="enemyHealth">{enemy.hpCurrent}</p>
                                    </div>
                                    <div>
                                        <img id="enemyDefenseImg" src= ""/>
                                        <p id="enemyDefense">{enemy.armor}</p>
                                    </div>
                                    <div>
                                    <img id="enemyAttackImg" src= ""/>
                                    <p id= "enemyAttack">{enemy.dmg}</p>
                                    </div>
                                </div>
                            </div> 
    )
}
const mapState = (state) => {
    return {
        enemy: state.enemy,
    }
}

export default connect(mapState)(FightScreen)