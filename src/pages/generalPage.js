import React from "react";
import ImageDisplay from "../components/imageDisplayComponent";
import TextDisplay from "../components/textDisplayComponent";
import QuitComponent from "../components/quitComponent";
import Background from "../components/backgroundComponent";

import andyBackgroundImg from "../assets/backgrounds/andy.png"
import goudaBackgroundImg from "../assets/backgrounds/gouda_1.png"

import ddSprite from "../assets/sprites/dd_neutral.png"
import andySprite from "../assets/sprites/andy_neutral.PNG"
import pixieSprite from "../assets/sprites/pixie_neutral.PNG"
import goudaSprite from "../assets/sprites/gouda_neutral.PNG"

function GeneralPage() {
    // check the route to input the appropriate background
    const location = sessionStorage.getItem('location');
    var backgroundImg = '';
    var charImg = '';
    if (location === 'a healing place') {
        charImg = andySprite;
        backgroundImg = andyBackgroundImg;           
    } else if (location === 'a soft place') {
        // temp 
        charImg = pixieSprite;
    } else if (location === 'a chaotic place') {
        charImg = goudaSprite;
        backgroundImg = goudaBackgroundImg;
    } else if (location === 'an eternal place') {
        // temp 
        charImg = ddSprite;
    } else if (location === 'an empty place') {
        // temp
    }
    const html = 
    <div className="game-page">
        <QuitComponent></QuitComponent>
        <ImageDisplay charSprite={charImg}></ImageDisplay>
        <div className='text-display-wrapper'>
            <TextDisplay></TextDisplay>
        </div>
        <Background backgroundImg={backgroundImg}></Background>
    </div>


    return html
}

export default GeneralPage;