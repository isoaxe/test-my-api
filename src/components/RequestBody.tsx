import { useContext, ChangeEvent } from "react";
import { TextField } from "@mui/material";
import { UrlSubContext } from "../util/GlobalContext";

function RequestBody(props: any) {
  const { setRequestBody } = props;
  const { requestBody, requestType } = useContext(UrlSubContext);

  const isGetRequest = requestType === "GET";
  const getPlaceholder = "A GET request does not have a body";

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setRequestBody(event.target.value);
  }

  return (
    <TextField
      label={isGetRequest ? getPlaceholder : "Request body"}
      value={requestBody}
      onChange={handleChange}
      disabled={isGetRequest}
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
