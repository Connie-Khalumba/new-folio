import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState ] =useState(1);
    
        const toggleTab = (index) => {
            setToggleState(index);
        }
  return (
   <section className="qaulification section">
     <h2 className="section__title">Qualification</h2>
     <span className="section__subtitle">My personel journey</span>

     <div className="qualification__container container">
        <div className="qualification__tabs">
           <div className={toggleState === 1 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex"}
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-graduation-cap qualification__icon"></i> 
            Education
       </div>


            <div className={toggleState === 2 
            ? "qualification__button qualification__active button--flex" 
            : "qualification__button button--flex"}
            onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt
               qualification__icon"></i> Experience
            </div>

        </div>

        <div className="qualification__sections">
            <div className={toggleState === 1 
            ? "qualification__content qualification__content-active" 
            : "qualification__content"
            }>
                <div className="qualification__data">
                    <div>
                        <h3 className='qualification__title'>Web Development</h3>
                        <span className="qualification__subtitle">
                        SHIELD Intl Program
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> March 2024 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className='qualification__title'>Social Media management Intern</h3>
                        <span className="qualification__subtitle">
                        Atote consultants
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>  Jan 2024 - March 2024
                        </div>
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className='qualification__title'>Diploma in Web Development || Digital Litracy Program</h3>
                        <span className="qualification__subtitle">
                        Nairobits Trust
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> September 2021 - Dec 2023
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className='qualification__title'>Certificate in Information and Technology</h3>
                        <span className="qualification__subtitle">
                        Kabete National Polytechnic
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> May 2019 - Dec 2023
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className={toggleState === 2 
            ? "qualification__content qualification__content-active" 
            : "qualification__content"
            }>
                <div className="qualification__data">
                    <div>
                        <h3 className='qualification__title'> IT Intern</h3>
                        <span className="qualification__subtitle">
                        Shining Hope for Communities Organisation (SHOFCO)
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> February 2020 - June 2020
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>

                <div className="qualification__data">
                    <div></div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>

                    <div>
                        <h3 className='qualification__title'>Social Media management Intern</h3>
                        <span className="qualification__subtitle">
                        Atote consultants
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>  Jan 2024 - March 2024
                        </div>
                    </div>

                    
                </div>

                <div className="qualification__data">
                    <div>
                        <h3 className='qualification__title'> Web Developer & Co-Founder</h3>
                        <span className="qualification__subtitle">
                        Redifu
                        </span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i> March 2025 - Present
                        </div>
                    </div>

                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>                
            </div>
        </div>
     </div>
   </section>
  )
}

export default Qualification
