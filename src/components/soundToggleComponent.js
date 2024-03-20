import React, { useState, useEffect } from 'react';

import soundOnImage from '../assets/buttons/sound-on.png'
import soundOffImage from '../assets/buttons/sound-off.png'

function SoundToggle() {
    const [playing, setPlaying] = useState(false);
    const [sound, setSound] = useState(null);
    const [currentSoundFile, setCurrentSoundFile] = useState(null);

    useEffect(() => {
        const storedFile = sessionStorage.getItem('soundFile');
        console.log(storedFile);
        if (storedFile) {
            setCurrentSoundFile(storedFile);
            setSound(new Audio(storedFile));
        }
    }, []);

    // function play() {
    //     setPlaying(!playing);
    //     if (!playing) {
    //         sound.play();
    //         sound.loop = true;
    //     } else {
    //         sound.pause();
    //     }
    // }

    useEffect(() => {
        if (sound) {
            if (playing) {
                sound.play();
                sound.loop = true;
            } else {
                sound.pause();
            }
        }
    }, [sound, playing]);

    function toggleSound() {
        setPlaying(!playing);
    }

    const html = 
        <div className='sound'>
            <button className='sound-button' onClick={toggleSound}>
                <img src={playing ? soundOnImage : soundOffImage} className='sound-button-img'></img>                
            </button>
        </div>
    return html;
}   

export default SoundToggle;