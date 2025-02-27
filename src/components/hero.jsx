import react from "react";


import james from "../assets/images/port.png";

import { TypeAnimation } from 'react-type-animation';






const Hero = () => {
    return (  
        <div className="landingpage">
            {/* <img src={james} alt={james} className="landingimg" /> */}

            <div className="landtext">
                <p className="landp">Hello I'am</p>
                <h1 className="landh1">Itam James Obla</h1>

                {/* typer annimation */}
              <p className="typer">
              <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I am a Frontend Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'I am a UI/UX Designer ',
        1000,
        
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                
              </p>
            </div>

            <div className="buttoncon">
                <div className="but1">
                    <p className="but1p">About me</p>
                </div>

                <div className="but2">
                    <p className="but2p">Contact me</p>
                </div>
            </div>

            <div className="imgcont">
                
            <img src={james} alt={james} className="landingimg" />
            </div>

        </div>
    );
}
 
export default Hero;