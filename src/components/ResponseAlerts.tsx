import { useState, useEffect, useRef } from "react";
import { Snackbar, Alert, AlertTitle, AlertColor } from "@mui/material";

function ResponseAlerts(props: any) {
  const [showResponse, setShowResponse] = useState(false);
  const alertStatus = useRef<AlertColor>("info");

  const { response, responseCode } = props;
  const vertical = "top";
  const horizontal = "center";

  useEffect(() => {
    if (Object.keys(response).length) {
      setShowResponse(true);
    }
  }, [response]);

  useEffect(() => {
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
      onClose={() => setShowResponse(false)}
      anchorOrigin={{ vertical, horizontal }}>
      <Alert severity={alertStatus.current} variant="filled" sx={alertStyle}>
        {responseCode && <AlertTitle>Status: {responseCode}</AlertTitle>}
        {JSON.stringify(response, null, 4)}
      </Alert>
    </Snackbar>
  );
}

export default ResponseAlerts;

const alertStyle = {
  whiteSpace: "pre",
};
