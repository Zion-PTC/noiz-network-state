import { Iswtch } from "..";

export const swtch4_v1: Iswtch = function (arr, opt, test) {
  if (!opt[0]) throw new Error("");
  if (!opt[1]) throw new Error("");
  if (!opt[2]) throw new Error("");
  if (!opt[3]) throw new Error("");
  switch (test) {
    case arr[0]:
      return opt[0];
    case arr[1]:
      return opt[1];
    case arr[2]:
      return opt[2];
    case arr[3]:
      return opt[3];
    default:
      return opt[0];
  }
};
