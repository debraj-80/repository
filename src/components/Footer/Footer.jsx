import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name */}
        <h2 className="text-xl font-semibold text-purple-500">
          Debraj saha
        </h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" }, // fixed id
            { name: "Education", id: "education" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1 transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-6 text-xl">
          <a
            href="https://www.linkedin.com/in/debrajsaha-devops/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/debraj-80"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>

          {/* Email Icon */}
          <a
            href="mailto:debrajsaha2001@gmail.com"
            className="hover:text-purple-500 transition-transform transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © 2026 Debraj saha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;