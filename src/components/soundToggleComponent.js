import React, { useRef, useState } from 'react';

import soundOnImage from '../assets/buttons/sound-on.png'
import soundOffImage from '../assets/buttons/sound-off.png'

function SoundToggle({soundFile}) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const toggleSound = () => {
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.loop = true;
            audioRef.current.play();
        }
        setPlaying(prevState => !prevState);
    };

    const html = 
        <div className='sound'>
            <button className='sound-button' onClick={toggleSound}>
                <img src={playing ? soundOnImage : soundOffImage} className='sound-button-img'></img>                
            </button>
            <audio ref={audioRef} src={soundFile}></audio>
        </div>
    return html;
}   

export default SoundToggle;