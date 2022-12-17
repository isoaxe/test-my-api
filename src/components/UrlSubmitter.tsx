import { useState, ChangeEvent, SyntheticEvent } from "react";
import { Box, TextField, Button } from "@mui/material";

function UrlSubmitter(props: any) {
  const [apiUrl, setApiUrl] = useState("");

  const { proxyUrl, requestType, requestBody, setResponse } = props;

  const fetchOptions = {
    method: requestType,
    body: requestBody,
  };

  function handleApiUrl(event: ChangeEvent<HTMLInputElement>): void {
    setApiUrl(event.currentTarget.value);
  }

  async function submitApiUrl(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      let response;
      if (requestType === "GET") {
        response = await fetch(proxyUrl + apiUrl);
      } else {
        response = await fetch(proxyUrl + apiUrl, fetchOptions);
      }
      const jsonRes = await response.json();
      setResponse(jsonRes);
      console.log(jsonRes);
    } catch (error) {
      console.log("There was an error with the HTTP request :(");
      console.error(error);
    }
  }

  return (
    <Box component="form" onSubmit={submitApiUrl} sx={wrapperStyle}>
      <TextField
        label="API Endpoint"
        value={apiUrl}
        onChange={handleApiUrl}
        sx={fieldStyle}
      />
      <Button variant="outlined" type="submit">
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
