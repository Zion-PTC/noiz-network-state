import React from "react";
import { AppearFromBottomLoader } from "../components/AppearFromBottomLoader";

export function TextBigSub() {
  const B_HEAD_TEXT_FIRST_LINE = "Welcome to the new";
  const B_HEAD_TEXT_SECOND_LINE = "Era of internet.";
  const SUB_HEAD_TEXT_MAIN = "One that's powered by you.";

  return (
    <>
      <AppearFromBottomLoader triggerKey="#big-heading">
        <h2 id="big-heading">
          {B_HEAD_TEXT_FIRST_LINE}{" "}
          <span id="text-span-"> {B_HEAD_TEXT_SECOND_LINE} </span>
        </h2>
      </AppearFromBottomLoader>
      <AppearFromBottomLoader triggerKey="#SubsHeading">
        <h3 id="SubsHeading">
          {SUB_HEAD_TEXT_MAIN}
          <span id="text-span-"></span>
        </h3>
      </AppearFromBottomLoader>
    </>
  );
}
