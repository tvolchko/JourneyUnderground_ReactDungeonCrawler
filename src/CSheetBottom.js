import React from "react";

class CsheetBottom extends React.Component {
    constructor(){
        super();
    }

    render(){
        return(
            <>
            <div class="cSheetBottom">
                    <h3>Inventory</h3>
                        <div className="cSheetInventory">
                                <img onClick='player.inventory[0].useItem(0)' id = "item1" src=''/>
                                <img onClick='player.inventory[1].useItem(1)' id = "item2" src=''/>
                                <img onClick='player.inventory[2].useItem(2)' id = "item3" src=''/>
                                <img onClick='player.inventory[3].useItem(3)' id = "item4" src=''/>
                                <img onClick='player.inventory[4].useItem(4)' id = "item5" src=''/>
                                <img onClick='player.inventory[5].useItem(5)' id = "item6" src=''/>
                        </div>
                        </div>
                        </>
        )
    }
}
export default CsheetBottom