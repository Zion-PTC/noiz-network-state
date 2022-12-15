import { testEnvironment } from "@zionstate/test";
import { staticImplements } from "../../../zionbase";

const { expect, log } = testEnvironment();
expect;
log;

describe("Nome della funzione", () => {
  it("dovrebbe ritornare il valore del nome corrispondente alla funzione", () => {
    expect(staticImplements.name).to.be.equal(
      "staticImplements_v1"
    );
  });
});
