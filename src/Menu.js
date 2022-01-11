import React from "react";

class Menu extends React.Component {
    constructor() {
        super();
    }



    render() {
        return (
            <div id="menu">
            <button id="save" onclick="saveGame()">Save your Game!</button>
            <button id="load" onclick="loadGame()">Load your Game!</button>
            <button id="closeMenu" onclick='openMenu()'>Close Menu</button>
        </div>
        )
    }
}