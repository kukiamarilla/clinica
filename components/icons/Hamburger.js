import React from "react";
import { SvgCss } from "react-native-svg";

const Hamburger = () => {
  const xml = `
    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="1" x2="20" y2="1" stroke="white" stroke-width="2"/>
      <line y1="9" x2="20" y2="9" stroke="white" stroke-width="2"/>
      <line y1="17" x2="20" y2="17" stroke="white" stroke-width="2"/>
    </svg>
  `;
  return <SvgCss xml={xml} />;
};

export default Hamburger;
