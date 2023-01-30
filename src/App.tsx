import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { UrlSubContext } from "./util/GlobalContext";
import HeadingText from "./components/HeadingText";
import AboutText from "./components/AboutText";
import SampleUrls from "./components/SampleUrls";
import UrlSubmitter from "./components/UrlSubmitter";
import ProxySelector from "./components/ProxySelector";
import RequestSelector from "./components/RequestSelector";
import RequestBody from "./components/RequestBody";
import ResponseAlerts from "./components/ResponseAlerts";

function App() {
  const [proxyUrl, setProxyUrl] = useState("");
  const [requestType, setRequestType] = useState("GET");
  const [requestBody, setRequestBody] = useState("");
  const [response, setResponse] = useState({});
  const [responseCode, setResponseCode] = useState(0);
  const [responseCodeText, setResponseCodeText] = useState("");
  const [spinnerOn, setSpinnerOn] = useState(false);
  const urlSubContext = {
    proxyUrl,
    requestType,
    requestBody,
    spinnerOn,
    setResponse,
    setResponseCode,
    setResponseCodeText,
    setSpinnerOn,
  };

  return (
    <UrlSubContext.Provider value={urlSubContext}>
      <Box sx={appStyle}>
        <HeadingText />
        <AboutText />
        <SampleUrls />
        <UrlSubmitter />
        <UrlSubmitter />
        <UrlSubmitter />
        <Box sx={selectorWrapperStyle}>
          <ProxySelector setProxyUrl={setProxyUrl} />
          <RequestBody setRequestBody={setRequestBody} />
          <RequestSelector setRequestType={setRequestType} />
        </Box>
        <ResponseAlerts
          response={response}
          responseCode={responseCode}
          responseCodeText={responseCodeText}
        />
        {spinnerOn ? <CircularProgress sx={spinnerStyle} /> : null}
      </Box>
    </UrlSubContext.Provider>
  );
}

export default App;

const appStyle = {
  margin: "auto",
  width: "95%",
  maxWidth: " 800px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const selectorWrapperStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
};

const spinnerStyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
};
