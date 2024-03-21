import React from "react";
import NameInputBox from "../components/inputComponent";
import Background from "../components/backgroundComponent";

import mainMenuImg from "../assets/backgrounds/main_menu.png"
function StartPage() {
    return (
        <div>
            <NameInputBox></NameInputBox>       
            <Background backgroundImg={mainMenuImg}></Background> 
        </div>

    )
}

export default StartPage;