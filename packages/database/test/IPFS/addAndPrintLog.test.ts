// rappresenta il paccheto con le funzioni per i test
import { testEnvironment } from "@zionstate/test";
// rappresenta il codice che stiamo testando.
// deve essere preso dall'endpoint che stiamo valutando
import { addAndPrintLog } from "../../IPFS";

const { expect, log } = testEnvironment();
expect;
log;
addAndPrintLog;
log("prova");
