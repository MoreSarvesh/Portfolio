import React from "react";

const Logo = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="-1000 300 1400 1000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={{ stroke: "currentColor", fill: "none", strokeWidth: "45px" }}
        d="M -375.184 500 L -525.061 500 C -626.592 502.377 -619.584 702.213 -525.061 700 L -375.184 700 C -267.845 704.982 -285.01 904.185 -375.184 900 L -600 900"
        transform="matrix(1, 0, 0, 1, 0, -1.1368683772161603e-13)"
      ></path>
      <path
        style={{ stroke: "currentColor", fill: "none", strokeWidth: "45px" }}
        d="M -301.951 700.704 L -300.485 500 C -300.485 500 -150.243 698.515 -150.243 700 C -150.243 701.485 0 500 0 500 L 0 900"
        transform="matrix(1, 0, 0, 1, 0, -1.1368683772161603e-13)"
      ></path>
      <path
        style={{ stroke: "currentColor", fill: "none", strokeWidth: "45px" }}
        d="M -300 1200 L -900 600 L -700 400 L 100 400 L 300 600 L -300 1200 Z"
        transform="matrix(1, 0, 0, 1, 0, -1.1368683772161603e-13)"
      ></path>
    </svg>
  );
};

export default Logo;
