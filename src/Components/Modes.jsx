
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faUser } from '@fortawesome/free-solid-svg-icons';
import Header from "./Component/header";
import bed from '../assets/cards/bed.png';
import paxe from '../assets/cards/paxe.webp';
import sword from '../assets/cards/sword.webp';
import sblock from "../assets/cards/skyblock.webp";
import table from '../assets/cards/creative.webp';
import tnt from '../assets/cards/tnt.png';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gamemods = () => {
    const cardRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ];
    function layer1() {
        const elements = document.querySelectorAll(".c1");

        elements.forEach(element => {
            element.classList.toggle("edcard");
        });
    }
    function layer2() {
        const elements = document.querySelectorAll(".c2");

        elements.forEach(element => {
            element.classList.toggle("edcard");
        });
    }



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const screenWidth = window.innerWidth;

        let ctx = gsap.context(() => {



            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRefs[0].current,
                    start: 'top 60%',
                    end: 'top 60%',

                }
            })
            let ttl = gsap.timeline({
                scrollTrigger: {
                    trigger: cardRefs[3].current,
                    start: 'top 70%',
                    end: 'top 70%',
                }
            })
            let tll = gsap.timeline();


            if (screenWidth > 992) {
                tl.addLabel("flayer")
                    .from(cardRefs[0].current, {
                        opacity: 0,
                        x: -50,
                        y: -50,
                        duration: 0.7
                    }, "flayer")
                    .from(cardRefs[1].current, {
                        opacity: 0,
                        y: -50,
                        duration: 0.7
                    }, "flayer")
                    .from(cardRefs[2].current, {
                        opacity: 0,
                        x: 50,
                        y: -50,

                        duration: 0.7,
                    }, "flayer")
                    .add(() => layer1());

                ttl.addLabel("slayer")
                    .from(cardRefs[3].current, {
                        opacity: 0,
                        x: -50,
                        y: 50,

                        duration: 0.7
                    }, "slayer")
                    .from(cardRefs[4].current, {
                        opacity: 0,
                        y: 50,
                        duration: 0.7
                    }, "slayer")
                    .from(cardRefs[5].current, {
                        opacity: 0,
                        x: 50,
                        y: 50,

                        duration: 0.7,
                    }, "slayer")
                    .add(() => layer2());
            }
            else {
                gsap.from(cardRefs[0].current, {
                    scrollTrigger: {
                        trigger: cardRefs[0].current,
                        start: 'top 60%',
                        end: 'top 60%',
                       
                    },
                    opacity: 0,
                    scale: 0.5,
                })
                gsap.from(cardRefs[1].current, {
                    scrollTrigger: {
                        trigger: cardRefs[1].current,
                        start: 'top 60%',
                        end: 'top 60%',
                    },
                    opacity: 0,
                    scale: 0.5,

                })
                gsap.from(cardRefs[2].current, {
                    scrollTrigger: {
                        trigger: cardRefs[2].current,
                        start: 'top 60%',
                        end: 'top 60%',
                    },
                    opacity: 0,
                    scale: 0.5,

                })
                gsap.from(cardRefs[3].current, {
                    scrollTrigger: {
                        trigger: cardRefs[3].current,
                        start: 'top 60%',
                        end: 'top 60%',
                        
                    },
                    opacity: 0,
                    scale: 0.5,

                })
                gsap.from(cardRefs[4].current, {
                    scrollTrigger: {
                        trigger: cardRefs[4].current,
                        start: 'top 60%',
                        end: 'top 60%',
                    },
                    opacity: 0,
                    scale: 0.5,

                })
                gsap.from(cardRefs[5].current, {
                    scrollTrigger: {
                        trigger: cardRefs[5].current,
                        start: 'top 60%',
                        end: 'top 60%',
                    },
                    opacity: 0,
                    scale: 0.5,

                })
                gsap.from(cardRefs[6].current, {
                    scrollTrigger: {
                        trigger: cardRefs[6].current,
                        start: 'top 60%',
                        end: 'top 60%',
                    },
                    opacity: 0,
                    scale: 0.5,

                })

            }




        })
        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <div className="App gamemods">
            <div className="modes-con">
                <Header highlight={"TaskVerse"} text={"Game mods"} />
                <div className="layer-1 layer">
                    <div ref={cardRefs[0]} className="card c1">
                        <div>
                            <img className="cri" src={paxe} alt="" />
                        </div>
                        <h3 className="ht" >
                            Survival
                        </h3>
                        <div>
                            <span className="teen"><FontAwesomeIcon className="fts" icon={faServer} /> 1.18.2</span>
                        </div>
                        <div>
                            <span className="teen"><FontAwesomeIcon icon={faUser} /> 20 Online Player</span>
                        </div>
                    </div>

                    <div ref={cardRefs[1]} className="card c1">
                        <div>
                            <img className="cri" src={sword} alt="" />
                        </div>
                        <h3 className="ht" >
                            PvP
                        </h3>
                        <div>
                            <span className="teen"><FontAwesomeIcon className="fts" icon={faServer} /> 1.16.4</span>
                        </div>
                        <div>
                            <span className="teen"><FontAwesomeIcon icon={faUser} /> 45 Online Player</span>
                        </div>
                    </div>

                    <div ref={cardRefs[2]} className="card c1">
                        <div>
                            <img className="cri" src={sblock} alt="" />
                        </div>
                        <h3 className="ht" >
                            SkyBlock
                        </h3>
                        <div>
                            <span className="teen"><FontAwesomeIcon className="fts" icon={faServer} /> 1.8.9</span>
                        </div>
                        <div>

                            <span className="teen"><FontAwesomeIcon icon={faUser} /> 20 Online Player</span>
                        </div>
                    </div>
                    <div ref={cardRefs[6]} className="card c2 bed-t">
                        <div>
                            <img className="cri" src={bed} alt="" />
                        </div>
                        <h3 className="ht" >
                            BedWars
                        </h3>
                        <div>
                            <span className="teen"><FontAwesomeIcon className="fts" icon={faServer} /> 1.8.9</span>
                        </div>
                        <div>
                            <span className="teen"><FontAwesomeIcon icon={faUser} /> 20 Online Player</span>
                        </div>
                    </div>
                </div>

                <div className="layer-2 rr layer">
                    <div ref={cardRefs[3]} className="card c2">
                        <div>
                            <img className="cri" src={table} alt="" />
                        </div>
                        <h3 className="ht" >
                            Creative
                        </h3>
                        <div>
                            <span className="teen"><FontAwesomeIcon className="fts" icon={faServer} /> 1.8.9</span>
                        </div>
                        <div>
                            <span className="teen"><FontAwesomeIcon icon={faUser} />  20 Online Player</span>

                        </div>
                    </div>

                    <div ref={cardRefs[4]} className="card c2">
                        <div>
                            <img className="cri" src={tnt} alt="" />
                        </div>
                        <h3 className="ht" >
                            TNT Run
                        </h3>
                        <div>
                            <span className="teen"><FontAwesomeIcon className="fts" icon={faServer} /> 1.8.9</span>
                        </div>
                        <div>
                            <span className="teen"><FontAwesomeIcon icon={faUser} /> 20 Online Player</span>
                        </div>
                    </div>

                    <div ref={cardRefs[5]} className="card c2 bed-m">
                        <div>
                            <img className="cri" src={bed} alt="" />
                        </div>
                        <h3 className="ht" >
                            BedWars
                        </h3>
                        <div>
                            <span className="teen"><FontAwesomeIcon className="fts" icon={faServer} /> 1.8.9</span>
                        </div>
                        <div>
                            <span className="teen"><FontAwesomeIcon icon={faUser} /> 20 Online Player</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Gamemods;  