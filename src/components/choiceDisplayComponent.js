import React from "react";

function ChoiceDisplay({options}) {
    // use a loop to spawn however many displays are necessary
    // first display the dialogue -> then the options
    const html = 
        <div className="choice-display">
            {options.map((option, idx) => {
                return (
                    <div className='individual-option' key={`option_${idx}`}>
                        <p>{option.text}</p>
                    </div>
                );
            })}
        </div>
    return html;
}

export default ChoiceDisplay;