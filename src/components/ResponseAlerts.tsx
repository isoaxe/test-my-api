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
      <Alert severity="info" variant="filled" sx={alertStyle}>
        {JSON.stringify(response, null, 4)}
      </Alert>
    </Snackbar>
  );
}

export default ResponseAlerts;

const alertStyle = {
  whiteSpace: "pre",
};
