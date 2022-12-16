// rappresenta il paccheto con le funzioni per i test
import { testEnvironment } from "@zionstate/test";
// rappresenta il codice che stiamo testando.
// deve essere preso dall'endpoint che stiamo valutando
import { NoizContractFactory } from "../../EVM";
NoizContractFactory;

const { expect, log } = testEnvironment();
expect;
log;

// la prima funzione ci permette di creare l'intestazione dell nostro test
describe("NoizContractFactory_v1", () => {
  // questa chiamata è quella che crea il print con validazione `✔`
  it("dovrebbe stampare nella console: NoizContractFactory_v1", () => {
    expect(NoizContractFactory.name).to.be.equal(
      "NoizContractFactory_v1"
    );
  });
});
