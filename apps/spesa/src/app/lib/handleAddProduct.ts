import { MouseEvent } from "react";
import { handleAddProductProps, pages } from "../page.types";
import { clone } from "./clone";

export const handleAddProduct =
  ({ spesaApp, setSpesaApp, active }: handleAddProductProps) =>
  (page: pages) =>
  (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (page === "makelist") {
      window.console.log("i am adding a product");

      let spesalist = spesaApp.lists.get(active);
      if (!spesalist) throw new Error("");

      spesalist.addProduct("some", 1);
      // @ts-expect-error
      window.spesa = spesaApp;
      if (!setSpesaApp) throw new Error("there was an error, handleAddProduct");

      setSpesaApp(clone("new", spesaApp));
    }
  };
