import React from "react";
import { LinuxCommandComponent } from "../lib/style/LinuxCommand.style";
const BASH_COMMAND = "curl -L https://zion.sh | bash";
export const LinuxCommand = () => (
  <LinuxCommandComponent>
    <div id="linux-command-container">
      <div id="linux-command">{BASH_COMMAND}</div>
    </div>
  </LinuxCommandComponent>
);
