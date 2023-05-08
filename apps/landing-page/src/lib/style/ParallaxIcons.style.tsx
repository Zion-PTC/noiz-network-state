"use client";
import styled, { css } from "styled-components";
import { TextCenter, TextSpan } from "./Header.style";
import { wContainer } from "./ParallaxCard.style";
import { BigHeading, Container, Paragraph } from "./StylesSheet";

const arrowLink = css`
  display: inline-block;
  margin-top: 10px;
  -webkit-transition: -webkit-transform 500ms ease;
  transition: -webkit-transform 500ms ease;
  transition: transform 500ms ease;
  transition: transform 500ms ease, -webkit-transform 500ms ease;
  color: #5351fb;
  font-weight: 500;
  text-decoration: none;
`;

const wInlineBlock = css`
  max-width: 100%;
  display: inline-block;
`;
const mB30 = css`
  margin-bottom: 30px;
`;
const image13 = css`
  display: none;
  margin-right: auto;
  margin-bottom: 60px;
  margin-left: auto;
`;
const textSpan3 = css`
  background-image: linear-gradient(90deg, #35ded4, #2d47d0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const imgVerticalMiddle = css`
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;
const iconRowW3 = css`
  margin-top: -15%;
`;
export const ParllaxIconArea = styled.div`
  #container {
    ${Container}
    ${TextCenter}
    ${wContainer}
    .app-icons-row-container {
      .app-icons-row {
        width: 100%;
      }
      .app-icons-row-3 {
        width: 100%;
        ${iconRowW3}
      }
    }
    .app-store-icon {
      border-radius: 20px;
      display: block;
      width: 20%;
      max-width: 220px;
      margin-right: auto;
      margin-bottom: 40px;
      margin-left: auto;
      @media screen and (max-width: 767px) {
        margin-top: -20px;
      }
    }
    img {
      ${imgVerticalMiddle}
    }
    .image-13 {
      ${image13}
    }
    .big-heading {
      ${BigHeading}
      color: black;
    }
    .text-span-3 {
      ${textSpan3}
    }
    p {
      ${Paragraph}
      ${mB30}
    }
    a {
      ${arrowLink}
      ${wInlineBlock}
    }
    .app-store-images {
      position: relative;
      margin-top: 60px;
    }
    .app-store-image-center {
      display: block;
      width: 600px;
      margin-right: auto;
      margin-left: auto;
      border-radius: 1%;
      box-shadow: 1px 1px 40px 0 rgba(0, 0, 0, 0.2);
    }
    .app-store-image-left {
      position: absolute;
      left: 0px;
      top: 40px;
      z-index: -1;
      width: 500px;
      border: 1px solid #eceef1;
      border-radius: 1%;
      box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.1);

      @media screen and (max-width: 767px) {
        display: none;
      }
    }
    .app-store-image-right {
      position: absolute;
      top: 40px;
      right: 0px;
      z-index: -1;
      width: 500px;
      border: 1px solid #eceef1;
      border-radius: 1%;
      box-shadow: 1px 1px 20px 0 rgba(0, 0, 0, 0.1);
      @media screen and (max-width: 767px) {
        display: none;
      }
    }
  }
`;
