import React from "react";
import { SvgCss } from "react-native-svg";

const Caret = () => {
  const xml = `
    <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 6L0.468911 0.750001L6.53109 0.75L3.5 6Z" fill="white"/>
    </svg>
  `;
  return <SvgCss xml={xml} />;
};

export default Caret;
