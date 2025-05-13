import React from "react";

const Button = ({ label, onClick, className, ...rest }) => {
  return (
    <button className={className}
    onClick={onClick}
    {...rest}>
      {label}
    </button>
  );
};

export default Button;
