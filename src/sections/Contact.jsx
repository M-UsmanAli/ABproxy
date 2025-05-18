import { useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
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
     
        
     

      <div className="flex flex-col justify-center text-center items-center mt-5">
        <Heading data="Contact" />
        <Paragraph data="We’d love to hear from you!" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-8xl mx-auto bg-black p-8 rounded-2xl space-y-6 shadow-lg  mt-10 py-20"
        style={{
          boxShadow: `
          inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.075),
          inset 0 0 1vw hsla(0, 0%, 100%, 0.2)
        `,
        }}
      >
        <h1 className="text-start text-sm md:text-2xl text-gray-400">
          Whether you have questions, feedback, or need assistance, our team is
          here to help.
        </h1>
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
                className="w-full px-5 py-5  text-xl bg-black text-white font-semibold flex-shrink-0 rounded-full focus:outline-none focus:border-white"
                style={{
                  boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.075), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
                }}
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
                className="w-full px-5 py-5  text-xl bg-black text-white font-semibold flex-shrink-0 rounded-full focus:outline-none focus:border-white"
                style={{
                  boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.075), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
                }}
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
                className="w-full px-5 py-5  text-xl bg-black text-white font-semibold flex-shrink-0 rounded-full focus:outline-none focus:border-white"
                style={{
                  boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.075), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
                }}
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
              className="w-full px-5 py-5  text-xl bg-black text-white font-semibold flex-shrink-0 rounded-4xl focus:outline-none focus:border-white"
              style={{
                boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.075), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
              }}
              required
            ></textarea>
          </div>
        </div>

        <Button
          label="Send Message"
          className="px-5 py-3 md:px-10 md:py-5 mt-5 text-xl leading-normal rounded-2xl font-semibold  bg-black text-white  flex-shrink-0  cursor-pointer font-Headings"
          style={{
            boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.1), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
          }}
        />
      </form>
    </section>
  );
};

export default Contact;
