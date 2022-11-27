import React from "react";
import Map from "./Map";
import CSheetMid from './CSheetMid'
import CSheetBottom from './CSheetBottom'
import '../App.css';
import PcCreation from './CharacterCreation/PcCreation'
import { connect } from "react-redux";


let playerName = 'Bill'


const CSheet = ({player}) => { 

        return(
            <div className= "pageContainer">
                <section id='cSheet'>
                    <div className = "cSheetTop">
                        <Map/> {/*  Contains the 10x10 grid of dynamic tiles for the minimap */}
                        <div className="charArt">
                            <img src = {require("../assets/Player1.png")}/>
                            <p id={'playerName'}>{playerName}</p>
                        </div>
                        {player.strength === null ? <PcCreation/> : null}
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
const mapState = (state) => {
    return {
        player: state.player,
    }
}

export default connect(mapState)(CSheet)