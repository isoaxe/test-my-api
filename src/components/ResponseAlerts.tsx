import { useState } from "react";
import { Snackbar, Alert } from "@mui/material";

function ResponseAlerts() {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <Snackbar open={showResponse} onClose={() => setShowResponse(false)}>
      <Alert severity="info" variant="outlined">
        Placeholder Text
      </Alert>
    </Snackbar>
  );
}

export default ResponseAlerts;
