import { useContext, ChangeEvent } from "react";
import { Radio, RadioGroup } from "@mui/material";
import { FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { GlobalContext } from "../util/GlobalContext";

function RequestSelector(props: any) {
  const { setRequestType } = props;
  const { requestType } = useContext(GlobalContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setRequestType(event.target.value);
  }

  return (
    <FormControl sx={radioGroupStyle}>
      <FormLabel id="request-type-options-label">Request type</FormLabel>
      <RadioGroup
        aria-labelledby="request-type-options-label"
        name="request-type-options"
        value={requestType}
        onChange={handleChange}>
        <FormControlLabel value={"GET"} control={<Radio />} label="GET" />
        <FormControlLabel value={"POST"} control={<Radio />} label="POST" />
        <FormControlLabel value={"PUT"} control={<Radio />} label="PUT" />
      </RadioGroup>
    </FormControl>
  );
}

export default RequestSelector;

const radioGroupStyle = {
  margin: "20px",
  minWidth: "100px",
};
