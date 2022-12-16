import { useState } from "react";
import { Box } from "@mui/material";
import HeadingText from "./components/HeadingText";
import AboutText from "./components/AboutText";
import SampleUrls from "./components/SampleUrls";
import UrlSubmitter from "./components/UrlSubmitter";
import ProxySelector from "./components/ProxySelector";
import RequestSelector from "./components/RequestSelector";
import RequestBody from "./components/RequestBody";

function App() {
  const [proxyUrl, setProxyUrl] = useState("");
  const [requestType, setRequestType] = useState("get");
  const [requestBody, setRequestBody] = useState("");

  return (
    <Box sx={appStyle}>
      <HeadingText />
      <AboutText />
      <SampleUrls />
      <UrlSubmitter proxyUrl={proxyUrl} />
      <UrlSubmitter proxyUrl={proxyUrl} />
      <UrlSubmitter proxyUrl={proxyUrl} />
      <Box sx={selectorWrapperStyle}>
        <ProxySelector proxyUrl={proxyUrl} setProxyUrl={setProxyUrl} />
        <RequestBody
          requestBody={requestBody}
          setRequestBody={setRequestBody}
          requestType={requestType}
        />
        <RequestSelector
          requestType={requestType}
          setRequestType={setRequestType}
        />
      </Box>
    </Box>
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
