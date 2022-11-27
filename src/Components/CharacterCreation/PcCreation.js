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
            freePoints: 5,
        },
        weapon: null,
    }
    const Carousel = require('react-responsive-carousel').Carousel;
    const [character, setCharacter] = useState(initialState)
    const handleChange = (idx) => {
        setCharacter({...character, portrait: idx})
    }
    const statButtonHandler = (e) => {
        const stat = e.currentTarget.id.slice(0, -2) 
        const direction = e.currentTarget.id.slice(-2)
        if(character.stats[stat] === 1 && direction === 'Dn' || direction === 'Up' && character.stats.freePoints === 0) {
            return null
        } else {
            setCharacter({
                ...character,
                stats: {...character.stats, [stat]: direction === 'Up' ? character.stats[stat] + 1 : character.stats[stat] - 1, freePoints: direction === 'Up' ? character.stats.freePoints - 1 : character.stats.freePoints +1}
            })
        }
    }

    const weaponHandler = (e) => {
        setCharacter({
            ...character,
            weapon: character.weapon != e.target.id ? e.target.id : null,
        })
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
                <p>{character.stats.freePoints} free points remain</p>
                <div className="statCreationField"> 
                    <div>
                        <button id="strengthUp" onClick={statButtonHandler}>▲</button>
                        <p>{character.stats.strength}</p>
                        <button id="strengthDn" onClick={statButtonHandler}>▼</button>
                    </div>
                    <p>Strength Stat Info</p>
                </div>
                <div className="statCreationField">
                    <div>
                        <button id="dexterityUp" onClick={statButtonHandler}>▲</button>
                        <p>{character.stats.dexterity}</p>
                        <button id="dexterityDn" onClick={statButtonHandler}>▼</button>
                    </div>
                    <p>Dexterity Stat Info</p>
                </div>
                <div className="statCreationField">
                    <div>
                        <button id="intelligenceUp" onClick={statButtonHandler}>▲</button>
                        <p>{character.stats.intelligence}</p>
                        <button id="intelligenceDn" onClick={statButtonHandler}>▼</button>
                    </div>
                    <p>Intelligence Stat Info</p>
                </div>
            </div>
        
                <p>Select a weapon!</p>
                <div className="weaponSelect" style={{display: 'flex'}}>
                    <img id='magic' onClick={weaponHandler} className={character.weapon === 'magic' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/magic-weapons/magicweapon_2.png")}/>
                    <img id='axe' onClick={weaponHandler} className={character.weapon === 'axe' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/magic-weapons/magicweapon_2.png")}/>
                    <img id='sword' onClick={weaponHandler} className={character.weapon === 'sword' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/magic-weapons/magicweapon_2.png")}/>
                    <img id='bow' onClick={weaponHandler} className={character.weapon === 'bow' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/magic-weapons/magicweapon_2.png")}/>
                    {character.weapon === 'magic' ? <p>description of magic weapon</p> : null}
                    {character.weapon === 'axe' ? <p>description of axe weapon</p> : null}
                    {character.weapon === 'sword' ? <p>description of sword weapon</p> : null}
                    {character.weapon === 'bow' ? <p>description of ranged weapon</p> : null}
                </div>
                
            
        </div>
                    )

}

export default PcCreation