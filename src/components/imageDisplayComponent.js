import React from "react";

function ImageDisplay({charSprite}) {
    return (
        <div className="image-display">
            <img src={charSprite}></img>
        </div>   
    )
}        

export default ImageDisplay;