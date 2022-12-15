import { useState } from "react";
import UrlSubmitter from "./components/UrlSubmitter";
import ProxySelector from "./components/ProxySelector";
import HeadingText from "./components/HeadingText";
import "./App.css";

function App() {
  const [proxyUrl, setProxyUrl] = useState("");

  return (
    <div className="App">
      <HeadingText />
      <UrlSubmitter proxyUrl={proxyUrl} />
      <ProxySelector proxyUrl={proxyUrl} setProxyUrl={setProxyUrl} />
    </div>
  );
}

export default App;
