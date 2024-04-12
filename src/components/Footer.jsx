import React from "react";
import Logo from "./Logo";
import styled from "styled-components";

const Footer = () => {
  return (
    <Main className="grid lg:grid-cols-3 grid-cols-1 place-items-center">
      <Logo />
      <p className="lg:pb-0 pb-6 ">Infinitybot.io © 2023</p>
      <div className="flex">
        <p className="pr-11">Telegram</p>
        <p>Twitter</p>
      </div>
    </Main>
  );
};

export default Footer;

const Main = styled.div`
  background: hsla(250, 75%, 3%, 1);
  color: white;
  padding-bottom: 86px;
`;
