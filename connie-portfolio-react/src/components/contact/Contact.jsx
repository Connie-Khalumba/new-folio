import React from 'react'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                  <div className="contact__card">
                    <i className="bx bx-mail-send contact__card-icon"></i>

                    <h3 className="contact__card-title">Email</h3>
                    <span className="contact__card-data">constancekhalumba@gmail.com</span>

                    <a href="mailto:examplemail@gmail.com.com" className="contact__button">Write me{" "}
                       <i className="bx bx-right-arrow-alt
                    contact__button-icon"></i></a>
                  </div>

                  <div className="contact__card">
                    <i className="bx bxl-whatsapp contact__card-icon"></i>

                    <h3 className="contact__card-title">Whatsapp</h3>
                    <span className="contact__card-data">0799764525</span>


                    <a href="https://api.whatsapp.com/send?phone=254799764525&text=Hi%2C%20I'm%20interested%20in%20your%20portfolio.%20Can%20we%20talk%3F"
                        className="contact__button">Connect with me on LinkedIn 
                      <i className="bx bx-right-arrow-alt
                    contact__button-icon"></i></a>
                  </div>

                  <div className="contact__card">
                    <i className="bx bxl-linkedin contact__card-icon"></i>

                    <h3 className="contact__card-title">Linkedin</h3>
                    <span className="contact__card-data">constance Khalumba</span>

                    <a href="https://www.linkedin.com/in/constance-khalumba-0b390822a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bvaxi%2Fh%2BzQ1W5YjtkyuAVkw%3D%3D" className="contact__button">Write me{"  "} 
                      <i className="bx bx-right-arrow-alt
                    contact__button-icon"></i></a>
                  </div>  
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>
            </div>
        </div>
    </section>
  )
}

export default Contact
