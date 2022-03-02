import React from 'react';
import {useTransition, animated} from 'react-spring';
import PropTypes from 'prop-types';
import VideoPlayer from "react-video-js-player";

const GalleryMount = ({toggle, set, target}) => {

    const GalleryStyle = useTransition(toggle, {
        from: {height:"100vh", width:"100vw", top:"-100vh"},
        enter: {top:"0", pointerEvents: "auto"},
        leave: {top:"-100vh", pointerEvents: "none"},
        reverse: toggle,
    });

    return GalleryStyle((styles, item) => item && <animated.div style={{...styles}} className="fixed w-screen h-screen flex flex-row items-center justify-center" onClick={() => set(false)}>
            <svg className="w-12 h-12 absolute cursor-pointer top-16 right-4" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            <div className="w-3/4 h-3/4 flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <VideoPlayer className="w-full h-4/5" controls={true} src={target.video} poster={target.image} width="720" height="420" onClick={(e) => e.stopPropagation()}/>
            </div>
        </animated.div>
    )
}

GalleryMount.propTypes = {
    toggle: PropTypes.bool,
    target: PropTypes.object,
}

export default GalleryMount;