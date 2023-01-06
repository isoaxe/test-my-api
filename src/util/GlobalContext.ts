import { createContext } from "react";

export const GlobalContext = createContext({
  proxyUrl: "",
  requestType: "GET",
  requestBody: "",
});
