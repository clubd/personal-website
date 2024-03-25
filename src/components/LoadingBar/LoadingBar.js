import { progress } from "framer-motion";
import React, { useEffect, useState } from "react";


function LoadingBar() => {
    const [fill, setFill] = useState(0);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFill((previousFill) => {
                if (previousFill === 100) {
                    clearInterval(interval);
                }
                return previousFill + 1;
            });
        }, 20);
    },[]);

    return (
        <div className="loading-container">
            <div className="loading-bar" style={{ width: `${progress}%` }}></div>
            <div className="loading-text">{progress}%</div>
        </div>
        )
}

export default LoadingBar