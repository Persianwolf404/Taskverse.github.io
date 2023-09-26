import React from "react";
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <div className="footer">
            <div className="app ftp">
                <div className="footer-con">
                    <div className="logo-right">
                        <div className="mrg">
                            <img className="footer-logo" src={logo} alt="" />
                            <p className="mrgp">
                                <FontAwesomeIcon icon={faCopyright} /> <span>2023  Taskify. All Rights Reserved</span>
                            </p>
                        </div>
                    </div>
                    <div className="medias">
                        <div className="hhh">
                            <a className="med discord" href=""> <FontAwesomeIcon icon={faDiscord} /> Discord</a>
                        </div>
                        <div className="hhh">
                            <a className="med instagram" href=""><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
                        </div>
                        <div className="hhh">
                            <a className="med telegram" href=""><FontAwesomeIcon icon={faTelegram} /> Telegram</a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;