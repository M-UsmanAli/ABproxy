import logo from "../assets/logo.png";
import Button from "../components/Button";
import { footerLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="px-15 py-8 z-10 w-full bg-black">
      <div className="w-full">
        {/* Top Shadow Line */}
        <div
          style={{
            boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.1), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
          }}
          className="h-[1px] w-full bg-black text-white  flex-shrink-0"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
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

          
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-3 text-center">
         
        </div>

        {/* subscribe */}
        <div className="flex flex-col  items-center gap-2 font-Headings">
          <div className="flex flex-col md:flex-row w-full gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full md:w-90 px-4 py-4 text-base bg-black text-white rounded-full focus:outline-none focus:border-white"
            style={{
              boxShadow: `
                inset 0 0 0 1px hsla(0, 0%, 100%, 0.075),
                inset 0 0 1vw hsla(0, 0%, 100%, 0.2)
              `,
            }}
            />
            <Button
              label="Subscribe"
              className="px-5 py-4 md:px-6 md:py-3  text-xl leading-none rounded-full  bg-black text-white font-semibold flex-shrink-0 cursor-pointer font-Headings"
            style={{
              boxShadow: `
                inset 0 0 0 1px hsla(0, 0%, 100%, 0.075),
                inset 0 0 1vw hsla(0, 0%, 100%, 0.2)
              `,
            }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          boxShadow:
            "inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.1), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)",
        }}
        className="h-[1px] w-full"
      />
      <div className="flex flex-wrap justify-start py-10 gap-12 md:gap-50 font-Headings text-center">
        {footerLinks.map((link) => (
          <div key={link.label} className="flex  items-start flex-col gap-5">
            {/* Main Menu */}
            <a
              href={link.href}
              className="font-bold text-xl text-white hover:text-purple-400 transition"
            >
              {link.label}
            </a>

            {/* Submenu (if exists) */}
            {link.subMenu && (
              <div className="flex justify-start items-start flex-col gap-5">
                {link.subMenu.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="flex items-center gap-2 text-xl text-gray-400 hover:text-purple-300"
                  >
                    {/* Icon (if exists) */}
                    {sub.icon && (
                      <img
                        src={sub.icon}
                        alt={sub.label}
                        className="w-5 h-5 object-contain bg-white rounded-full border-2 border-white"
                      />
                    )}
                    {/* Label */}
                    <span className="leading-none">{sub.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
