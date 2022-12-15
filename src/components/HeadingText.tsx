import { Typography } from "@mui/material";

function HeadingText() {
  return (
    <Typography variant="h4" component="h4" sx={headingStyle}>
      API endpoint testing utility
    </Typography>
  );
}

export default HeadingText;

const headingStyle = {
  textAlign: "center",
  width: "100%",
  marginBottom: "20px",
};
