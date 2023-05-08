import React from "react";
import { Browser } from "./Browser";
import { LinuxCommand } from "./LinuxCommand";
import { Navbar } from "./Navbar";
import {
  GradientButtonStyle,
  HeaderComponent,
  HeroTextStyle,
} from "../lib/style/Header.style";
import { AppearFromBottomLoader } from "./AppearFromBottomLoader";
import { IconZion } from "../lib/style/Body.style";
import type { dataHeaderTexts } from "../pages/api/headerData";
import { GetServerSideProps } from "next";
import { getData } from "../lib/getData";

const HERO_ID = "hero";
const HEADER_ID = "header";
const FIRST_TITLE_TRIGGER_KEY = "#hero-text";
const HERO_TXT_ID = "hero-text";
const TXT_SPAN_ID = "text-span";
const PARAGRAPH_HEADER_ID = "paragraph-header";
const GRADIENT_BUTTON_TRIGGER_KEY = "#gradient-button";
const GRADIENT_BUTTON_ID = "gradient-button";
const GRADIENT_BUTTON_EFFECT = "button-effect";
const GRADIENT_BUTTON_EFFECT_KEY = "ooo";
const GRADIENT_BUTTON_TXT_ID = "button-text";
const PARAGRAPH_HEADER_LAST_LINE_ID = "header-last-line";
const ENDPOINT = "http://localhost:3000/api/headerData";

export const getServerSideProps: GetServerSideProps = async () => {
  const data: dataHeaderTexts = await getData(ENDPOINT);
  return {
    props: {
      dataHeaderTexts: data,
    },
  };
};

interface HeaderProps {
  dataHeaderTexts: dataHeaderTexts;
  trigger1: string;
  triggerButtonToTop: string;
  triggerButtonTransform: string;
}

export const Header = ({
  dataHeaderTexts,
  trigger1,
  triggerButtonToTop,
  triggerButtonTransform,
}: HeaderProps) => (
  <>
    <HeaderComponent
      trigger1={trigger1}
      triggerButtonToTop={triggerButtonToTop}
      triggerButtonTransform={triggerButtonTransform}
    >
      <div id={HERO_ID}>
        <div id={HEADER_ID}>
          <Navbar></Navbar>
        </div>
        <div>
          <Browser></Browser>
        </div>
        <AppearFromBottomLoader triggerKey={FIRST_TITLE_TRIGGER_KEY}>
          <HeroTextStyle id={HERO_TXT_ID}>
            {dataHeaderTexts.firstLineTitle}
            <br />
            {dataHeaderTexts.secondLineFirstWordTitle}
            <span id={TXT_SPAN_ID}>{dataHeaderTexts.secondLineAllTitle}</span>
            <span id={TXT_SPAN_ID}></span>
            <span id={TXT_SPAN_ID}></span>
          </HeroTextStyle>
        </AppearFromBottomLoader>
        <p id={PARAGRAPH_HEADER_ID}>
          {dataHeaderTexts.paragraphHeader.First}
          <br></br>
          <br></br>
          {dataHeaderTexts.paragraphHeader.Second}
        </p>
        <AppearFromBottomLoader triggerKey={GRADIENT_BUTTON_TRIGGER_KEY}>
          <GradientButtonStyle id={GRADIENT_BUTTON_ID}>
            <a id={GRADIENT_BUTTON_EFFECT} key={GRADIENT_BUTTON_EFFECT_KEY}>
              <div id={GRADIENT_BUTTON_TXT_ID}>{dataHeaderTexts.buttonTxt}</div>
              <IconZion arrowRight></IconZion>
            </a>
          </GradientButtonStyle>
        </AppearFromBottomLoader>
        <p id={PARAGRAPH_HEADER_LAST_LINE_ID}>
          {dataHeaderTexts.paragraphHeader.Last}
        </p>
        <LinuxCommand></LinuxCommand>
      </div>
    </HeaderComponent>
  </>
);
