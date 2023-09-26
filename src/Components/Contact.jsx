import React from "react";
import Starss from "./Component/star";
import MyCanvas from "./Model";
import ContactUs from "./Component/Email";



const Contact = () => {

    return (


        <div className="contact-con">
            <Starss />
            <div className="app ">
                <div className="con">
                    <div className="box-con">
                        <ContactUs />
                    </div>
                    <div className="planet-con">
                        <MyCanvas />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;