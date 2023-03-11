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
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#35ded4),
    to(#2d47d0)
  );
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
export const ParllaxIconArea = styled.div`
  #container {
    ${Container}
    ${TextCenter}
    ${wContainer}
    .app-icons-row-container {
      .app-icons-row {
        width: 100%;
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
  }
`;
