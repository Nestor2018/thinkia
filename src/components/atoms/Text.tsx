import React from "react";
import "../../styles/components/atoms/_Text.scss";

type TextProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "gray"
    | "footer"
    | "footer-gray";
  font?: string;
  weight?: number | "normal" | "bold";
  className?: string;
};

export const Text: React.FC<TextProps> = ({
  children,
  level = 1,
  color = "default",
  font = "inherit",
  weight = "normal",
  className = "",
}) => {
  const sharedClasses = `text text--${color} text--level-${level} text--${font} text--${weight} ${className}`;

  switch (level) {
    case 1:
      return <h1 className={sharedClasses}>{children}</h1>;
    case 2:
      return <h2 className={sharedClasses}>{children}</h2>;
    case 3:
      return <h3 className={sharedClasses}>{children}</h3>;
    case 4:
      return <h4 className={sharedClasses}>{children}</h4>;
    default:
      return <p className={sharedClasses}>{children}</p>;
  }
};
