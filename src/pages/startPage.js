import React from "react";
import NameInputBox from "../components/inputComponent";
import Background from "../components/backgroundComponent";
import SoundToggle from '../components/soundToggleComponent';

import mainMenuImg from "../assets/backgrounds/main_menu.png"
function StartPage() {
    return (
        <div>
            <SoundToggle></SoundToggle>
            <NameInputBox></NameInputBox>       
            <Background backgroundImg={mainMenuImg}></Background> 
        </div>

    )
}

export default StartPage;