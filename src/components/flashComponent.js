import React, { useState, useEffect } from 'react';

function FlashScreen() {
    const [flash, setFlash] = useState(false);
    // Function to toggle flash state randomly
    const toggleFlash = () => {
        setFlash(Math.random() < 0.05); // controls flash intervals, smaller = longer intervals
    };

  // Use useEffect to toggle flash at random intervals
    useEffect(() => {
        const interval = setInterval(() => {
            toggleFlash();
        }, Math.random() * 15000); // controls flash duration

        return () => clearInterval(interval); 
    }, []);

    return (
        <div className={`flash-overlay ${flash ? 'flash' : ''}`}>
        </div>
    );
};

export default FlashScreen;