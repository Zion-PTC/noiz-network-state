import React from "react";
import styled from "styled-components";
import {
  Icon,
  NavBar,
  NavInput,
  NavInputProps,
} from "../../../HTML/React/classes";

export default function index() {
  const input1 = new NavInputProps();
  input1.inputId = "biu";
  input1.inputName = "ok";

  const input2 = new NavInputProps();
  input2.inputId = "bello";
  input2.inputName = "ok";

  const input3 = new NavInputProps();
  input3.inputId = "Arianna";
  input3.inputName = "ok";

  const input4 = new NavInputProps();
  input4.inputId = "wow";
  input4.inputName = "ok";
  let NavArea = styled.div`
    width: inherit;
  `;

  const DropDownMenu = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #38444d;
    &:li {
      float: left;
    }
  `;

  const DropDown = styled.li`
    display: inline-block;
    &:hover {
      background-color: red;
      display: block;
      div {
        display: block;
      }
    }
  `;
  const Dropbtn = styled.a`
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    &:hover {
      background-color: red;
    }
    li {
      display: inline-block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      &:hover {
        background-color: red;
      }
    }
  `;
  const DropdpwnContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  `;

  return (
    <NavArea>
      <NavBar text layout="main" style="borderOnTop">
        <NavInput {...input3} layout="icon" checked>
          <Icon arrowLeft />
        </NavInput>
        <NavInput {...input1} layout="text" />
        <NavInput {...input4} layout="icon" />
      </NavBar>
      <DropDownMenu>
        <DropDown>
          <Dropbtn>
            <Icon more_normal></Icon>
          </Dropbtn>
          <DropdpwnContent>
            <a>Il Drop</a>
            <a>Down Menu</a>
            <a>FUNZIONAAA</a>
          </DropdpwnContent>
        </DropDown>
      </DropDownMenu>
    </NavArea>
  );
}
