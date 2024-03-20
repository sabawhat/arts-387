import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import startImage from '../assets/buttons/Menu-01.png'
import mainMenuMusic from '../assets/sounds/main-menu.mp3'
import temp from '../assets/sounds/temp.mp3'

import SoundToggle from './soundToggleComponent';

function StartButton() {
  sessionStorage.setItem('soundFile', temp);
  let navigate = useNavigate(); 
  const routeChange = () =>{  
    navigate(`start`);
  }

  const html = 
  <div>
    <SoundToggle></SoundToggle>
    <div className='start'>
        <button className='start-button' onClick={routeChange}>
          <img src={startImage} className='start-button-img'></img>
          <p>for best playing experience please turn sound on!</p>
        </button>
    </div>    
  </div>

  return html;
}

export default StartButton;