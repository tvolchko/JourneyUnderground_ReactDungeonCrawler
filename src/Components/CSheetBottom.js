import React from "react";
import { connect } from "react-redux";
import { itemObj } from "../Libraries/Items";

const CsheetBottom = ({inventory, weapon}) => {
        return(
        
            <div className="cSheetBottom">
                <h3>Weapons</h3>
                <div className="cSheetInventory">
                    {!weapon ? null : <img   id = {`wep${1}`} src={itemObj[weapon].imgSrc}/>}
                </div>
                <h3>Inventory</h3>
                <div className="cSheetInventory">
                    {!inventory ? null : inventory.map((item, i) => {
                        return (
                            <img  key={i} id = {`item${i+1}`} src={itemObj[item].imgSrc}/>
                        )
                    })}
                        {/* Maps state inventory array objects to div and renders their img key*/}
                </div>
            </div>
                        
        )
    }
const mapState = (state) => {
    return {
        inventory: state.inventory,
        weapon: state.player.weapon,
    }
}
export default connect(mapState)(CsheetBottom)