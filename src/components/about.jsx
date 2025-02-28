import react from "react";
import img from "../assets/images/aboutimg.png"
import project from "../assets/images/project.png"
import achieve from "../assets/images/achieve.png"

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

        <div className="achieve">
            <div className="box">
           <div className="boxitem">
           <img src={achieve} alt="" className="icon" />
            <h1 className="achievh1">Experience</h1>
            <p className="achievep">1 year experience</p>
           </div>
            </div>
            <div className="box">
               <div className="boxitem">
               <img src={project} alt="" className="icon" id="small"/>
                <h1 className="achievh1">Projects</h1>
                <p className="achievep">Over 20 projects completed</p>
               </div>
            </div>
            <div className="box">
           <div className="boxitem">
           <img src={project} alt="" className="icon" id="small" />
            <h1 className="achievh1">Projects</h1>
            <p className="achievep">Over 20 projects completed</p>
           </div>
            </div>
            <div className="box">
           <div className="boxitem">
           <img src={achieve} alt="" className="icon" />
            <h1 className="achievh1">Experience</h1>
            <p className="achievep">1 year experience</p>
           </div>
            </div>
        </div>

        </div>

        
)}
 
export default About;