import React, { useState } from 'react';

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    { title: "Certificate in ICT", subtitle: "Kabete National Polytechnic", date: "2019 - 2021" },
    { title: "Digital Literacy Program", subtitle: "Nairobits Trust", date: "Sept 2022 - Dec 2022" },
    { title: "Diploma in Web Development", subtitle: "Nairobits Trust", date: "2022 - 2023" },
  ];

  const work = [
    { title: "ICT Intern", subtitle: "Shining Hope For Communities (SHOFCO)", date: "Jan 2020 - May 2020" },
    { title: "Digital Marketing Intern", subtitle: "Atote Consult", date: "Jan 2024 - March 2024" },
  ];

  return (
    <section id="qualifications" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Qualifications</h2>
        <span className="text-gray-600">My Personal Journey</span>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            className={`px-4 py-2 rounded ${activeTab === 'education' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 transition`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
          <button
            className={`px-4 py-2 rounded ${activeTab === 'work' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-700 transition`}
            onClick={() => setActiveTab('work')}
          >
            Work
          </button>
        </div>
        <div className="mt-8 space-y-6">
          {(activeTab === 'education' ? education : work).map((item, index) => (
            <div key={index} className="flex items-center justify-center space-x-4">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <span className="text-gray-600">{item.subtitle}</span>
                <div className="text-gray-500">{item.date}</div>
              </div>
              <div className="flex flex-col items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                {index < (activeTab === 'education' ? education : work).length - 1 && (
                  <span className="w-px h-12 bg-blue-600"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;