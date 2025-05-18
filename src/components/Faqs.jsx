import { useState } from "react";
import { faqs } from "../constants";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className="w-full justify-between md:max-w-7xl mx-auto p-8 rounded-2xl space-y-6 shadow-lg  mt-20 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-10 bg-black text-white  flex-shrink-0"
             style={{
            boxShadow: `inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.1), inset 0 0 1vw hsla(0, 0%, 100%, 0.2)`,
          }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left  cursor-pointer"
            >
              <span className="text-md md:text-2xl font-medium">{faq.question}</span>
              <span className="text-md font-normal md:text-2xl md:font-extrabold">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <p className="mt-3 pr-5 text-lg text-gray-300 transition duration-300 text-start">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Faqs;
