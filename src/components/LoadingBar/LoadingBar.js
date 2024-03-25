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
        return () => clearInterval(interval);
    },[]);

    return (
        <div className="loading__container">
            <div className="loading__bar" style={{ width: `${progress}%` }}></div>
            <div className="loadin__text">{progress}%</div>
        </div>
        )
}

export default LoadingBar