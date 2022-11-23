import React from "react";
import { connect } from "react-redux";


const CSheetMid = ({player}) => { // Renders player stats

        return(
            <div class="cSheetMid">
                    <div class="cSheetPlayerStats">
                        <div><p class ="stat">Strength:</p><p id="cSheetStatField1" class = "stat">{player.strength}</p></div>
                        <div><p class ="stat">Dexterity:</p><p id="cSheetStatField2" class = "stat">{player.dexterity}</p></div>
                        <div><p class ="stat">Constitution:</p><p id="cSheetStatField3" class = "stat">{player.constitution}</p></div>
                    </div>
                    <div class="cSheetPlayerValues">

                        <div class="cSheetHealth"> 
                            <img src = {require("../assets/heart pixel art.png")}/> 
                            <p>Health:</p>
                            <p id={'cSheetHealth'}>{`${player.hpCurrent}/${player.hpTotal}`}</p>
                        </div>
                        <div class= "cSheetArmor"> 
                            <img src= {require("../assets/Shield1.png")}/> 
                            <p>Armor:</p>

                            <p id={'cSheetArmor'}>{player.armor + player.tempArmor}</p>

                        </div>
                        <div class="cSheetWeapon">
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