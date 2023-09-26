
import React, { useRef, useEffect } from "react";
import gsap from "gsap"; // Import GSAP

const Introtext = () => {
    // Define the text and texts refs
    const text = useRef(null);
    const texts = useRef(null);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        let ctx = gsap.context(() => {
            if (screenWidth >= 769) {
                const tl = gsap.timeline();

                tl.from(text.current, {
                    delay: 1.5,
                    x: -15,
                    opacity: 0,
                    duration: 0.5
                }).from(texts.current, {

                    x: -15,
                    opacity: 0,
                    duration: 0.5
                })
            }
            else {
                const tl = gsap.timeline();

                tl.from(text.current, {
                    delay: 0.5,
                    x: -15,
                    opacity: 0,
                    duration: 0.5
                }).from(texts.current, {

                    x: -15,
                    opacity: 0,
                    duration: 0.5
                })
            }


        })

        return () => ctx.revert()

    }, []);

    return (
        <div className="text-con">
            <p></p>
            <h1 className="md-h1" ref={text}>
                Hi, I'm <span className="highlight">TaskVerse</span>, Your Epic Portal to Limitless Minecraft Adventures
            </h1>
            <strong ref={texts}>
                Welcome to TaskVerse, our Minecraft server, <br /> where limitless adventures await in a vibrant
                community <br /> of builders and adventurers. <br /> Join us today and unleash your creativity <br />
                in a world where imagination <br /> knows no bounds
            </strong>
        </div>
    );
};

export default Introtext;
