import React from "react";

const ContactForm = () => {
  return (
    <form className="w-full max-w-md  p-6 rounded-lg shadow-lg animate__animated animate__fadeIn bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 text-white ">
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Your Name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Your Email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          placeholder="Your Message"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className=" bg-black text-white font-bold py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
