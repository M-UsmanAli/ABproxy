import logo from "../assets/logo.png";
import Button from "../components/Button";
import { facebook } from "../assets/icons";
import { gmail } from "../assets/icons";
import { linkedIn } from "../assets/icons";
import { navLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="px-15 py-8 z-10 w-full bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Logo + Subscribe */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex  items-center gap-2">
            <img
              src={logo}
              alt="SAAS Logo"
              width={50}
              height={50}
              className="border border-gray-600 rounded-2xl"
            />
            <p className="text-md font-semibold md:text-2xl">AB Proxy</p>
          </div>

          <div className="flex flex-col md:flex-row w-full gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full md:w-90 px-4 py-4 text-base bg-black text-white border-3 border-gray-400 rounded-full focus:outline-none focus:border-white"
            />
            <Button
              label="Subscribe"
              className="px-5 py-4 md:px-6 md:py-3  text-xl leading-none rounded-full font-bold border-2 border-white bg-white text-black underline cursor-pointer font-Headings"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 text-center">
          {/* Main Menu Row */}
          <div className="flex flex-wrap justify-center gap-6 font-Headings">
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="font-semibold text-xl text-white hover:text-purple-400 transition"
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          {/* Submenu Row */}
          <div className="flex flex-wrap justify-center gap-6 font-Headings">
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
        </div>

        {/* Copyright */}
        <div className="flex flex-col  items-center gap-2 font-Headings">
          <div className="text-xl text-gray-400 text-left md:text-right">
            © AB Proxy. All rights reserved.
          </div>
          <div className="flex justify-between items-center gap-5">
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
    </footer>
  );
};

export default Footer;
