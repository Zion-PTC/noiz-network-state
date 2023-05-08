import { NextApiRequest, NextApiResponse } from "next";
const firstLineTitle = "Goodbye, big tech.";
const secondLineFirstWordTitle = "Welcome,";
const secondLineAllTitle = "your data at your own home.";
const paragraphHeaderFirst =
  "Zion is an OS for running a personal mini computer in your home. Self-host open source apps Bitcoin node, and more.";
const paragraphHeaderSecond =
  "Get the convenience of cloud, without giving up your data.";
const buttonTxt = "INSTALL ON MINI PC";
const paragraphHeaderLast = "Or install on any Ubuntu or Debian system:";

export type dataHeaderTexts = {
  firstLineTitle: string;
  secondLineFirstWordTitle: string;
  secondLineAllTitle: string;
  paragraphHeader: { First: string; Second: string; Last: string };
  buttonTxt: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<dataHeaderTexts>
) {
  res.status(200).json({
    firstLineTitle,
    secondLineFirstWordTitle,
    secondLineAllTitle,
    buttonTxt,
    paragraphHeader: {
      First: paragraphHeaderFirst,
      Second: paragraphHeaderSecond,
      Last: paragraphHeaderLast,
    },
  });
}
