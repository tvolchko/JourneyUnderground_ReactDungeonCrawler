import React from "react";
import Map from "./Map";
import CSheetMid from './CSheetMid'
import CSheetBottom from './CSheetBottom'
let playerName = 'Bill'
class CSheet extends React.Component {
    constructor() {
        super();
    }


    render() {
        return(
            <div class= "pageContainer">
                <section id='cSheet'>
                    <div class = "cSheetTop">
                        <section id='map'>
                            <Map/>
                        </section>
                        <div class="charArt">
                            <img src = "assets/Player1.png"/>
                            <p id={playerName}></p>
                        </div>
                    </div>
                    <div>
                        <CSheetMid/>
                    </div>
                    <div>
                        <CSheetBottom/>
                    </div>
                </section>
            </div>
        )
    }
}
export default CSheet