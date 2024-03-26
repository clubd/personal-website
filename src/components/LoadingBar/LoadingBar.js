import { progress } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./LoadingBar.scss";


function LoadingBar () {
    const [fill, setFill] = useState(0);
    

    useEffect(() => {
        const interval = setInterval(() => {
            setFill((previousFill) => {
                if (previousFill >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return previousFill + 1;
            });
        }, 30);
        return () => clearInterval(interval);
    },[]);
    
    return (
        <div className="loading__container">
            <div className="loading__bar" style={{ width: `${fill}%` }}></div>
            <div className="loadin__text">{fill}%</div>
        </div>
        )
}

export default LoadingBar