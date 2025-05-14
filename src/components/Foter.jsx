import {
  facebook,
  gmail,
  linkedIn,
  twitter,
  github,
  instagram,
} from "../assets/icons";
import logo from "../assets/logo.png";
import Button from "../components/Button";
import { navLinks } from "../constants";
import Heading from "./Heading";
const Foter = () => {
  return (
    <footer className="px-15 py-8 z-10 w-full bg-black">
      <div className="flex  flex-col md:flex-row justify-between items-center border-t-2 border-b-2 border-gray-400 py-10 gap-5 md:gap-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-Headings">
          Sign up for Grafana stack updates
        </h1>

        <div className="flex flex-row gap-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full md:w-90 px-4 py-4 text-base bg-black text-white border-3 border-gray-400 rounded-full focus:outline-none focus:border-white"
          />
          <Button
            label="Subscribe"
            className="px-5 py-4 md:px-6 md:py-3 text-xl leading-none rounded-full font-bold border-2 border-white bg-white text-black underline cursor-pointer font-Headings"
          />
        </div>
      </div>

      <div className="flex justify-between items-center  border-b-2 border-gray-400 py-5">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <img
              src={logo}
              alt="SAAS Logo"
              className="w-15 h-15 md:w-[90px] md:h-[90px] border border-gray-600 rounded-2xl"
            />

            <p className="text-md font-semibold md:text-4xl">AB Proxy</p>
          </div>
        </div>

        <div className="flex flex-col  items-center gap-2 font-Headings">
          <div className="flex justify-between items-center gap-3">
            <a href="">
              <img
                src={facebook}
                alt="Facebook"
                width={50}
                height={50}
                className="bg-white rounded-full "
              />
            </a>
            <a href="">
              <img
                src={twitter}
                alt="Facebook"
                width={55}
                height={55}
                className="bg-white rounded-full border-3 border-white"
              />
            </a>
            <a href="">
              <img
                src={github}
                alt="Facebook"
                width={55}
                height={55}
                className="bg-white rounded-full border-3 border-white"
              />
            </a>
            <a href="">
              <img
                src={instagram}
                alt="Facebook"
                width={55}
                height={55}
                className="bg-white rounded-full border-3 border-white"
              />
            </a>
            <a href="">
              <img
                src={linkedIn}
                alt="Facebook"
                width={55}
                height={55}
                className="bg-white rounded-full border-3 border-white"
              />
            </a>
            <a href="">
              <img
                src={gmail}
                alt="Facebook"
                width={50}
                height={50}
                className="bg-white rounded-full border-3 border-white"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Main Menu Column */}
      <div className="flex flex-col gap-3 items-start font-Headings mt-6">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-semibold text-xl text-white hover:text-purple-400 transition"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Submenu Column */}
      <div className="flex flex-col gap-2 items-start font-Headings mt-2">
        {navLinks.map(
          (link) =>
            link.subMenu &&
            link.subMenu.map((sub) => (
              <a
                key={sub.label}
                href={sub.href}
                className="text-lg text-gray-400 hover:text-purple-300"
              >
                {sub.label}
              </a>
            ))
        )}
      </div>
    </footer>
  );
};

export default Foter;
