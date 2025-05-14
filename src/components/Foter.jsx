import logo from "../assets/logo.png";
import Button from "../components/Button";
import { facebook } from "../assets/icons";
import { gmail } from "../assets/icons";
import { linkedIn } from "../assets/icons";
import { navLinks } from "../constants";

const Foter = () => {
  return (
    <footer className="px-15 py-8 z-10 w-full bg-black">
      <div className="flex justify-between items-start border-t border-b border-gray-400 py-5">
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
        <div className="flex flex-col  items-center gap-2 font-Headings">
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
      <p>hi</p>
    </footer>
  );
};

export default Foter;
