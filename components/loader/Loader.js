import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animationData from "../../assets/data/Paperplane.json"

const Loader = () => {

    const container = useRef()

    useEffect(()=>{
        Lottie.loadAnimation({
            container: container.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData
        })
    }, [])

	return <div className="loader">
        <div className="central" ref={container}></div>
    </div>;
};

export default Loader;
