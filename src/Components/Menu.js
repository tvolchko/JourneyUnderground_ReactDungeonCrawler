import React from "react";

const Menu = () => {
        return (
            <div id="menu">
            <button id="save" onclick="saveGame()">Save your Game!</button>
            <button id="load" onclick="loadGame()">Load your Game!</button>
            <button id="closeMenu" onclick='openMenu()'>Close Menu</button>
        </div>
        )
    }
export default Menu