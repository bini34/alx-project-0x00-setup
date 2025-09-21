import React from "react";

export interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className = "" }) => {
  return (
    <button className={`px-4 py-2 font-semibold bg-blue-500 text-white ${className}`}>
      {title}
    </button>
  );
};

export default Button;
