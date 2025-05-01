import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Connie</h1>

        <ul className="footer__list">
            <li>
                <a href="#about" 
                className="footer__link">About</a>
            </li>

            <li>
                <a href="#portfolio" 
                className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#qualification" 
                className="footer__link">Qualifications</a>
            </li>
        </ul>

        <div className="footer__social">
           <a href="https://www.instagram.com/connie_khalumba?igsh=NHdvY3U2bWJ6MXhw" className="footer__social-link" target="_blank">
              <i class="bx bxl-instagram"></i>
            </a>

           <a href="https://x.com/Connie9915?t=676rio4GeoRfjuBadKIm2w&s=09" className="footer__social-link" target="_blank">
           <i class="fa-brands fa-x-twitter"></i>

          </a>

           <a href="https://www.linkedin.com/in/constance-khalumba-0b390822a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bvaxi%2Fh%2BzQ1W5YjtkyuAVkw%3D%3D" 
               className="footer__social-link" target="_blank"
           >
              <i class="bx bxl-linkedin"></i> 
           </a>

           <span className="footer__copy">
           &#169; Connie Khalumba. All rigths reserved
           </span>
        </div>
    </div>
   </footer>
  )
}

export default Footer
