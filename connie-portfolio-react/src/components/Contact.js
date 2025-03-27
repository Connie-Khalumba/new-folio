import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oah5gyw', 'template_lh4s1gp', form.current, '2rzpEYDpR9DO-1GFg')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Drop Me a Line</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-3 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-600"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;