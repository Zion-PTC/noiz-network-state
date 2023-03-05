import styled from "styled-components";

export const SliderInfineClickArea = styled.div`
  .sliderObserver {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #222;
    overflow: hidden;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      color: #fff;
      display: flex;
      width: 100%;
      transform: translateX(0);
    }

    ul li {
      width: 33.333%;
      flex-shrink: 0;
      background-color: #795548;
      border: 1px solid #eee;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
