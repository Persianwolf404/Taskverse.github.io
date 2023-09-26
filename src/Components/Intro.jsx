import React from "react";
import Introtext from "./Component/Introtext";
import Introimg from "./Component/Introimg";




const Intro = () => {

   
    return (
        <>
            <div className="intro-con">
                <div className="filler"></div>
                <div className="App ">
                    <div className="intro">
                        <Introtext />
                        <Introimg />
                    </div>
                </div>
            </div>

        </>
    )
}


export default Intro;

