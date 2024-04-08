import React from "react";
import styled from "styled-components";

const HowItWork = () => {
  return (
    <Main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="mb-20">
        <p className="text-5xl font-bold">How it works</p>
        <p className="text-xl pt-6">Follow these instructions to get started</p>
      </div>
      <div>
        {[1, 2, 3, 4].map((val, i) => (
          <div className={`flex items-center mb-16 relative `}>
            {val == 4 ? (
              ""
            ) : (
              <>
                <div className="line line1"></div>
                <div className="line line2"></div>
                <div className="line line3"></div>
                <div className="line line4"></div>
              </>
            )}
            <div className="no">
              <p>{i + 1}</p>
            </div>
            <div>
              <p className="pb-5 text-3xl">Sign up for the bot on Telegram</p>
              <p className="text-lg">
                Get started by simply adding our bot on Telegram. It takes just
                a few clicks to access powerful trading tools and resources.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default HowItWork;

const Main = styled.div`
  background: hsla(250, 75%, 3%, 1);
  color: white;
  padding: 178px 85px;
  .line::before {
    content: "";
    position: absolute;
    width: 1px;
    background-color: white;
    border-spacing: 225px;
    left: 28px;
  }
  .line1::before {
    height: 30px;
    top: 70px;
  }
  .line2::before {
    height: 20px;
    top: 115px;
  }

  .line3::before {
    height: 20px;
    top: 155px;
  }
  .line4::before {
    height: 30px;
    top: 190px;
  }

  .no {
    background: hsla(223, 88%, 56%, 1);
    padding: 14px 24px;
    margin-right: 62px;
    z-index: 222;
  }
`;
