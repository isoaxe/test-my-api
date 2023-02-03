import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";

export const UrlSubContext = createContext<UrlSubState>({
  proxyUrl: "",
  requestType: "GET",
  requestBody: "",
  spinnerOn: false,
  setResponse: () => <object>{}, // eslint-disable-line
  setResponseCode: () => <number>{}, // eslint-disable-line
  setResponseCodeText: () => <string>{}, // eslint-disable-line
  setSpinnerOn: () => <boolean>{}, // eslint-disable-line
});

interface UrlSubState {
  proxyUrl: string;
  requestType: string;
  requestBody: string;
  spinnerOn: boolean;
  setResponse: Dispatch<SetStateAction<object>>;
  setResponseCode: Dispatch<SetStateAction<number>>;
  setResponseCodeText: Dispatch<SetStateAction<string>>;
  setSpinnerOn: Dispatch<SetStateAction<boolean>>;
}
