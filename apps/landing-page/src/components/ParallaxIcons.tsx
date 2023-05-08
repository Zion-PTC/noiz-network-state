import React from "react";
import { ParllaxIconArea } from "../lib/style/ParallaxIcons.style";
import ParallaxIconsObserver from "./ParallaxIconsObserver";

const P_I_BIG_HEAD_TEXT_FIRST_LINE = "Of course, there’s an entire";
const P_I_BIG_HEAD_TEXT_SECOND_LINE = "freaking";
const P_I_BIG_HEAD_TEXT_END = "app store.";
const P_I_PARAGRAPH_TEXT =
  "Discover amazing self-hosted apps in Umbrel App Store and install them in one click.";
const P_I_LINK_TEXT = "View the Umbrel App Store";

export const ParallaxIcons = () => (
  <ParllaxIconArea>
    <div id="container">
      <div className="app-icons-row-container">
        <img
          src="assets/app-row-1.png"
          loading="lazy"
          className="app-icons-row"
        />
        <ParallaxIconsObserver>
          <img
            src="assets/app-row-2.png"
            loading="lazy"
            className="app-icons-row app-icons-row-2"
          />
        </ParallaxIconsObserver>
        <img
          src="assets/app-row-3.png"
          loading="lazy"
          className="app-icons-row-3"
        />
      </div>
      <img src="assets/icon_4.svg" loading="lazy" className="app-store-icon" />
      <img src="assets/icon_4.svg" loading="lazy" className="image-13" />
      <h1 className="big-heading">
        {P_I_BIG_HEAD_TEXT_FIRST_LINE}
        <br />
        {P_I_BIG_HEAD_TEXT_SECOND_LINE}
        <span className="text-span-3"> {P_I_BIG_HEAD_TEXT_END}</span>
      </h1>
      <p>{P_I_PARAGRAPH_TEXT}</p>
      <a
        href="https://apps.umbrel.com"
        target="_blank"
        className="arrow-link w-inline-block"
      >
        <div className="arrow-link-text">{P_I_LINK_TEXT}</div>
        <img
          src="assets/arrow_1.svg"
          loading="lazy"
          alt=""
          className="arrow-link-icon"
        />
      </a>
      <div className="app-store-assets">
        <img
          src="assets/Group-1601.jpg"
          loading="lazy"
          className="app-store-hero-image"
        />
        <img
          src="assets/Group-1601.jpg"
          loading="lazy"
          className="app-store-image-left"
        />
        <img
          src="assets/Group-1601.jpg"
          loading="lazy"
          className="app-store-image-right"
        />
      </div>
    </div>
  </ParllaxIconArea>
);
