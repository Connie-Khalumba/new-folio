import React from 'react'
import "./services.css"

const Services = () => {
  return (
    <section className="services section" id='services'>
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

        <div className="services__container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Product <br/> Designer</h3>
                </div>

                <span className="services__button">View More <i 
                className="uil uil-arrow-right services__button"></i></span>

                <div className="services__modal">
                   <div className="services__modal-content">
                     <i className="uil uil-times 
                     services__modal"></i>

                     <h3 className="services__modal-title">Product Designer</h3>
                     <p className="services__modal-decrption">
                     Service with more than 3 years of experience.
                     Providing quality work to clients and companies.
                     </p>

                     <ul className="services__modal-services grid">
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            Web page development
                           </p>
                        </li>

                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            I position your company brand
                           </p>
                        </li>

                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                           I create ux element interactions
                           </p>
                        </li>


                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            Social media management
                           </p>
                        </li>
                     </ul>
                    </div>  
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Ui/Ux <br/> Designer</h3>
                </div>

                <span className="services__button">View More <i 
                className="uil uil-arrow-right services__button"></i></span>

                <div className="services__modal">
                   <div className="services__modal-content">
                     <i className="uil uil-times 
                     services__modal"></i>

                     <h3 className="services__modal-title">Ui/Ux Designer</h3>
                     <p className="services__modal-decrption">
                     Service with more than 3 years of experience.
                     Providing quality work to clients and companies.
                     </p>

                     <ul className="services__modal-services grid">
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            Web page development
                           </p>
                        </li>

                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            I position your company brand
                           </p>
                        </li>

                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                           I create ux element interactions
                           </p>
                        </li>


                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            Social media management
                           </p>
                        </li>
                     </ul>
                    </div>  
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Visual <br/> Designer
                    </h3>
                </div>

                <span className="services__button">View More <i 
                className="uil uil-arrow-right services__button"></i></span>

                <div className="services__modal">
                   <div className="services__modal-content">
                     <i className="uil uil-times 
                     services__modal"></i>

                     <h3 className="services__modal-title">Visual Designer</h3>
                     <p className="services__modal-decrption">
                     Service with more than 3 years of experience.
                     Providing quality work to clients and companies.
                     </p>

                     <ul className="services__modal-services grid">
                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            Web page development
                           </p>
                        </li>

                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            I position your company brand
                           </p>
                        </li>

                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                           I create ux element interactions
                           </p>
                        </li>


                        <li className="servicess__modal-service">
                            <i className="uil uil-check-circle services__modal-icon">             
                           </i>
                           <p className="services__modal-info">
                            Social media management
                           </p>
                        </li>
                     </ul>
                    </div>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
