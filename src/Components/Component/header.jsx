import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Header = (props) => {


    const borderw = useRef(null);
    const head = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        let ctx = gsap.context(() => {

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: borderw.current,
                    start: 'top 60%',
                    end: 'top 60%',
                }
            })

            tl.from(head.current, {
                opacity: 0,
                x: -20,
            })


                .to(borderw.current, {
                    width: '100%',
                    duration: 1,
                    ease: "Power3.out",
                })
        })

        return () => ctx.revert()
    }, []);


    return (
       <div ref={borderw} className="header-con">

            <h1 ref={head} className="gmh">
                <span className="h1h highlight">{props.highlight}</span> {props.text}
            </h1>

        </div>
    )


}

export default Header;