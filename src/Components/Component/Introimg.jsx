import React, { useEffect, useRef } from "react";
import Button from '@mui/material/Button';

import gsap from "gsap";

const Introimg = () => {
    const img = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(img.current, {
                delay: 1.5,
                opacity: 0,
                scale: 0.4,
                duration: 0.5,
            });

            const animation = gsap.to(btn.current, {
                y: -20,
                paused: true,
            });

            btn.current.addEventListener("mouseenter", () => animation.play());
            btn.current.addEventListener("mouseleave", () => animation.reverse());

            // Cleanup function
            return () => {
                animation.kill();
            };
        });
        return () => ctx.revert(); // Revert all animations created within the context
    }, []);

    return (

        <div className="img-con">
            <div ref={img} className="bg-img">
                <div>
                    <div className="center">
                        <button ref={btn}>Join The Server Now!</button>
                    </div>
                    <div className="ran">
                        <span className="status">play.example.com</span>
                        <span className="status">1500</span>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Introimg;

