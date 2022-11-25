import React from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from "react";


const PcCreation = () => {
    const initialState = {
        portrait: 0,
        stats: {
            strength: 1,
            dexterity: 1,
            intelligence: 1,
        },
    }
    const Carousel = require('react-responsive-carousel').Carousel;
    const [character, setCharacter] = useState(initialState)
    const handleChange = (idx) => {
        setCharacter({...character, portrait: idx})
    }
    const statButtonHandler = (e) => {
        const stat = e.currentTarget.id.slice(0, -2) 
        const direction = e.currentTarget.id.slice(-2)
        if(character.stats[stat] === 1 && direction === 'Dn') {
            return null
        } else {
            setCharacter({
                ...character,
                stats: {...character.stats, [stat]: direction === 'Up' ? character.stats[stat] + 1 : character.stats[stat] - 1}
            })
        }
        
    }

    return (
        <div >    {/* Probably its own component */}
                {/* Some kind of portrait selction */}
                {/* Stat selection? */}
                {/* Weapon choice? */}
                {/* Maybe a free item? */}
                <div className="carousel-wrapper">
                <Carousel showThumbs={false} width='50%' centerMode={true} showStatus={false} showIndicators={false} emulateTouch={true} onChange={handleChange}>
                <div >
                    <img src={require('../../assets/Ranger.png')} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={require('../../assets/Blue_Mage.jpeg')} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={require('../../assets/Little_Warrior_Guy.png')} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            <p>{character.portrait}</p>
            </div>
            
            {character.portrait === 0 ? <p>Ranger Text</p> : null}
            {character.portrait === 1 ? <p>Mage Text</p> : null}
            {character.portrait === 2 ? <p>Fighter Text</p> : null}

            <div>
                <div>
                    <button id="strengthUp" onClick={statButtonHandler}>▲</button>
                    <p>{character.stats.strength}</p>
                    <button id="strengthDn" onClick={statButtonHandler}>▼</button>
                </div>
                <div>
                    <button id="dexterityUp" onClick={statButtonHandler}>▲</button>
                    <p>{character.stats.dexterity}</p>
                    <button id="dexterityDn" onClick={statButtonHandler}>▼</button>
                </div>
                <div>
                    <button id="intelligenceUp" onClick={statButtonHandler}>▲</button>
                    <p>{character.stats.intelligence}</p>
                    <button id="intelligenceDn" onClick={statButtonHandler}>▼</button>

                </div>
            </div>
                 </div>
                    )

}

export default PcCreation