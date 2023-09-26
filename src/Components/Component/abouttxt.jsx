import React, {useRef, useEffect} from "react";
import taskify from '../../assets/taskifysaturn.png'
import {gsap, Back} from "gsap";



const Taskifyimg = () => {
    const img = useRef(null)
    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.from(img.current,{
                scrollTrigger: {
                    trigger:img.current,
                    start: 'top 60%',
                    end: 'top 60%',
                 
                },
                scale:0.5,
                opacity:0,
                ease: Back.easeOut.config(1.7),

            })
        })
        return () => ctx.revert();

    }, []);
    return (
        <div className="task-con">
            <img ref={img} className="sat" src={taskify} alt="" />
        </div>
    )
}

export default Taskifyimg;