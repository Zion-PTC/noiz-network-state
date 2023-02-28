import React from "react";
import {
  RollingSectionArea,
  RollingSectionStyled,
} from "../lib/style/RollingSection.style";

interface RollingSectionProps {
  images: { src: string; alt: string }[];
}

///SRC IMMAGINI
const LOGO_ROLL_SRC_1 = "https://via.placeholder.com/200?text=Logo%201";
const LOGO_ROLL_SRC_2 = "https://via.placeholder.com/200?text=Logo%202";
const LOGO_ROLL_SRC_3 = "https://via.placeholder.com/200?text=Logo%203";
const LOGO_ROLL_SRC_4 = "https://via.placeholder.com/200?text=Logo%204";
const LOGO_ROLL_SRC_5 = "https://via.placeholder.com/200?text=Logo%205";
const LOGO_ROLL_SRC_6 = "https://via.placeholder.com/200?text=Logo%206";
const LOGO_ROLL_SRC_7 = "https://via.placeholder.com/200?text=Logo%207";
const LOGO_ROLL_SRC_8 = "https://via.placeholder.com/200?text=Logo%208";
const LOGO_ROLL_SRC_9 = "https://via.placeholder.com/200?text=Logo%209";
const LOGO_ROLL_SRC_10 = "https://via.placeholder.com/200?text=Logo%2010";
const LOGO_ROLL_SRC_11 = "https://via.placeholder.com/200?text=Logo%2011";
const LOGO_ROLL_SRC_12 = "https://via.placeholder.com/200?text=Logo%2011";
const LOGO_ROLL_SRC_13 = "https://via.placeholder.com/200?text=Logo%2013";
const LOGO_ROLL_SRC_14 = "https://via.placeholder.com/200?text=Logo%2014";
const LOGO_ROLL_SRC_15 = "https://via.placeholder.com/200?text=Logo%2015";
const images = [
  { src: LOGO_ROLL_SRC_1, alt: "Image 1" },
  { src: LOGO_ROLL_SRC_2, alt: "Image 2" },
  { src: LOGO_ROLL_SRC_3, alt: "Image 3" },
  { src: LOGO_ROLL_SRC_4, alt: "Image 4" },
  { src: LOGO_ROLL_SRC_5, alt: "Image 5" },
  { src: LOGO_ROLL_SRC_6, alt: "Image 6" },
  { src: LOGO_ROLL_SRC_7, alt: "Image 7" },
  { src: LOGO_ROLL_SRC_8, alt: "Image 8" },
  { src: LOGO_ROLL_SRC_9, alt: "Image 9" },
  { src: LOGO_ROLL_SRC_10, alt: "Image 10" },
  { src: LOGO_ROLL_SRC_11, alt: "Image 11" },
  { src: LOGO_ROLL_SRC_12, alt: "Image 12" },
  { src: LOGO_ROLL_SRC_13, alt: "Image 13" },
  { src: LOGO_ROLL_SRC_14, alt: "Image 14" },
  { src: LOGO_ROLL_SRC_15, alt: "Image 15" },
  // aggiungi altre immagini qui
];
export const RollingSection = () => {
  return (
    <RollingSectionArea>
      <RollingSectionStyled direction={"right"}>
        <div className="slider">
          <ul>
            {images.map((image, index) => (
              <li key={index}>
                <img src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      </RollingSectionStyled>
      <RollingSectionStyled direction={"left"}>
        <div className="slider">
          <ul>
            {images.map((image, index) => (
              <li key={index}>
                <img src={image.src} alt={image.alt} />
              </li>
            ))}
          </ul>
        </div>
      </RollingSectionStyled>
    </RollingSectionArea>
  );
};
