import react from "react";
import img from "../assets/images/aboutimg.png"

const About = () => {
    return ( 

        <div className="about">
            
        <p className="aboutp">Get to Know me</p>
        <h1 className="abouh">About me</h1>

        <div className="section">
            <img src={img} alt="" className="aboutimg" />

            <p className="sectionp">
            Welcome to my corner of the web! I'm  james, a passionate front-end developer with a knack for crafting responsive and engaging user experiences. With 2 years of hands-on experience, I specialize in translating design concepts into polished, intuitive interfaces. My journey began with a fascination for blending creativity with technology, which led me to delve into HTML, CSS, and JavaScript, and eventually explore frameworks like React  js
            </p>

       

        </div>

        <div className="button">Lets talk</div>

        </div>
)}
 
export default About;