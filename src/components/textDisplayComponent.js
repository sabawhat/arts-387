import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loadJson from "../dialogueManager";
import FlashScreen from "./flashComponent";

function TextDisplay() {
    // get the current location, round to select the right script
    const allScripts = loadJson();
    const currentRound = parseInt(sessionStorage.getItem('round'), 10) - 1; // subtract 1 to get the idx
    const location = parseInt(sessionStorage.getItem('location'), 10);
    const selectedScript = allScripts[location][currentRound]
    
    const [currentScript, setCurrentScript] = useState(selectedScript);
    const [mainDialogueIdx, setMainDialogueIdx] = useState(0);
    const [branchDialogueIdx, setBranchDialogueIdx] = useState(0);
    const [currentDialogueIdx, setCurrentDialogueIdx] = useState(mainDialogueIdx);
    const [charName, setCharName] = useState('');
    const [charDialogue, setCharDialogue] = useState('');
    const [intervalID, setIntervalID] = useState(0);
    const [displayDialogue, setDisplayDialogue] = useState('');

    // set display to correct character
    useEffect(() => {
        if (currentScript[currentDialogueIdx]['type'] === 'dialogue') {
            setCharName(currentScript[currentDialogueIdx]['content']['name'].replace('{player}', sessionStorage.getItem('player_name')));
            setCharDialogue(currentScript[currentDialogueIdx]['content']['dialogue'].replace('{player}', sessionStorage.getItem('player_name')));            
        }
    }, [currentDialogueIdx]);

    // when player presses enter, move on to the next line
    useEffect(() => {
        const nextDialogue = () => {
            if (currentDialogueIdx < currentScript.length - 1) {
                setCurrentDialogueIdx(prevIdx => prevIdx + 1);
                if (!(currentScript[currentDialogueIdx]['branch'])) {
                    setMainDialogueIdx(currentDialogueIdx + 1);
                } else {
                    setBranchDialogueIdx(branchDialogueIdx + 1);
                }
            } else {
                // if we are on a branch and we have reached the end, we want to set the current dialogue idx to the main one and select the old script
                if (mainDialogueIdx < selectedScript.length - 1) {
                    if ((currentScript[currentDialogueIdx]['branch'])) {
                        console.log('enterin ghere')
                        setCurrentDialogueIdx(mainDialogueIdx + 1);
                        setCurrentScript(selectedScript);
                    }                    
                } else {
                    returnHome();
                } 
            }                
        }

        const handleKeyPress = (event) => {
            if ((event.key === 'Enter') && (currentScript[currentDialogueIdx]['type'] === 'dialogue')) {
                console.log("pressed enter?", currentScript, currentDialogueIdx)
                // if the text is still displaying, display the rest of the text 
                if ((displayDialogue.length < charDialogue.length) && (currentScript[currentDialogueIdx]['type'] === 'dialogue')) {
                    setDisplayDialogue(charDialogue);
                } else {
                    // otherwise move on to the next dialogue                    
                    nextDialogue();                  
                }
                clearInterval(intervalID);  
            }                
            
        };
        
        document.addEventListener('keypress', handleKeyPress);
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        }
    }, [mainDialogueIdx, branchDialogueIdx, currentDialogueIdx, currentScript.length, charDialogue, displayDialogue, intervalID])

    // display text slowly
    useEffect(() => {
        if (currentScript[currentDialogueIdx]['type'] === 'dialogue') {        
            let currentIdx = 0;
            setDisplayDialogue(charDialogue[currentIdx]);
            const interval = setInterval(() => {
                if (currentIdx < charDialogue.length - 1) {
                    setDisplayDialogue(prevIdx => prevIdx + charDialogue[currentIdx]);
                    currentIdx ++;
                }
            }, 100);
            
            setIntervalID(interval);
            return () => clearInterval(interval);
        }
    }, [charDialogue])

    let navigate = useNavigate();
    const returnHome = () => {
        navigate(`/general`);  
    }

    const clickOption = (nextIdx, char, points) => {
        // update the meter
        if (points > 0) {
            const storedMeter = sessionStorage.getItem('meter');
            let updatedMeter = JSON.parse(storedMeter);
            updatedMeter[char] += points;
            sessionStorage.setItem('meter', JSON.stringify(updatedMeter));            
        }

        // set the script to the next index, and select inner array
        setMainDialogueIdx(prevMainIdx => prevMainIdx + 1);
        setBranchDialogueIdx(0);
        
        // Now use the updated mainDialogueIdx to get the new script
        setCurrentScript(prevScript => {
            const newScript = prevScript[currentDialogueIdx + 1][nextIdx];
            return Array.isArray(newScript) ? newScript : [newScript];
        });
        setCurrentDialogueIdx(0);
        console.log('hiiii')
    }
    
    console.log(currentScript, currentDialogueIdx);
    if (currentScript[currentDialogueIdx]['type'] === 'dialogue') {
        // display the dialogue component
        const diag =   
        <div>
            {/* <FlashScreen></FlashScreen> */}
            <div className="text-display">
                <div className="character-name">
                    <h3>{charName}</h3>
                </div>
                <hr/>
                <div className="character-dialogue">
                    <p>{displayDialogue}</p>
                </div>
            </div>               
        </div>
     
        return diag;
    } else {
        if (currentScript[currentDialogueIdx]["content"] !== undefined) {
            // display the option component
            const option = 
            <div>
                {/* <FlashScreen></FlashScreen> */}
                <div className="choice-display">
                    {currentScript[currentDialogueIdx]["content"]["options"].map((option, idx) => {
                        return (
                            <div className='individual-option' key={`option_${idx}`} onClick={() => clickOption(option.response_idx, option.character, option.points)}>
                                <p>{option.text}</p>
                            </div>
                            );
                        })}
                </div>             
            </div>
            return option;            
        }
    }
}

export default TextDisplay;
