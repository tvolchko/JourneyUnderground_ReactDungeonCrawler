import React from "react";
import Map from "./Map";
import CSheetMid from './CSheetMid'
import CSheetBottom from './CSheetBottom'
import '../App.css';

let playerName = 'Bill'


const CSheet = () => { 

        return(
            <div class= "pageContainer">
                <section id='cSheet'>
                    <div class = "cSheetTop">
                        <Map/> {/*  Contains the 10x10 grid of dynamic tiles for the minimap */}
                        <div class="charArt">
                            <img src = {require("../assets/Player1.png")}/>
                            <p id={'playerName'}>{playerName}</p>
                        </div>
                    </div>
                    <div>
                        <CSheetMid/> {/*  Dispays current player stats, health etc */}
                    </div>
                    <div>
                        <CSheetBottom/> {/*  Player Inventory */}
                    </div>
                </section>
            </div>
        )
    }

export default CSheet