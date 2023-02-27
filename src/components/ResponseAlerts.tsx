import { useState, useEffect, useContext } from "react";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import { UrlSubContext } from "../util/GlobalContext";

function ResponseAlerts(props: any) {
  const [showResponse, setShowResponse] = useState(false);
  const [alertStatus, setAlertStatus] = useState<any>("info");

  const { response, responseCode, responseCodeText } = props;
  const { setResponse, setResponseCode, setResponseCodeText } =
    useContext(UrlSubContext);

  const vertical = "top";
  const horizontal = "center";
  const code = responseCode === 550 ? "" : responseCode;

  // Reset all state on close.
  function handleClose() {
    setShowResponse(false);
    setResponse({});
    setResponseCode(0);
    setResponseCodeText("");
  }

  useEffect(() => {
    if (responseCode) {
      setShowResponse(true);
    }

    const codeCategory = Math.floor(responseCode / 100);
    if (codeCategory === 2) setAlertStatus("success"); // HTTP code 200 range
    else if (codeCategory === 4) setAlertStatus("warning"); // 400 range
    else if (codeCategory === 5) setAlertStatus("error"); // 500 range
    else setAlertStatus("info");
  }, [responseCode]);

  return (
    <Snackbar
      open={showResponse}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}>
      <Alert severity={alertStatus} variant="filled" sx={alertStyle}>
        {responseCode && (
          <AlertTitle>
            Status: {code} {responseCodeText}
          </AlertTitle>
        )}
        {
          // If response not empty then display contents. Else display text.
          Object.keys(response).length
            ? JSON.stringify(response, null, 4)
            : "Check the browser console for more info"
        }
      </Alert>
    </Snackbar>
  );
}

export default ResponseAlerts;

const alertStyle = {
  whiteSpace: "pre",
};
