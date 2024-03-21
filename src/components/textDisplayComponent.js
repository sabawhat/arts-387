import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loadJson from "../dialogueManager";
import FlashScreen from "./flashComponent";
import { useSounds } from "../soundManager";

function TextDisplay() {
    // get the current location, round to select the right script
    const allScripts = loadJson();
    const {sounds} = useSounds();
    const currentRound = parseInt(sessionStorage.getItem('round'), 10) - 1; // subtract 1 to get the idx
    const location = sessionStorage.getItem('location');
    const all_points = JSON.parse(sessionStorage.getItem('meter'));
    var font_family = 'Times New Roman';
    var location_idx = 0;
    if (location === 'a healing place') {
        location_idx = 0
        font_family = "Coiny";
    } else if (location === 'a soft place') {
        location_idx = 1
    } else if (location === 'a chaotic place') {
        location_idx = 2
        font_family = "Jacques Francois Shadow";
    } else if (location === 'an eternal place') {
        location_idx = 3
    }

    // 3 cases for script: normal, last round high/low, eternal
    // if last round, special case to select script
    if (currentRound + 1 === 4) {
        if (location === 'an empty place') {
            var selectedScript = allScripts[4][0]
        } else {
            if (all_points[location_idx] < 20) {
                // set to low case
                selectedScript = allScripts[location_idx][3]
                if ((location === 'a soft place')) {
                    // get the last 4 elements of the script to loop
                    const loop = selectedScript.slice(-4);
                    var duplicate = [];
                    for (let i = 0; i < 1000; i ++) {
                        duplicate = duplicate.concat(loop);
                    }
                    selectedScript = selectedScript.concat(duplicate);
                }
            } else {
                // set to high case
                selectedScript = allScripts[location_idx][4]
            }
        }
    } else {
        selectedScript = allScripts[location_idx][currentRound]
    }    
    
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
        if (sessionStorage.getItem('music') === 'true') {
            if (location === 'a healing place') {
                sounds[2].pause();
            } else if (location === 'a soft place') {
                sounds[3].pause();
            } else if (location === 'a chaotic place') {
                sounds[4].pause();
            } else if (location === 'an eternal place') {
                sounds[5].pause();
            }            
        }
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
    }

    // reset the game for try again
    const resetGame = () => {
        sessionStorage.clear();
        navigate(`/`);
    }
    
    // check if end key is in the dictionary, if so quit the game
    if (currentScript[currentDialogueIdx]['type'] === 'dialogue') {
        // display the dialogue component
        const diag =   
        <div>
            {/* <FlashScreen></FlashScreen> */}
            <div className="text-display" style={{fontFamily: font_family}}>
                <h3 className="character-name">{charName}</h3>
                <hr></hr>
                <p className="character-dialogue">{displayDialogue}</p>
            </div>               
        </div>
        return diag;
    } else {
        if (currentScript[currentDialogueIdx]["content"] !== undefined) {
            // display the option component
            const option = 
            <div>
                <div className="option-display">
                    {currentScript[currentDialogueIdx]["content"]["options"].map((option, idx) => {
                        return (
                            <div className="option-container" key={`option_${idx}`} onClick={'end' in currentScript[currentDialogueIdx] ? () => resetGame() : () => clickOption(option.response_idx, option.character, option.points)}>
                                <p className='option'>{option.text}</p>
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
