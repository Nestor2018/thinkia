import React from "react";
import "../../styles/components/atoms/_Button.scss";
import logo from "../../assets/arrow-button.svg";
import { Text } from "./Text";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}) => {
  return (
    <button
      className={`btn btn--${variant} ${className}`}
      onClick={onClick}
      type={type}
    >
      <Text level={4} weight="bold" font="dm-sans" color="secondary">
        {label}
      </Text>
      <img src={logo} alt="Arrow indicator" className="ml-2" />
    </button>
  );
};
