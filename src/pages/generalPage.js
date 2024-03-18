import React from "react";
import ImageDisplay from "../components/imageDisplayComponent";
import TextDisplay from "../components/textDisplayComponent";
import QuitComponent from "../components/quitComponent";

function GeneralPage() {
    const playerName = sessionStorage.getItem('player_name')
    console.log(playerName)
    const html = 
    <div className="game-page">
        <QuitComponent></QuitComponent>
        <ImageDisplay></ImageDisplay>
        <div className='text-display-wrapper'>
            <TextDisplay></TextDisplay>
        </div>
    </div>


    return html
}

export default GeneralPage;