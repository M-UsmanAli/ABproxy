import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";
import { navLinks } from "../constants";
import { hamburgerwhite } from "../assets/icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  return (
    <div className="px-15 py-7 fixed top-0 left-0 z-50 w-full  bg-black">
      <nav className="flex justify-between items-center">
        {/* Logo and brand */}
        <div className="flex items-center gap-15">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="SAAS Logo"
              width={60}
              height={60}
              className="border-2 border-gray-600 rounded-2xl cursor-pointer"
            />
            <p className="text-md font-semibold md:text-2xl">AB Proxy</p>
          </div>

          {/* Desktop Menu */}

          <ul className="flex flex-1 justify-center items-center gap-10 max-lg:hidden font-Headings bg-black py-1 px-2 ">
            {navLinks.map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="leading-normal text-xl font-semibold text-gray-400 hover:text-white transition"
                >
                  {item.label}
                </a>

                {item.subMenu && (
                  <ul className="absolute -left-7 mt-2 bg-black text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 z-20 min-w-[180px] p-3 space-y-2">
                    {item.subMenu.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          onClick={handleLinkClick}
                          className="block px-4 hover:bg-gray-800 rounded-md gap-0"
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Button */}
        <div className="flex gap-5 max-lg:hidden">
          <Button
            label={isHovered ? "Join waitlist" : "Contact Us"}
            className="px-7 py-3 rounded-xl bg-black text-white font-semibold flex-shrink-0 cursor-pointer"
            style={{
              boxShadow: `
                inset 0 0 0 1px hsla(0, 0%, 100%, 0.075),
                inset 0 0 1vw hsla(0, 0%, 100%, 0.2)
              `,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              const section = document.querySelector("#contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="hidden max-lg:block z-30">
          <img
            src={hamburgerwhite}
            alt="hamburger"
            width={40}
            height={40}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="cursor-pointer"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] bg-black bg-opacity-95 text-white p-8 flex flex-col gap-6 z-20">
          {navLinks.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={handleLinkClick}
                className="text-xl font-semibold block mb-2"
              >
                {item.label}
              </a>
              {item.subMenu && (
                <div className="ml-4 space-y-2">
                  {item.subMenu.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      onClick={handleLinkClick}
                      className="block text-gray-400 hover:text-white"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Button
            label="Contact Us"
            className="mt-5 w-full px-7 py-3 border-3 text-lg leading-none rounded-lg font-bold text-white border-gray-500 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
