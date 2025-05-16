import React from "react";

const SectionButton = ({ icon, label }) => {
  return (
    <button
      className="px-6 py-2 rounded-xl bg-black text-white font-semibold flex items-center gap-2"
      style={{
        boxShadow: `
          inset 0 0 0 calc(1px + 0px) hsla(0, 0%, 100%, 0.075),
          inset 0 0 1vw hsla(0, 0%, 100%, 0.2)
        `,
      }}
    >
      <img src={icon} alt={label} className="w-5 h-5 object-contain" />
      {label}
    </button>
  );
};

export default SectionButton;
