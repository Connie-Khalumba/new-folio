import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Portfolio = () => {
  const projects = [
    {
      title: "Your One-Stop eCommerce Shop",
      img: "/assets/project1.png",
      desc: "Welcome to okok leather shop eCommerce website...",
      link: "https://okok-leather.netlify.app",
    },
    {
      title: "Web Application for a Housing website",
      img: "/assets/project2.jpg",
      desc: "Kharl Agency is a website that enables users locate good and affordable houses...",
      link: "https://kharl-agency.netlify.app/",
    },
    // Add more projects as needed
  ];

  return (
    <section id="portfolio" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Portfolio</h2>
        <span className="text-gray-600">Most recent work</span>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="mt-8"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-3">{project.desc}</p>
                  <a
                    href={project.link}
                    className="mt-4 inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Demo <span className="ml-2">→</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;