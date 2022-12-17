import { testEnvironment } from "@zionstate/test";
import { ZionIpfs } from "../../../../src/IPFS";

const { expect, log } = testEnvironment();
expect;
log;

describe("if ZionIpfs function is correctly exported", () => {
  const regex = /ZionIpfs/g;
  const name = ZionIpfs.name;
  const res = regex.test(name);
  it("shall confirm the existance of a function named ZionIpfs", () => {
    expect(res).to.be.true;
  });
});
