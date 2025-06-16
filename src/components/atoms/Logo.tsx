import React from "react";
import "../../styles/components/atoms/_Logo.scss";
import logo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <header className="logo">
      <a href="/">
        <img src={logo} alt="Tramicar Logo" />
      </a>
    </header>
  );
};
