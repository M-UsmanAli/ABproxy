import React from "react";

const Button = ({ label, icon, onClick, className, ...rest }) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {label}
      {icon && (
        <span className="w-5 h-5 ml-3 md:ml-5">
          <img src={icon} alt="" />
        </span>
      )}
    </button>
  );
};

export default Button;
