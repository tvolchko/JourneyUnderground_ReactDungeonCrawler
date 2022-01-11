import React from "react";

let rooms = []
for(let i = 0; i<100; i++){
    rooms.push(`rm${i+1}`)
}


class Map extends React.Component {
    constructor() {
        super();
    }

    render(){
        return (
            <>
                {rooms.map(room => {
                    return(
                        <div id={room}></div>
                    )
                })}
            </>
        )
    }
}
export default Map