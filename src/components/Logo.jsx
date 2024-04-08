import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <>
      <div className="flex items-center">
        <img src={logo} alt="logo" />
        <p className="text-3xl pl-2.5">Infinity</p>
      </div>
    </>
  );
};

export default Logo;
