import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";

export const UrlSubContext = createContext<UrlSubState>({
  proxyUrl: "",
  requestType: "GET",
  requestBody: "",
  setResponse: () => <object>{}, // eslint-disable-line
  setResponseCode: () => <number>{}, // eslint-disable-line
  setResponseCodeText: () => <string>{}, // eslint-disable-line
});

interface UrlSubState {
  proxyUrl: string;
  requestType: string;
  requestBody: string;
  setResponse: Dispatch<SetStateAction<object>>;
  setResponseCode: Dispatch<SetStateAction<number>>;
  setResponseCodeText: Dispatch<SetStateAction<string>>;
}
