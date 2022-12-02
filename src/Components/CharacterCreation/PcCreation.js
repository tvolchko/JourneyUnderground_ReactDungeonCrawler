import React from "react";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { submitCharacter } from "../../actions";


const PcCreation = ({dispatch, player}) => {
    const initialState = {
        portrait: 0,
        stats: {
            strength: 1,
            dexterity: 1,
            intelligence: 1,
            freePoints: 9,
        },
        weapon: null,
        item: null,
    }


    const Carousel = require('react-responsive-carousel').Carousel;
    const [character, setCharacter] = useState(initialState)
    const [valid, setValid] = useState(false)
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

    const selectorHandler = (e) => {
        const position = e.target.getAttribute('data')
        setCharacter({
            ...character,
            [position]: character[position] != e.target.id ? e.target.id : null,
        })
    }
    useEffect(() => {
        if(character.stats.freePoints === 0 && character.weapon != null && character.item != null){
            setValid(true)
        } else if(character.stats.freePoints != 0 || character.weapon === null || character.item === null){
            setValid(false)
        }

    }, [character])

    const submitNewCharacter = () => {
        let inv = [character.item]
        const newChar = {
            portrait: character.portrait,
            strength: character.stats.strength,
            dexterity: character.stats.dexterity,
            intelligence: character.stats.intelligence,
            weapon: character.weapon
        }
        dispatch(submitCharacter(newChar, inv))
        // console.log(player)
    }

    const devSkip = () => {
        let inv = ['potion']
        const newChar = {
            portrait: 0,
            strength: 5,
            dexterity: 5,
            intelligence: 5,
            weapon: 'axe1'
        }
        dispatch(submitCharacter(newChar, inv))
    }

    return (
        <div className="CCreationMenu">    {/* Probably its own component */}
        <button onClick={devSkip}>Dev skip</button>
            
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
                
            </div>
            
            {character.portrait === 0 ? <p>Ranger Text</p> : null}
            {character.portrait === 1 ? <p>Mage Text</p> : null}
            {character.portrait === 2 ? <p>Fighter Text</p> : null}

            <div style={{display: 'flex'}}>
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
                <div className="weaponSelect">
                    <img id='magicWeapon1' onClick={selectorHandler} data={'weapon'} className={character.weapon === 'magicWeapon1' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/magic-weapons/magicweapon_2.png")}/>
                    <img id='axe1' onClick={selectorHandler} data={'weapon'} className={character.weapon === 'axe1' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/axes/axe_3.png")}/>
                    <img id='sword1' onClick={selectorHandler} data={'weapon'} className={character.weapon === 'sword1' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/swords/sword_2.png")}/>
                    <img id='bow1' onClick={selectorHandler} data={'weapon'} className={character.weapon === 'bow1' ? 'weaponHighlight' : null} src={require("../../assets/rpg_assets/bows/bow_3.png")}/>
                    {character.weapon === 'magicWeapon1' ? <p>description of magic weapon</p> : null}
                    {character.weapon === 'axe1' ? <p>description of axe weapon</p> : null}
                    {character.weapon === 'sword1' ? <p>description of sword weapon</p> : null}
                    {character.weapon === 'bow1' ? <p>description of ranged weapon</p> : null}
                </div>
                <p>Select one starting item!</p>
                <div className="weaponSelect">
                    <img id='key' data={'item'} onClick={selectorHandler} className={character.item === 'key' ? 'weaponHighlight' : null} src={require('../../assets/Key.png')}/>
                    <img id='potion' data={'item'} onClick={selectorHandler} className={character.item === 'potion' ? 'weaponHighlight' : null} src={require('../../assets/Potion.png')}/>
                    {character.item === 'key' ? <p>description of key</p> : null}
                    {character.item === 'potion' ? <p>description of potion</p> : null}
                </div>
                {valid === true ? <button onClick={submitNewCharacter}>Create Character!</button> : null}
                
            
        </div>
                    )

}

const mapState = (state) => {
    return {
        player: state.player
    }
}

export default connect(mapState)(PcCreation)