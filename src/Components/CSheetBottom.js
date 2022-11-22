import React from "react";
import { connect } from "react-redux";
import potion from '../assets/Potion.png'
import key from '../assets/Key.png'

const CsheetBottom = ({inventory}) => {
    console.log(inventory[0])
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
                                {/* <img onClick='player.inventory[0].useItem(0)' id = "item1" src=''/>
                                <img onClick='player.inventory[1].useItem(1)' id = "item2" src=''/>
                                <img onClick='player.inventory[2].useItem(2)' id = "item3" src=''/>
                                <img onClick='player.inventory[3].useItem(3)' id = "item4" src=''/>
                                <img onClick='player.inventory[4].useItem(4)' id = "item5" src=''/>
                                <img onClick='player.inventory[5].useItem(5)' id = "item6" src=''/> */}
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