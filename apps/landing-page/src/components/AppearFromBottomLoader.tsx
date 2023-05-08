import { ReactNode } from "react";
import {
  textBigSubStateA,
  textBigSubStateB,
} from "../lib/style/TextBigSub.style";
import { Loader } from "../lib/client/Loader";

export const AppearFromBottomLoader = ({
  children,
  triggerKey,
}: {
  children?: ReactNode;
  triggerKey: string;
}) => (
  <Loader
    stateB={textBigSubStateB}
    stateA={textBigSubStateA}
    triggerKey={triggerKey}
    threshold={1}
  >
    {children}
  </Loader>
);
