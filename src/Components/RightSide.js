import React from "react";
import Controls from './Controls'

const RightSide = () => {
        return(
            <div className="roomContainer">
                            {/* <div id="fightScreen">

                                <div>
                                    <img id="enemyImg" src= '' className="enemyImg">
                                    <p id="enemyName"></p>
                                </div>

                                <div id = 'enemyStats'>
                                    <div>
                                        <img id= "enemyHealthImg" src = "">
                                        <p id="enemyHealth"></p>
                                    </div>
                                    <div>
                                        <img id="enemyDefenseImg" src= "">
                                        <p id="enemyDefense"></p>
                                    </div>
                                    <div>
                                    <img id="enemyAttackImg" src= "">
                                    <p id= "enemyAttack"></p>
                                    </div>
                                </div>
                            </div> 

                            This needs to function for the fight screen

                            */}
                            <div>
                                <Controls/>
                            </div>
                        </div>
        )
    }
export default RightSide