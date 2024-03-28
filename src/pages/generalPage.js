import React from "react";
import TextDisplay from "../components/textDisplayComponent";
import QuitComponent from "../components/quitComponent";
import Background from "../components/backgroundComponent";
import { useSounds } from "../soundManager";

import loadAsssets from "../assetManager";

function GeneralPage() {
    const {sounds} = useSounds();
    // check the route to input the appropriate background, sprites, sounds
    const all_backgrounds = loadAsssets();
    const location = sessionStorage.getItem('location');
    var backgroundImg = '';
    var charImg = '';
    var currentSound = null;
    if (location === 'a healing place') {
        charImg = all_backgrounds[0][0];
        backgroundImg = all_backgrounds[0][4];
        currentSound = sounds[2];         
        sessionStorage.setItem('current_sound', 'andy') ;
    } else if (location === 'a soft place') {
        // temp 
        charImg = all_backgrounds[1][0];
        const randomNumber = Math.floor(Math.random() * 3);
        backgroundImg = all_backgrounds[1][4 + randomNumber]; 
        currentSound = sounds[3];   
        sessionStorage.setItem('current_sound', 'pixie') ;
    } else if (location === 'a chaotic place') {
        charImg = all_backgrounds[2][0];
        const randomNumber = Math.floor(Math.random() * 2);
        console.log(randomNumber)
        backgroundImg = all_backgrounds[2][4 + randomNumber];
        currentSound = sounds[4];   
        sessionStorage.setItem('current_sound', 'gouda') ;
    } else if (location === 'an eternal place') {
        charImg = all_backgrounds[3][0];
        backgroundImg = all_backgrounds[3][4];
        currentSound = sounds[5];   
        sessionStorage.setItem('current_sound', 'dd') ;
    } else if (location === 'an empty place') {
        // temp
        currentSound = sounds[5];   
    }

    const soundOn = sessionStorage.getItem('music')
    if (soundOn === 'true') {
        currentSound.play();
        currentSound.loop = true;
    }

    const html = 
    <div>
        <QuitComponent></QuitComponent>
        <div className="game-page">
            {/* <ImageDisplay charSprite={charImg}></ImageDisplay> */}
            <TextDisplay></TextDisplay>
            <Background backgroundImg={backgroundImg}></Background>
        </div>        
    </div>

    return html
}

export default GeneralPage;