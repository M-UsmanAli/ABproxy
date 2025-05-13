import { useState } from "react";
import { faqs } from "../constants";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className="w-full max-w-7xl mx-auto p-8 rounded-2xl space-y-6 shadow-lg  mt-20 ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg p-4 bg-gray-900 text-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-xl font-medium">{faq.question}</span>
              <span className="text-xl">
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
