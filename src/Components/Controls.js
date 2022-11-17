import React from "react";

const Controls = () => {

    
        return(
            <div class="buttons">
                            <button onClick='Button()'>Room Button</button>
                            <button id= 'roomOption5' onClick= 'option5()'></button>
                            <button id= 'roomOption1' onClick= 'option1()'></button>
                            <button id= 'roomOption3' onClick= 'option3()'></button>
                            <button id= 'roomOption4' onClick= 'option4()'></button> 
                            <button id= 'roomOption2' onClick= 'option2()'></button>                    

                            <div id="roomIdTester"></div>
                            <div id="playerLog"></div>   
                            <div id="combatLog"></div>
                            
                        </div>    
        )
    }
    export default Controls

