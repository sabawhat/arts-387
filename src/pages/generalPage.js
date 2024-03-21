import React from "react";
import ImageDisplay from "../components/imageDisplayComponent";
import TextDisplay from "../components/textDisplayComponent";
import QuitComponent from "../components/quitComponent";
import Background from "../components/backgroundComponent";

import loadAsssets from "../assetManager";

function GeneralPage() {
    // check the route to input the appropriate background
    const all_backgrounds = loadAsssets();
    const location = sessionStorage.getItem('location');
    var backgroundImg = '';
    var charImg = '';
    if (location === 'a healing place') {
        charImg = all_backgrounds[0][0];
        backgroundImg = all_backgrounds[0][4];           
    } else if (location === 'a soft place') {
        // temp 
        // charImg = pixieSprite;
    } else if (location === 'a chaotic place') {
        // charImg = goudaSprite;
        // backgroundImg = goudaBackgroundImg;
    } else if (location === 'an eternal place') {
        // temp 
        // charImg = ddSprite;
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