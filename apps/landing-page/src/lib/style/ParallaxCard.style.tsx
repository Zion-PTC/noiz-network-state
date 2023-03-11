"use client";
import styled, { css } from "styled-components";
import { ParagraphTextLeft } from "./Card.style";
import { ContentWrapper } from "./FullPage.style";
import { TextWhite } from "./Header.style";
import { Paragraph } from "./StylesSheet";

const developAppsSection = css`
  background-image: url(/assets/graffiti-chair.jpg),
    linear-gradient(229deg, #6a58cc, #994ba6);
  background-position: 50% 50%, 0px 0px;
  background-size: cover;
`;
export const wContainer = css`
  margin-left: auto;
  margin-right: auto;
  max-width: 940px;
  @media screen and (min-width: 746px) {
    padding-top: 200px;
  }
  @media screen and (max-width: 991px) {
    max-width: 728px;
  }
`;

const wCbeforeEwcafter = css`
  content: " ";
  display: table;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-column-end: 2;
  grid-row-end: 2;
`;

const developAppsContainer = css`
  margin-top: 20px;
`;
const wRow = css`
  margin-left: -10px;
  margin-right: -10px;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    margin-right: 0;
  }
`;
const wAfter = css`
  clear: both;
`;
const column5 = css`
  @media screen and (max-width: 767px) {
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    flex-direction: column-reverse;
  }
`;

const wCol = css`
  position: relative;
  float: left;
  width: 100%;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
    left: auto;
    right: auto;
  }
`;
const wCol6 = css`
  width: 50%;
`;
const column6 = css``;
const column7 = css`
  @media screen and (max-width: 767px) {
    position: relative;
    z-index: 1;
  }
`;
const card = css`
  border-radius: 40px;
`;

const cardDevelopApps = css`
  margin-top: -60px;
  margin-right: -60px;
  border-color: rgba(255, 255, 255, 0.18);
  background-color: hsla(0, 0%, 100%, 0.1);
  box-shadow: 1px 1px 20px 0 rgb(0 0 0 / 10%);
  -webkit-backdrop-filter: saturate(120%) blur(20px);
  backdrop-filter: saturate(120%) blur(20px);
  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
const cardContainer = css`
  height: 100%;
  padding: 50px 40px;
  @media screen and (max-width: 991px) {
    padding: 40px 30px;
  }
`;
const developerCardContainer = css`
  overflow: visible;
  padding-bottom: 60px;

  @media screen and (max-width: 991px) {
    overflow: visible;
  }
`;

const image15 = css`
  position: absolute;
  z-index: 0;
  border-radius: 20px;
  -webkit-backdrop-filter: saturate(200%) blur(20px);
  backdrop-filter: saturate(200%) blur(20px);

  @media screen and (max-width: 767px) {
    position: relative;
    display: block;
    width: 80vw;
    margin-right: auto;
    margin-left: auto;
  }
`;
const image16 = css`
  position: absolute;
  left: 40px;
  top: -50px;
  width: 120px;
  height: 120px;
`;
const Img = css`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  border: 0;
`;
const cardHeader = css`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
  align-items: center;
`;
const wInlineBlock = css`
  max-width: 100%;
  display: inline-block;
  color: #19f0d1;
  margin-top: 20px;
`;

export const ParallaxCardsArea = styled.div`
  ${ContentWrapper}
  #develop-apps-section {
    ${developAppsSection}
  }
  #w-container {
    ${wContainer}
    &::before,&::after {
      ${wCbeforeEwcafter}
    }
    &::after {
      ${wAfter}
    }
  }
  #develop-apps-container {
    ${developAppsContainer}
  }
  #columns-5 {
    ${column5}
    ${wRow}
  }
  #column-6 {
    ${column6}
    ${wCol}
    ${wCol6}
  }
  #column-7 {
    ${wCol}
    ${wCol6}
    ${column7}
  }
  #card-paral {
    ${card}
    ${cardDevelopApps}
  }
  #developer-card-container {
    ${cardContainer}
    ${developerCardContainer}
  }
  #image-15 {
    ${Img}
    ${image15}
  }
  #image-16 {
    ${Img}
    ${image16}
  }
  #card-header {
    ${cardHeader}
    ${TextWhite}
  }
  p {
    ${Paragraph}
    ${ParagraphTextLeft}
    ${TextWhite}
  }
  img {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
  #arrow-link {
    ${wInlineBlock}
  }
  #arrow-link-text {
    ${wInlineBlock}
  }
  svg {
    margin-left: 10px;
    stroke: #19f0d1;
  }
`;
