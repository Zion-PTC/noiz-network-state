"use client";
import styled, { css, ThemedStyledProps } from "styled-components";

interface RollingSectionAreaProps extends ThemedStyledProps<any, any> {
  numImmagini: number;
}

export const ilBody = css`
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
export const loSlider = css`
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
`;

// Per rendere dinamico il numero di immagini nell'animazione, definisco una variabile numImmagini
//  e poi la utilizzo nel calcolo della larghezza del contenitore .slide-track e nella trasformazione
//  dell'animazione.

// L'attributo width dell'elemento loSliderTrack viene impostato come calc(250px * numImmagini),
// che indica che la larghezza totale dell'elemento è pari a numImagini volte la larghezza di ogni singola
//  immagine, la cui larghezza è stata impostata a 250px. Quindi, se l'utente imposta il numero di
//   immagini da visualizzare contemporaneamente nel carousel a numImmagini, la larghezza totale dell'elemento
//   loSliderTrack sarà di 250px * numImmagini = totaleImaginipx, e l'animazione sarà configurata per scorrere questa
//   intera larghezza nel tempo specificato.

/// La durata dell'animazione ho creato una proporzione per far si che la velocità rimanesse come quando ci sono 15
/// immagini e 35s di animation-duration, per il momento ho provato e sembra funzionare se volessimo cambiare la velocità
/// è questa proporzione che va cambiata

export const loSliderTrack = css<RollingSectionAreaProps>`
  display: flex;
  width: calc(250px * ${props => props.numImmagini});

  > div {
    flex: 0 0 calc(250px * ${props => props.numImmagini});
    animation: scroll;
    animation-duration: calc((35s / 15) * ${props => props.numImmagini});
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
  }

  > div:first-child {
    transform-origin: left;
  }

  > div:last-child {
    transform-origin: right;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * ${props => props.numImmagini}));
    }
  }
`;
export const beforeSlider = css`
  left: 0;
  top: 0;
`;
export const beforeAfterSlider = css`
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
`;
export const afterSlider = css`
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
`;

export const RollingSectionArea = styled.div<RollingSectionAreaProps>`
  .ilbody {
    ${ilBody}
  }

  // Styling
  .slider {
    ${loSlider}
    &::before {
      ${beforeSlider}
    }
    &::before,
    &::after {
      ${beforeAfterSlider}
    }
    &::after {
      ${afterSlider}
    }
  }
  .slide-track {
    ${loSliderTrack}
    > div:nth-child(2) {
      animation-delay: 35s;
      transform-origin: right;
    }
  }
`;
