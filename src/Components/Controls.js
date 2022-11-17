import React from "react";

const Controls = () => {

    
        return(
            <>
            <div class="buttons">
                            <button onclick='Button()'>Room Button</button>
                            <button id= 'roomOption5' onclick= 'option5()'></button>
                            <button id= 'roomOption1' onclick= 'option1()'></button>
                            <button id= 'roomOption3' onclick= 'option3()'></button>
                            <button id= 'roomOption4' onclick= 'option4()'></button> 
                            <button id= 'roomOption2' onclick= 'option2()'></button>                    

                            <div id="roomIdTester"></div>
                            <div id="playerLog"></div>   
                            <div id="combatLog"></div>
                            {/* <div id="storyContainer">
                                <p id="storyTest" click="Next()"></p>
                                <input id="name" type="text"/> 
                                <button id="confirm" click='greeting()'></button>
                                <button id="warrior" click= 'warrior()'></button>
                                <button id="ranger" click= 'ranger()'></button>
                                <button id="rogue" click= 'rogue()'></button>
                            </div> */}
                        </div>  
                        </>
        )
    }
    export default Controls

