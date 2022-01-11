import React from "react";

let cSheetHealth = ''
let cSheetArmor = ''
let cSheetWeapon = ''
class CSheetMid extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div class="cSheetMid">
                    <div class="cSheetPlayerStats">
                        <div><p class ="stat">Strength:</p><p id="cSheetStatField1" class = "stat">Stat</p></div>
                        <div><p class ="stat">Dexterity:</p><p id="cSheetStatField2" class = "stat">Stat</p></div>
                        <div><p class ="stat">Constitution:</p><p id="cSheetStatField3" class = "stat">Stat</p></div>
                    </div>
                    <div class="cSheetPlayerValues">

                        <div class="cSheetHealth"> 
                            <img src = "assets/heart pixel art.png"/> 
                            <p>Health:</p>
                            <p id={cSheetHealth}>VAL</p>
                        </div>
                        <div class= "cSheetArmor"> 
                            <img src= "assets/Shield1.png"/> 
                            <p>Armor:</p>

                            <p id={cSheetArmor}>VAL</p>

                        </div>
                        <div class="cSheetWeapon">
                            <img src= "assets/sword_small (1).png"/>
                            <p>Weapon:</p>

                            <p id={cSheetWeapon}>VAL</p>
                        </div>
                    </div>
                </div>
        )
    }
}
export default CSheetMid