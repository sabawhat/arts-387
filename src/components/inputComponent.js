import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import playImage from '../assets/buttons/play-button.png'

function NameInputBox() {
    const [playerName, setName] = useState('');
    const [warningMsg, setWarningMsg] = useState('');
    const [showWarning, setShowWarning] = useState(false)

    const changeName = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        // sets error message in any weird cases lol
        event.preventDefault();
        if (playerName.trim().length === 0 && playerName.length !== 0 ) {
            console.log(playerName, playerName.trim.length, playerName.length)
            setWarningMsg('sorry, your name cant only be spaces.');
            setShowWarning(true);
            setName('');
            console.log(showWarning);
            return;
        }
        else if (playerName.length === 0) {
            setWarningMsg('please enter at least one character.');
            setShowWarning(true);
            setName('');
            console.log(showWarning);
            return;
        } else {
            routeChange();
        }
    }

    const clearWarning = () => {
        setShowWarning(false);
    }

    let navigate = useNavigate(); 
    // initalize all values
    const routeChange = () =>{  
      navigate(`/general`);
      let meter = [0, 0, 0, 0] // 0 = andy, 1 = pixie, 2 = gouda, 3 = WD
      sessionStorage.setItem('player_name', playerName)
      sessionStorage.setItem('meter', JSON.stringify(meter))
      sessionStorage.setItem('round', (1).toString());
    }

    // when click ok, hide the whole form
    const html = 
    <div className="input-name">
        <form className="input-name-form" onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className="input-label">
                    please enter a name:
                </label> 
                <div className="input-submit-container">
                    <input type="text" id="player-name" value={playerName} onChange={changeName} className="input-box"></input> 
                    <input type="image" src={playImage} className="input-img"></input>                       
                </div>
            </div>
            <div className='form-group'>
                {showWarning && 
                <div className="no-name-warning">
                    <p>{warningMsg}</p>
                    <button onClick={clearWarning}>ok</button>
                </div>}                
            </div>
        </form>        
    </div>

    return html
}

export default NameInputBox;