import React from "react";

function DialogueDisplay(props) {
    const { charName, displayDialogue } = props;   

    const html = 
        <div className="text-display">
            <div className="character-name">
                <h3>{charName}</h3>
            </div>
            <hr/>
            <div className="character-dialogue">
                <p>{displayDialogue}</p>
            </div>
        </div>
    return html;
}

export default DialogueDisplay;