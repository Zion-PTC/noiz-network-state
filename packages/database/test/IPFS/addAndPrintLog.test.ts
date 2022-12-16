import { testEnvironment } from "@zionstate/test";
import { addAndPrintLog } from "../../src/IPFS";

const { expect, log } = testEnvironment();
expect;
log;

describe("addAndPrintLog function is correctly exported", () => {
  const regex = /addAndPrintLog/g;
  const name = addAndPrintLog.name;
  const res = regex.test(name);
  expect(res).to.be.true;
});
