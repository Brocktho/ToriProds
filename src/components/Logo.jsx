import React from 'react';
import {useState} from 'react';
import {useSpring, animated} from "react-spring";

function Logo() {

    const [toggle, setToggle] = useState(false);

    const {x1} = useSpring({
        reset: toggle,
        from: {x1:0},
        x1:1,
        config: {duration: 1000}
    });

    const {x2} = useSpring({
        reset: toggle,
        from: {x2:0},
        x2:1,
        config: {duration: 1400}
    });

    const {x3} = useSpring({
        reset: toggle,
        from: {x3:0},
        x3:1,
        config: {duration: 1800}
    });

    const {x4} = useSpring({
        reset: toggle,
        from: {x4:0},
        x4:1,
        config: {duration: 2200}
    });

    const {x5} = useSpring({
        reset: toggle,
        from: {x5:0},
        x5:1,
        config: {duration: 2600}
    });

    const {x6} = useSpring({
        reset: toggle,
        from: {x6:0},
        x6:1,
        config: {duration: 3000}
    });

    const{x7} = useSpring({
        reset: toggle,
        from: {x7:0},
        x7: 1,
        config: {duration:3400}
    });

    const {fillMe} = useSpring({
        reset: toggle,
        from: {fillMe:0},
        fillMe: .7,
        config: {duration: 4500}
    });
    

    function updateTrue(){
        return(
            setToggle(true)
        )
    };

    function updateFalse(){
        return(
            setToggle(false)
        )
    };

    return(
        <div className="group flex flex-row items-center h-full justify-center text-6xl sm:text-4xl md:text-3xl w-full" onMouseEnter={() => updateTrue()} onMouseLeave ={() => updateFalse()} to="/">
            <svg className='w-full h-full text-8xl' viewBox="0 0 700 110" xmlns="http://www.w3.org/2000/svg" >
                <animated.svg fillOpacity={fillMe} strokeDasharray={400} strokeDashoffset={x1.to(x1 => (1-x1) * 400)}> {/* B */}
                        <text x="0" y="80" stroke="black" fill="silver">
                            Victory One Productions
                        </text>
                </animated.svg>
            </svg>
        </div>
    )
}

export default Logo