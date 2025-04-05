import React from 'react'

const ScrollDown = () => {
  return (
    <div className='home__scroll'>
       <a href="#about" className="home__scroll-button 
          button--flex">
       
          <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="icon__scroll"
        >
        <path
         d="M7 4V19C7 20.6569 8.34315 22 10 22H17C18.6569 22 20 20.6569 20 19V4H7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
       />
      <path
        d="M7 4H4V19C4 20.6569 5.34315 22 7 22V4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
        </svg>
      </a>
</div>
  )
}

export default ScrollDown
