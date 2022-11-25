import { useEffect } from "react";

const useHotKeyFunc = (direction, currentRoom, roomTravel) => {

    
    useEffect(() => {//This function adds WASD keyboard control to movement
        let button
        switch(direction){ //Sorts the direction to the appropriate hotkey
            case 'roomNorth' : button = 'w'; break;
            case 'roomSouth' : button = 's'; break;
            case 'roomWest' : button = 'a'; break;
            case 'roomEast' : button = 'd'; break;
            case 'nextFloor' : button = 'Enter'; break;
            default : button = null;
        }
        
        const handleKeyDown = (e) => { if(e.key === button && currentRoom[direction] != null) roomTravel(); } //Compares event key to sorted button and executes roomTravel
        
        document.addEventListener('keydown', handleKeyDown);

        return function cleanup() { //Cleans event listener after each render, without this listeners stack indefinitely on every key press, slowing and eventually crashing browser
            document.removeEventListener('keydown', handleKeyDown);
        }
        
      }, [currentRoom]);
}

export default useHotKeyFunc