import React from "react";

const Header = () => {
        return (
            <>
            <div id="music_container">
            {/* <audio id="background_music" src="assets/Тиффани-TheBeginning-.mp3" loop autoplay></audio>  */}
            <div id= 'mute_button' onClick="mute()">
                <p id='mute_option'>mute</p>
            </div>
            <img src="assets/audiosprite.png" alt="soundsprite"/>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" className="slider" id="volume-control"/>
            </div>
            <p id="volume-container"></p>
        </div>
                    <button id="menuButton" onClick="openMenu()">Menu</button>
                    <h1>
                        A Journey Underground
                    </h1>
                    </>
        )
    }


export default Header;