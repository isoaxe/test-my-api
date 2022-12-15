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
  marginBottom: "20px",
};
