import React from "react";

const Menu = () => {
        return (
            <div id="menu">
            <button id="save" onClick="saveGame()">Save your Game!</button>
            <button id="load" onClick="loadGame()">Load your Game!</button>
            <button id="closeMenu" onClick='openMenu()'>Close Menu</button>
        </div>
        )
    }
export default Menu