import { useState, useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";

function ResponseAlerts(props: any) {
  const [showResponse, setShowResponse] = useState(false);

  const { response } = props;
  const vertical = "top";
  const horizontal = "center";

  useEffect(() => {
    if (Object.keys(response).length) {
      setShowResponse(true);
    }
  }, [response]);

  return (
    <Snackbar
      open={showResponse}
      onClose={() => setShowResponse(false)}
      anchorOrigin={{ vertical, horizontal }}>
      <Alert severity="info" variant="filled">
        {JSON.stringify(response)}
      </Alert>
    </Snackbar>
  );
}

export default ResponseAlerts;
