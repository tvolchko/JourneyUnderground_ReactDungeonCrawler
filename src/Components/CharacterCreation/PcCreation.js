import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from "react";

const initialState = {
    portrait: 0,
    stats: null,

}
const PcCreation = () => {
    const Carousel = require('react-responsive-carousel').Carousel;
    const [character, setCharacter] = useState(initialState)
    // const handleDragStart = (e) => e.preventDefault();

    // const items = [
    //     <img src={require('../../assets/Ranger.png')} onDragStart={handleDragStart} role="presentation" />,
    //     <img src={require('../../assets/Ranger.png')}  onDragStart={handleDragStart} role="presentation" />,
    //     <img src={require('../../assets/Ranger.png')}  onDragStart={handleDragStart} role="presentation" />,
    // ];
    const handleChange = (idx) => {
        setCharacter({
                    ...character, 
                    portrait: idx
                    })
    }

    return (
        <>    {/* Probably its own component */}
                {/* Some kind of portrait selction */}
                {/* Stat selection? */}
                {/* Weapon choice? */}
                {/* Maybe a free item? */}
                {/* <AliceCarousel mouseTracking items={items} disableDotsControls={true} disableButtonsControls={true}/> */}
                <Carousel infiniteLoop={true} showThumbs={false} width='50%' centerMode={true} showStatus={false} showIndicators={false} emulateTouch={true} onChange={handleChange}>
                <div>
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
                        </>
                    )

}

export default PcCreation