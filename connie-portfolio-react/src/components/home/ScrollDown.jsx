import React from 'react'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
       <a href="#about" className="home__scroll-button 
          button--flex">
         <svg width="32" height="30" viewBox="0 0 41 60" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M20.9761 12.2731V23.4797" stroke="black" stroke-width="1.64103" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1598 18.9783C40.1598 9.35291 31.5639 1.53845 20.9761 1.53845C10.3882 1.53845 1.7923 9.35291 1.7923 18.9783V41.0148C1.7923 50.6401 10.3882 58.4546 20.9761 58.4546C31.5639 58.4546 40.1598 50.6401 40.1598 41.0148V18.9783Z" stroke="black" stroke-width="1.64103" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>

         <span className="home__scroll-name">Scroll Down</span>
         <i class="uil uil-arrow-down home__scroll-arrow"></i> 
       </a>
</div>
  )
}

export default ScrollDown
