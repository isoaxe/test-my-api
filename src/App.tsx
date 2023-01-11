import { useState } from "react";
import { Box } from "@mui/material";
import { GlobalContext } from "./util/GlobalContext";
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
  const globalContext = {
    proxyUrl,
    requestType,
    requestBody,
    setResponse,
    setResponseCode,
    setResponseCodeText,
  };

  return (
    <GlobalContext.Provider value={globalContext}>
      <Box sx={appStyle}>
        <HeadingText />
        <AboutText />
        <SampleUrls />
        <UrlSubmitter
          setResponse={setResponse}
          setResponseCode={setResponseCode}
          setResponseCodeText={setResponseCodeText}
        />
        <UrlSubmitter
          setResponse={setResponse}
          setResponseCode={setResponseCode}
          setResponseCodeText={setResponseCodeText}
        />
        <UrlSubmitter
          setResponse={setResponse}
          setResponseCode={setResponseCode}
          setResponseCodeText={setResponseCodeText}
        />
        <Box sx={selectorWrapperStyle}>
          <ProxySelector setProxyUrl={setProxyUrl} />
          <RequestBody setRequestBody={setRequestBody} />
          <RequestSelector setRequestType={setRequestType} />
        </Box>
        <ResponseAlerts
          response={response}
          setResponse={setResponse}
          responseCode={responseCode}
          setResponseCode={setResponseCode}
          responseCodeText={responseCodeText}
          setResponseCodeText={setResponseCodeText}
        />
      </Box>
    </GlobalContext.Provider>
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
