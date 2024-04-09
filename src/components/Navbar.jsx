import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Main className="grid grid-cols-2 px-20">
      <Logo />
      <div className=" justify-between items-center justify-center hidden lg:flex">
        <p className="font-bold text-lg">Home</p>
        <p className="font-bold text-lg">Features</p>
        <p className="font-bold text-lg">How it works</p>
        <p className="font-bold text-lg">Twitter</p>
        <button>Get Started</button>
      </div>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  height: 128px;
  background: hsla(245, 73%, 3%, 0.3);
  color: white;
  width: 100%;

  button {
    background-color: rgba(43, 100, 242, 1);
    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 46px 0px rgba(43, 100, 242, 0.53);
    font-weight: 700;
    font-size: 18px;
  }
`;
