import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization:'',
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add email service or backend integration here
  };

  return (
    <section
      className="w-full  min-h-screen flex flex-col text-center px-6 sm:px-10 lg:px-40 py-28"
      id="contact"
    >
      <Heading data="Contact" />
      <div className="flex justify-center text-center items-center mt-5">
        <Paragraph data="We’d love to hear from you!" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-8xl mx-auto bg-black p-8 rounded-2xl space-y-6 shadow-lg border-2 border-gray-400 mt-10 py-20"
      >
        
        <h1 className="text-start text-sm md:text-2xl text-gray-400">Whether you have questions, feedback, or need assistance, our team is here to help.</h1>
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Left Side: Name, Email, Subject */}
          <div className="flex flex-col w-full md:w-1/2 space-y-6 gap-5">
            <div className="text-left">
              
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-5 py-5 text-xl bg-black text-white border-3 border-gray-400 rounded-full focus:outline-none focus:border-white"
                required
              />
            </div>

            <div className="text-left">
              
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your business email"
                className="w-full px-5 py-5 text-xl bg-black text-white border-3 border-gray-400 rounded-full focus:outline-none focus:border-white"
                required
              />
            </div>

            <div className="text-left">
              
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Organzation you work at."
                className="w-full px-5 py-5 text-xl bg-black text-white border-3 border-gray-400 rounded-full focus:outline-none focus:border-white"
              />
            </div>
          </div>

          {/* Right Side: Message */}
          <div className="w-full md:w-1/2">
           
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="It`s a place for your message. Don`t be shy!"
              rows={10}
              className="w-full px-5 py-3 text-xl bg-black text-white border-3 border-gray-400 rounded-4xl resize-none focus:outline-none focus:border-white"
              required
            ></textarea>
          </div>
        </div>

        <Button
          label="Send Message"
          className="px-5 py-3 md:px-20 md:py-4 mt-5 text-xl leading-none rounded-full font-bold border-2 border-white bg-white text-black underline cursor-pointer font-Headings"
        />
      </form>
    </section>
  );
};

export default Contact;
