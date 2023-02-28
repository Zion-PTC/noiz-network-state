"use client";
import { HTMLAttributes } from "react";
import styled, { css, keyframes } from "styled-components";

interface RollingSectionProps extends HTMLAttributes<HTMLDivElement> {
  direction?: "left" | "right";
}
export const RollingSectionArea = styled.div`
  display: "flex";
`;
export const RollingSectionStyled = styled.div<RollingSectionProps>`
  .slider {
    width: 100%;
    margin: 0;
    overflow: hidden;
    position: relative;

    animation-fill-mode: forwards;
    ul {
      display: flex;
      padding: 0;
      margin: 0;
      list-style: none;
      position: relative;
      gap: 20px;

      animation-fill-mode: forwards;
      li {
        flex: 0 0 auto;
        max-width: 100%;
        list-style: none;

        animation-fill-mode: forwards;
      }

      img {
        max-width: fit-content !important;
        height: auto !important;
        padding: 0;
        animation-fill-mode: forwards;
      }
      ${({ direction }) =>
        direction === "left"
          ? css`
              animation: ${keyframes`
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              `} infinite linear 40s;
            `
          : css`
              animation: ${keyframes`
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(100%);
                }
              `} infinite linear 40s;
            `}
    }
  }
`;
