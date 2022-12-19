import { useState, useEffect, useRef } from "react";
import { Snackbar, Alert, AlertTitle, AlertColor } from "@mui/material";

function ResponseAlerts(props: any) {
  const [showResponse, setShowResponse] = useState(false);
  const alertStatus = useRef<AlertColor>("info");

  const { response, setResponse, responseCode, setResponseCode } = props;
  const { responseCodeText, setResponseCodeText } = props;
  const vertical = "top";
  const horizontal = "center";

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
    if (codeCategory === 2) {
      alertStatus.current = "success"; // HTTP code 200 range
    } else if (codeCategory === 4) {
      alertStatus.current = "warning"; // HTTP code 400 range
    } else if (codeCategory === 5) {
      alertStatus.current = "error"; // HTTP code 500 range
    } else {
      alertStatus.current = "info";
    }
  }, [responseCode]);

  return (
    <Snackbar
      open={showResponse}
      onClose={handleClose}
      anchorOrigin={{ vertical, horizontal }}>
      <Alert severity={alertStatus.current} variant="filled" sx={alertStyle}>
        {responseCode && (
          <AlertTitle>
            Status: {responseCode} {responseCodeText}
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
