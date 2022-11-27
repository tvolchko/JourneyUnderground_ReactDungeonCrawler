import React from "react";
import { connect } from "react-redux";


const CSheetMid = ({player}) => { // Renders player stats

        return(
            <div className="cSheetMid">
                    <div className="cSheetPlayerStats">
                        <div><p className ="stat">Strength:</p><p id="cSheetStatField1" className = "stat">{player.strength}</p></div>
                        <div><p className ="stat">Dexterity:</p><p id="cSheetStatField2" className = "stat">{player.dexterity}</p></div>
                        <div><p className ="stat">Intelligence:</p><p id="cSheetStatField3" className = "stat">{player.intelligence}</p></div>
                    </div>
                    <div className="cSheetPlayerValues">

                        <div className="cSheetHealth"> 
                            <img src = {require("../assets/heart pixel art.png")}/> 
                            <p>Health:</p>
                            <p id={'cSheetHealth'}>{`${player.hpCurrent}/${player.hpTotal}`}</p>
                        </div>
                        <div className= "cSheetArmor"> 
                            <img src= {require("../assets/Shield1.png")}/> 
                            <p>Armor:</p>

                            <p id={'cSheetArmor'}>{player.armor + player.tempArmor}</p>

                        </div>
                        <div className="cSheetWeapon">
                            <img src= {require("../assets/sword_small (1).png")}/>
                            <p>Weapon:</p>

                            <p id={'cSheetWeapon'}>{player.dmg}</p>
                        </div>
                    </div>
                </div>
        )
    }
const mapState = (state) => {
    return {
        player: state.player,
    }
}

export default connect(mapState)(CSheetMid)