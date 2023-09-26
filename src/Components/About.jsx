import React from "react";
import Abtext from "./Component/aboutimg";
import Taskifyimg from "./Component/abouttxt";



const About = () => {
 

    return (
        <>
            <div className="about abts">
                <div className="app ">
                    <div className="intro">
                        <Abtext />
                        <Taskifyimg />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default About;