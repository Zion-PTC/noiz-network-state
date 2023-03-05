import React from "react";
import { RollingSectionArea } from "../lib/style/RollingSection.style";
import { SliderInfiniteClick } from "./SlideinfiniteClick";

interface RollingSectionProps {
  images: { src: string; alt: string; height: string; width: string }[];
}

///SRC IMMAGINI
const LOGO_ROLL_SRC_1 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png";
const LOGO_ROLL_SRC_2 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png";
const LOGO_ROLL_SRC_3 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png";
const LOGO_ROLL_SRC_4 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png";
const LOGO_ROLL_SRC_5 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png";
const LOGO_ROLL_SRC_6 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png";
const LOGO_ROLL_SRC_7 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png";
const LOGO_ROLL_SRC_8 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png";
const LOGO_ROLL_SRC_9 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png";
const LOGO_ROLL_SRC_10 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png";
const LOGO_ROLL_SRC_11 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png";
const LOGO_ROLL_SRC_12 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png";
const LOGO_ROLL_SRC_13 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png";
const LOGO_ROLL_SRC_14 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png";
const LOGO_ROLL_SRC_15 =
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png";

export const RollingSection: React.FC<RollingSectionProps> = () => {
  const images = [
    { src: LOGO_ROLL_SRC_1, alt: "Image 1", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_2, alt: "Image 2", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_3, alt: "Image 3", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_4, alt: "Image 4", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_5, alt: "Image 5", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_6, alt: "Image 6", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_7, alt: "Image 7", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_8, alt: "Image 8", height: 100, width: 250 },
    { src: LOGO_ROLL_SRC_9, alt: "Image 9", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_10, alt: "Image 10", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_11, alt: "Image 11", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_12, alt: "Image 12", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_13, alt: "Image 13", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_14, alt: "Image 14", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_15, alt: "Image 15", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_15, alt: "Image 15", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_15, alt: "Image 15", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_15, alt: "Image 15", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_15, alt: "Image 15", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_15, alt: "Image 15", height: 100, width: 250 },
    // { src: LOGO_ROLL_SRC_15, alt: "Image 15", height: 100, width: 250 },
    // aggiungi altre immagini qui
  ];

  const numImmagini = images.length;

  return (
    <>
      <RollingSectionArea numImmagini={numImmagini}>
        <div className="ilbody">
          <div className="slider">
            <div className="slide-track">
              <div>
                {images.map((image, index) => (
                  <img
                    src={image.src}
                    alt={image.alt}
                    height={image.height}
                    width={image.width}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RollingSectionArea>
      <SliderInfiniteClick></SliderInfiniteClick>
    </>
  );
};
