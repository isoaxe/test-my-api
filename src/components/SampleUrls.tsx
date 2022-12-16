import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import { POSTMAN_GET, POSTMAN_POST } from "../util/urls";

function SampleUrls() {
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  // Helper function to return a URL and copy icon.
  function SingleUrl(props: any) {
    const { url } = props;

    function handleClick() {
      setShowCopyAlert(true);
      navigator.clipboard.writeText(url);
    }

    return (
      <Box sx={urlWrapper}>
        <Typography variant="body1" component="span" sx={urlStyle}>
          {url}
        </Typography>
        <ContentCopyIcon
          onClick={handleClick}
          color="primary"
          sx={copyIconStyle}
        />
      </Box>
    );
  }

  return (
    <Box sx={sampleWrapper}>
      <Typography variant="h6" component="h6" sx={headingStyle}>
        Sample API endpoints for testing
      </Typography>
      <Box sx={endpointsWrapper}>
        <SingleUrl url={POSTMAN_GET} />
        <SingleUrl url={POSTMAN_POST} />
      </Box>
      <Snackbar
        open={showCopyAlert}
        onClose={() => setShowCopyAlert(false)}
        autoHideDuration={3000}>
        <Alert severity="info" variant="outlined">
          Copied to clipboard
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default SampleUrls;

const sampleWrapper = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: "25px",
};

const headingStyle = {
  width: "100%",
};

const endpointsWrapper = {
  border: "1px solid #5b5653",
  borderRadius: "10px",
  background: "#e9e3e0",
  marginBottom: "10px",
  padding: "8px 8px 3px 8px",
  maxWidth: "280px",
};

/* Below styles are for <SingleUrl/> helper component. */

const urlStyle = {
  fontSize: "18px",
  opacity: "70%",
};

const urlWrapper = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: "5px",
};

const copyIconStyle = {
  cursor: "pointer",
};
