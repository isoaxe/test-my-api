import { useState, useContext, ChangeEvent, SyntheticEvent } from "react";
import { Box, TextField, Button } from "@mui/material";
import { UrlSubContext } from "../util/GlobalContext";

function UrlSubmitter() {
  const [apiUrl, setApiUrl] = useState("");

  const {
    proxyUrl,
    requestType,
    requestBody,
    spinnerOn,
    setResponse,
    setResponseCode,
    setResponseCodeText,
    setSpinnerOn,
  } = useContext(UrlSubContext);

  const fetchOptions = {
    method: requestType,
    body: requestBody,
  };

  function handleApiUrl(event: ChangeEvent<HTMLInputElement>): void {
    setApiUrl(event.currentTarget.value);
  }

  async function submitApiUrl(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setSpinnerOn(true);
    try {
      let res;
      if (requestType === "GET") res = await fetch(proxyUrl + apiUrl);
      else res = await fetch(proxyUrl + apiUrl, fetchOptions);
      setResponseCode(res.status);
      setResponseCodeText(res.statusText);
      if (res.status === 200) {
        const jsonRes = await res.json();
        setResponse(jsonRes);
        console.log(jsonRes);
      }
    } catch (error: any) {
      setResponseCode(550);
      if (error.toString().includes("SyntaxError"))
        setResponseCodeText("JSON not returned from server");
      else setResponseCodeText("Unknown Server Error");
      console.log(error);
    }
    setSpinnerOn(false);
  }

  return (
    <Box component="form" onSubmit={submitApiUrl} sx={wrapperStyle}>
      <TextField
        label="API Endpoint"
        value={apiUrl}
        onChange={handleApiUrl}
        sx={fieldStyle}
      />
      <Button variant="outlined" type="submit" disabled={spinnerOn}>
        Run
      </Button>
    </Box>
  );
}

export default UrlSubmitter;

const wrapperStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  marginBottom: "15px",
};

const fieldStyle = {
  width: "calc(100% - 100px)",
};
