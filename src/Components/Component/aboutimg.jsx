import React, { useRef, useEffect } from "react";
import Header from './header'
import { gsap, Back } from "gsap";


const Abtext = () => {
    const txt = useRef(null)
    const htxt = useRef(null)

    useEffect(() => {

        let ctx = gsap.context(() => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: txt.current,
                    start: 'top 60%',
                    end: 'top 60%',
               
                },
            })
                .addLabel('sm')
            tl.from(txt.current, {
                delay: 0.7,
                scale: 0.5,
                opacity: 0,
                ease: Back.easeOut.config(1.7),

            }, 'sm').from(htxt.current, {
                delay: 1,
                scale: 0.5,
                opacity: 0,
              
                ease: Back.easeOut.config(1.7),
            }
                , 'sm'
            )
        })
        return () => ctx.revert();

    }, []);
    return (
        <div className="txt-con">
            <Header highlight={'Taskify'} />
            <h2 ref={txt} className="tasktitle">
                Empowering Digital Excellence: Taskify's Web Development Expertise
            </h2>
            <p ref={htxt}>
                Taskify is a dynamic team of seasoned web development experts committed to crafting high-performance, feature-rich websites. With a relentless dedication to excellence, we transform visionary concepts into sleek, user-centric digital solutions. Our agile approach and diverse skill set enable us to tackle even the most complex projects with precision, delivering results that exceed expectations. At Taskify, we merge innovation with expertise to empower businesses and individuals through the limitless potential of the web. Join us on the journey to redefine digital experiences.
            </p>
        </div>
    )
}

export default Abtext;