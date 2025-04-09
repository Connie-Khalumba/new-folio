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

            <a download="" href={CV} className="button 
             button--flex">Download CV 
             <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.6875 38.7608H14.1875C4.685 38.7608 0.625 34.6041 0.625 24.8754V14.1254C0.625 4.39669 4.685 0.240021 14.1875 0.240021H22.9375C23.655 0.240021 24.25 0.849188 24.25 1.58377C24.25 2.31835 23.655 2.92752 22.9375 2.92752H14.1875C6.12 2.92752 3.25 5.86585 3.25 14.1254V24.8754C3.25 33.135 6.12 36.0733 14.1875 36.0733H24.6875C32.755 36.0733 35.625 33.135 35.625 24.8754V15.917C35.625 15.1825 36.22 14.5734 36.9375 14.5734C37.655 14.5734 38.25 15.1825 38.25 15.917V24.8754C38.25 34.6041 34.19 38.7608 24.6875 38.7608Z" fill="white"/>
                <path d="M36.9375 17.2608H29.9375C23.9525 17.2608 21.625 14.8779 21.625 8.75042V1.58375C21.625 1.04625 21.94 0.544584 22.43 0.347501C22.92 0.132501 23.48 0.257917 23.865 0.634167L37.865 14.9675C38.2325 15.3438 38.355 15.9349 38.145 16.4366C37.935 16.9383 37.4625 17.2608 36.9375 17.2608ZM24.25 4.82667V8.75042C24.25 13.3729 25.4225 14.5733 29.9375 14.5733H33.77L24.25 4.82667Z" fill="white"/>
                <path d="M21.1875 22.6358H10.6875C9.97 22.6358 9.375 22.0266 9.375 21.292C9.375 20.5574 9.97 19.9483 10.6875 19.9483H21.1875C21.905 19.9483 22.5 20.5574 22.5 21.292C22.5 22.0266 21.905 22.6358 21.1875 22.6358Z" fill="white"/>
                <path d="M17.6875 29.8024H10.6875C9.97 29.8024 9.375 29.1933 9.375 28.4587C9.375 27.7241 9.97 27.1149 10.6875 27.1149H17.6875C18.405 27.1149 19 27.7241 19 28.4587C19 29.1933 18.405 29.8024 17.6875 29.8024Z" fill="white"/>
             </svg>
           </a>
           </div>
        </div>
    </section>
  )
}

export default About
