import React from "react";
import { useNavigate } from "react-router-dom";


import QuitComponent from "../components/quitComponent";
function LocationPage() {  

    const locations = [
        'a healing place', 'a soft place', 'a chaotic place', 'an eternal place', 'random!'
    ]

    let navigate = useNavigate();     
    const clickOption = (idx) => {
        // if the selected location is random randomly select one
        var selected_idx = idx;
        if (idx === 4) {
            selected_idx = Math.floor(Math.random() * 4)
        }
        console.log(' selected loc ', locations[selected_idx])
        // store the current location
        sessionStorage.setItem('location', (selected_idx).toString());
        const round = sessionStorage.getItem('round');
        const parseRound = parseInt(round, 10);
        sessionStorage.setItem('round', (parseRound + 1).toString());

        // temp remove later
        // route to the right url
        if (selected_idx === 0) {
            navigate(`/a-healing-place`);            
        } else if (selected_idx === 1) {
            navigate(`/a-soft-place`);  
        } else if (selected_idx === 2) {
            navigate(`/a-chaotic-place`);  
        } else if (selected_idx === 3) {
            navigate(`/an-eternal-place`);  
        }
    }

    const html = 
    <div>
        <QuitComponent></QuitComponent>
        <div className="choice-display-container">
            <p>choose a location to go to:</p>
            <div className="choice-display">
                    {locations.map((option, idx) => {
                        return (
                            <div className='individual-option' key={`option_${idx}`} onClick={() => clickOption(idx)}>
                                <p>{option}</p>
                            </div>
                            );
                        })}
                </div>  
        </div>        
    </div>

    return html
}

export default LocationPage;