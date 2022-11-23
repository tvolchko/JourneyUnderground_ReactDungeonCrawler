import React from "react";
import { connect } from "react-redux";
import potion from '../assets/Potion.png'
import key from '../assets/Key.png'

const CsheetBottom = ({inventory}) => {
        return(
            <>
            <div class="cSheetBottom">
                    <h3>Inventory</h3>
                        <div className="cSheetInventory">
                            {!inventory ? null : inventory.map((item, i) => {
                                console.log(inventory[i])
                                return (
                                    <img  key={i} id = {`item${i+1}`} src={inventory[i].imgSrc}/>
                                )
                            })}
                                {/* Maps state inventory array objects to div and renders their img key*/}
                        </div>
                        </div>
                        </>
        )
    }
const mapState = (state) => {
    return {
        inventory: state.inventory
    }
}
export default connect(mapState)(CsheetBottom)