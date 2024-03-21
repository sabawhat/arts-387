import React from "react";
import { useNavigate } from 'react-router-dom';

import { useSounds } from '../soundManager';

function QuitComponent() {
    const {sounds} = useSounds();
    let navigate = useNavigate(); 
    const resetGame = () => {
        const soundOn = sessionStorage.getItem('music')
        if (soundOn === 'true') {
            const soundFile = sessionStorage.getItem('current_sound');
            if (soundFile === 'main menu') {
                sounds[0].pause();
            } else if (soundFile === 'credits') {
                sounds[1].pause();
            } else if (soundFile === 'andy') {
                sounds[2].pause();
            } else if (soundFile === 'pixie') {
                sounds[3].pause();
            } else if (soundFile === 'gouda') {
                sounds[4].pause();
            } else if (soundFile === 'dd') {
                sounds[5].pause();
            }
        }
        sessionStorage.clear();
        navigate(`/`);
    }
    const html = 
        <button onClick={resetGame} className="quit-button">quit</button>
    return html;
}

export default QuitComponent;