import React from 'react';
import "./about.css";
import AboutImg from "../../assets/About.jpg";
import CV from "../../assets/Connie - CV.pdf"
import Info from './Info';

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
           <img src={AboutImg} alt='' className='about__img' />

           <div className="about__data">
            <Info />

            <p className="about__description">
            Hi, I'm Constance Khalumba a front end web developer <br/> with a six months experience in various, web
              development <br/> projects I'm a developer with a keen eye for well organized <br/> code. I understand my
              clients' requirements and
              to attain <br/> a healthy and the importance of good professional relation <br/> with my clients. My core
              values are, communicating strong <br/> points and working hand in hand with my clients to achieve <br/>
              successful projects together.</p>
           </div>
        </div>
    </section>
  )
}

export default About
