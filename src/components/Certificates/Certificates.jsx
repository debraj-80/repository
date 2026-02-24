import React from "react";
import { certificates } from "../../constants";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          CERTIFICATES
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Professional certifications and achievements
        </p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="relative group bg-gray-900 p-6 rounded-2xl border border-white/20 overflow-hidden transition duration-300 hover:scale-105"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#8245ec]/20 to-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="mb-4 text-[#8245ec] text-2xl">
                <FaAward />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {cert.title}
              </h3>

              <p className="text-gray-400 text-sm">
                Issued by: {cert.issuer}
              </p>

              <p className="text-gray-500 text-sm mt-1">
                Year: {cert.date}
              </p>

              {/* Link Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm bg-[#8245ec] text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition"
              >
                View Certificate
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;