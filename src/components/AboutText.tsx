import { Typography } from "@mui/material";

function AboutText() {
  return (
    <div style={aboutTextWrapper}>
      <Typography variant="body1" component="p" sx={textStyle}>
        This app can be used to send a HTTP request to an API endpoint. Simply
        enter the endpoint URL in one of the fields below and hit the RUN
        button. The request can also be run with a cors-server in order to test
        your request in a remote hosted environment before setting up your own
        server.
      </Typography>
      <Typography variant="body1" component="p" sx={textStyle}>
        Currently can only send a GET request to your server. Results are logged
        in the browser console for now. Any comments or feature requests, let me
        know in the contact form on my{" "}
        <a href="https://www.lucasoconnell.net" target="_blank">
          website
        </a>
        .
      </Typography>
    </div>
  );
}

export default AboutText;

const aboutTextWrapper = {
  width: "70%",
};

const textStyle = {
  fontSize: "18px",
  marginBottom: "25px",
  opacity: "70%",
};
