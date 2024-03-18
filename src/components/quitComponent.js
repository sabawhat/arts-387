import React from "react";
import { useNavigate } from 'react-router-dom';

function QuitComponent() {
    let navigate = useNavigate(); 
    const resetGame = () => {
        sessionStorage.clear();
        navigate(`/`);
    }
    const html = 
        <button onClick={resetGame} className="quit-button">quit</button>
    return html;
}

export default QuitComponent;