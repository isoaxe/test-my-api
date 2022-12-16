import { ChangeEvent } from "react";
import { TextField } from "@mui/material";

function RequestBody(props: any) {
  const { requestBody, setRequestBody } = props;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setRequestBody(event.target.value);
  }

  return (
    <TextField
      label="Enter request body"
      value={requestBody}
      onChange={handleChange}
      multiline
      minRows={6}
      sx={requestBodyStyle}
    />
  );
}

export default RequestBody;

const requestBodyStyle = {
  width: "100%",
  maxWidth: "480px",
};
