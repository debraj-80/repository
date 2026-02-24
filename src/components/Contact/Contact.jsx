import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aio4dyu",
        "template_3a6fq9s",
        form.current,
        "RiuhhtTL5x42Zyv56w"
      )
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-gradient-to-br from-[#0f0c29] via-[#1a093e] to-[#050414] text-white"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">CONTACT</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s connect for DevOps, Backend, or Cloud opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT - FORM */}
        <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-[0_0_30px_rgba(130,69,236,0.2)]">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-[#14121f] border border-gray-700 focus:outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-[#14121f] border border-gray-700 focus:outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-lg bg-[#14121f] border border-gray-700 focus:outline-none focus:border-purple-500 transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message..."
              required
              className="w-full p-3 rounded-lg bg-[#14121f] border border-gray-700 focus:outline-none focus:border-purple-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT - CONTACT INFO */}
        <div className="space-y-6">

          <h3 className="text-2xl font-semibold">Contact Information</h3>

          <div className="bg-gray-900/60 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-center gap-4">
            <FaEnvelope className="text-purple-500 text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Email</p>
              <p className="font-medium">debrajsaha2001@gmail.com</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-center gap-4">
            <FaPhone className="text-purple-500 text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Phone</p>
              <p className="font-medium">+91 8617445880</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-center gap-4">
            <FaMapMarkerAlt className="text-purple-500 text-xl" />
            <div>
              <p className="text-gray-400 text-sm">Location</p>
              <p className="font-medium">Kolkata, India</p>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md p-5 rounded-xl border border-white/20 flex items-center gap-4">
            <FaLinkedin className="text-purple-500 text-xl" />
            <div>
              <p className="text-gray-400 text-sm">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/debrajsaha-devops/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-purple-400 transition"
              >
                Connect with me
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-blue-500/20 p-5 rounded-xl border border-purple-500/30">
            <p className="text-sm text-gray-300">
              ● Open for DevOps, Backend & Cloud roles
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;