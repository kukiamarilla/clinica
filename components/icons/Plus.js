import React from "react";
import { SvgCss } from "react-native-svg";

const Plus = ({fill}) => {
  const xml = `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="16" y1="8" x2="-8.74228e-08" y2="8" stroke="${fill ? fill : "white"}" stroke-width="2"/>
      <line x1="8.5" y1="3.77507e-08" x2="8.5" y2="16" stroke="${fill ? fill : "white"}" stroke-width="2"/>
    </svg>
  `;
  return <SvgCss xml={xml} />;
};

export default Plus;
