import { useState } from "react";
import { Box } from "@mui/material";
import UrlSubmitter from "./components/UrlSubmitter";
import ProxySelector from "./components/ProxySelector";
import HeadingText from "./components/HeadingText";
import AboutText from "./components/AboutText";
import SampleUrls from "./components/SampleUrls";

function App() {
  const [proxyUrl, setProxyUrl] = useState("");

  return (
    <Box sx={appStyle}>
      <HeadingText />
      <AboutText />
      <SampleUrls />
      <UrlSubmitter proxyUrl={proxyUrl} />
      <UrlSubmitter proxyUrl={proxyUrl} />
      <UrlSubmitter proxyUrl={proxyUrl} />
      <ProxySelector proxyUrl={proxyUrl} setProxyUrl={setProxyUrl} />
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
