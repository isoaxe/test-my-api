import { useState, ChangeEvent, SyntheticEvent } from "react";
import { Box, TextField, Button } from "@mui/material";

function UrlSubmitter(props: any) {
  const [apiUrl, setApiUrl] = useState("");

  const { proxyUrl, requestType, requestBody } = props;
  const { setResponse, setResponseCode } = props;

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
      let res;
      if (requestType === "GET") {
        res = await fetch(proxyUrl + apiUrl);
      } else {
        res = await fetch(proxyUrl + apiUrl, fetchOptions);
      }
      setResponseCode(res.status);
      if (res.status === 200) {
        const jsonRes = await res.json();
        setResponse(jsonRes);
        console.log(jsonRes);
      } else {
        setResponse({});
      }
    } catch (error) {
      console.log(error);
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
