import React, { useEffect, useRef, useState } from "react";
import Logo from '../assets/logo.png';
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const flist = useRef(null);
    const slist = useRef(null);
    const tlist = useRef(null);
    const folist = useRef(null);
    const thlist = useRef(null);
    const logo = useRef(null);
    const dashbord = useRef(null);

    const [activeElement, setActiveElement] = useState(null);

    useEffect(() => {
        const home = document.querySelector('#home');
        const game = document.querySelector('#game');
        const about = document.querySelector('#about');
        const contact = document.querySelector('#contact');
        const foot = document.querySelector('#foot');
        const screenWidth = window.innerWidth;
        // Check if the elements exist before adding event listeners
        if (home) {
            home.addEventListener('click', () => {
                let gmmo = document.querySelector('.intro-con')
                if (gmmo) {
                    gmmo.scrollIntoView({ behavior: "smooth" });
                }
                setActiveElement("home");
            });
        }
        if (game) {
            game.addEventListener('click', () => {
                let gmmo = document.querySelector('.gamemods')
                if (gmmo) {
                    gmmo.scrollIntoView({ behavior: "smooth" });
                }
                setActiveElement("game");
            });
        }
        if (about) {
            about.addEventListener('click', () => {
                let gmmo = document.querySelector('.abts')
                if (gmmo) {
                    gmmo.scrollIntoView({ behavior: "smooth" });
                }
                setActiveElement("about");
            });
        }
        if (contact) {
            contact.addEventListener('click', () => {
                let gmmo = document.querySelector('.contact-con')
                if (gmmo) {
                    gmmo.scrollIntoView({ behavior: "smooth" });
                }
                setActiveElement("contact");
            });
        }
        if (foot) {
            foot.addEventListener('click', () => {
                let gmmo = document.querySelector('.footer-con')
                if (gmmo) {
                    gmmo.scrollIntoView({ behavior: "smooth" });
                }
                setActiveElement("foot");
            });
        }

        let ctx = gsap.context(() => {
            let tl = gsap.timeline();
            if (screenWidth >= 769) {
                tl.from(flist.current, {
                    delay: 0.1,
                    opacity: 0,
                    duration: 0.5,
                })
                    .addLabel("second")
                    .from(slist.current, {
                        x: -5,
                        opacity: 0,
                        duration: 0.3
                    }, "second")
                    .from(tlist.current, {
                        x: 5,
                        opacity: 0,
                        duration: 0.3
                    }, "second")

                    .addLabel("third")
                    .from(folist.current, {
                        x: -5,
                        opacity: 0,
                        duration: 0.3
                    }, "third")
                    .from(thlist.current, {
                        x: 5,
                        opacity: 0,
                        duration: 0.3
                    }, "third")
                    .from(logo.current, {
                        delay: 0.3,
                        x: 10,
                        opacity: 0,
                        duration: 0.5
                    }, "third")
                    .from(dashbord.current, {
                        delay: 0.3,
                        x: -10,
                        opacity: 0,
                        duration: 0.5
                    }, "third")

            }
            else {
                gsap.from(logo.current, {
                    opacity: 0,
                    scale: 0.5
                })
                gsap.from(dashbord.current, {
                    opacity: 0,
                    scale: 0.5
                })
            }

        });

        return () => ctx.revert();
    }, []);

    return (
        <nav>
            <div className="App navbar">
                <div className="nav-sub logo-con">
                    <img ref={logo} className="logo" src={Logo} alt="taskify logo" />
                </div>
                <div className="nav-sub nav-item-con">
                    <ul>
                        <li
                            id="home"
                            ref={folist}
                            className={activeElement === "home" ? "active" : ""}
                        >
                            Home
                        </li>
                        <li
                            id="game"
                            ref={slist}
                            className={activeElement === "game" ? "active" : ""}
                        >
                            Game Modes
                        </li>
                        <li
                            id="about"
                            ref={flist}
                            className={activeElement === "about" ? "active" : ""}
                        >
                            About Us
                        </li>
                        <li
                            id="contact"
                            ref={tlist}
                            className={activeElement === "contact" ? "active" : ""}
                        >
                            Contact
                        </li>
                        <li
                            id="foot"
                            ref={thlist}
                            className={activeElement === "foot" ? "active" : ""}
                        >
                            Footer
                        </li>
                    </ul>
                </div>
                <div className="nav-sub dashbord-con">
                    <button ref={dashbord} className="pad">
                        <span className="nn" ><FontAwesomeIcon icon={faUser} /> Dashboard</span>

                        <FontAwesomeIcon className="usr" icon={faUser} />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
