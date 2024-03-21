import React, { createContext, useState, useContext} from "react";
import mainMenuMusic from './assets/sounds/main-menu.mp3'
import creditMusic from './assets/sounds/Credits.mp3'
import andyMusic from './assets/sounds/Andy.mp3';
import pixieMusic from './assets/sounds/Pixie.mp3';
import goudaMusic from './assets/sounds/Gouda.mp3';
import ddMusic from './assets/sounds/dd.mp3';

const mainMenuSound = new Audio(mainMenuMusic);
const creditSound = new Audio(creditMusic);
const andySound = new Audio(andyMusic);
const pixieSound = new Audio(pixieMusic);
const goudaSound = new Audio(goudaMusic);
const ddSound = new Audio(ddMusic);

const soundContext = createContext();

export default function LoadSounds({ children }) {
    const sounds = [mainMenuSound, creditSound, andySound, pixieSound, goudaSound, ddSound];
    return (
        <soundContext.Provider value={{ sounds }}>
            {children}
        </soundContext.Provider>
    );
}

export function useSounds() {
    const context = useContext(soundContext);
    if (!context) {
        throw new Error('useSounds must be used within a LoadSounds provider');
    }
    return context;
}