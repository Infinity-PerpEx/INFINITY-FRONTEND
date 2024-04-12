import React from "react";
import styled from "styled-components";
import pc from "../../assets/pc.png";

const Features = () => {
  return (
    <Main className="lg:px-16 px-5">
      <div>
        <p className="pt-16 text-center font-bold text">Features</p>
        <div className="grid lg:grid-cols-3 place-items-center grid-cols-1">
          {[1, 2, 3].map((data) => (
            <div className="box flex flex-col items-center px-8 py-11 mb-14 ">
              <div className="p-3 bg-white img_box">
                <img src={pc} alt="" className="w-5 " />
              </div>
              <p className="text1 pb-6">Portfolio Management</p>
              <p className="text2">
                Track the performance of your investment portfolio effortlessly.
                Monitor your assets, profits, and losses in real-time with our
                intuitive portfolio tracker.
              </p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center lg:px-56">
          {[1, 2].map((data) => (
            <div className="box flex flex-col items-center px-8 py-11 mb-14">
              <div className="p-3 bg-white img_box">
                <img src={pc} alt="" className="w-5 " />
              </div>
              <p className="text1 pb-6">Portfolio Management</p>
              <p className="text2">
                Track the performance of your investment portfolio effortlessly.
                Monitor your assets, profits, and losses in real-time with our
                intuitive portfolio tracker.
              </p>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Features;

const Main = styled.div`
  background: hsla(250, 75%, 3%, 1);
  color: white;

  .box {
    border: 1px solid hsla(0, 0%, 100%, 0.2);
    border-radius: 20px;
  }
  .img_box {
    background: hsla(223, 88%, 56%, 1);
    border-radius: 7px;
    margin-bottom: 24px;
  }
  .text {
    font-size: 43.31px;
    padding-bottom: 99px;

    @media (max-width: 768px) {
      padding-bottom: 60px;
      font-size: 20px;
    }
  }
  .box {
    width: 393px;
    text-align: center;
    @media (max-width: 768px) {
      width: auto;
    }
  }
`;
