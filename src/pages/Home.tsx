import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const navigatep = useNavigate();
  const navigater = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-16 py-10 my-">
      {/* Hero Section */}
      <div className="flex-1 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-6xl font-bold mb-6 text-black dark:text-[rgb(254,208,81)]">
          <span className="text-[#8D45BC] dark:text-white">Hello,</span> I'm
          SHARMILA 
        </h1>
        <p className="text-xl mb-8 text-black dark:text-white max-w-2xl mx-auto">
          A passionate full-stack developer crafting beautiful and functional
          web experiences. Specialized in building modern web applications with
          cutting-edge technologies.
        </p>
        <div className="flex justify-center gap-6">
        <button
      onClick={() => navigatep('/projects')}
      className="group inline-flex items-center gap-2 text-[#8D45BC] dark:text-[#FED051] hover:gap-4 transition-all"
    >
      <span className="text-lg font-semibold">View My Work</span>
      <ArrowRight className="w-5 h-5 group-hover:animate-pulse" />
    </button>
    <button
      onClick={() => navigater('/resume')}
      className="group inline-flex items-center gap-2 text-[#8D45BC] dark:text-[#FED051] hover:gap-4 transition-all"
    >
      <span className="text-lg font-semibold">Download CV</span>
      <ArrowRight className="w-5 h-5 group-hover:animate-pulse" />
    </button>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="flex-1  w-full flex items-center justify-center mx-auto py-20 my-2">
        <div className="p-6 w-1/2  rounded-lg bg-white dark:bg-[#141414] shadow-[0_0_15px_rgba(141,69,188,0.3)] dark:shadow-[0_0_15px_rgba(254,208,81,0.3)]">
          <h2 className="text-2xl flex items-center justify-center font-bold mb-6 text-[#8D45BC] dark:text-[#FED051]">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-transparent
                         focus:outline-none focus:ring-2 focus:ring-[#8D45BC] dark:focus:ring-[#FED051]
                         text-black dark:text-white transition-shadow
                         hover:shadow-[0_0_10px_rgba(141,69,188,0.2)] dark:hover:shadow-[0_0_10px_rgba(254,208,81,0.2)]"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-transparent
                         focus:outline-none focus:ring-2 focus:ring-[#8D45BC] dark:focus:ring-[#FED051]
                         text-black dark:text-white transition-shadow
                         hover:shadow-[0_0_10px_rgba(141,69,188,0.2)] dark:hover:shadow-[0_0_10px_rgba(254,208,81,0.2)]"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-transparent
                         focus:outline-none focus:ring-2 focus:ring-[#8D45BC] dark:focus:ring-[#FED051]
                         text-black dark:text-white transition-shadow
                         hover:shadow-[0_0_10px_rgba(141,69,188,0.2)] dark:hover:shadow-[0_0_10px_rgba(254,208,81,0.2)]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#8D45BC] dark:bg-[#FED051] text-white dark:text-black
                       rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

