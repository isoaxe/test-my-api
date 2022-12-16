import { ChangeEvent } from "react";
import { Radio, RadioGroup } from "@mui/material";
import { FormControlLabel, FormControl, FormLabel } from "@mui/material";

function RequestSelector(props: any) {
  const { requestType, setRequestType } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRequestType(event.target.value);
  };

  return (
    <FormControl sx={radioGroupStyle}>
      <FormLabel id="request-type-options-label">Request type</FormLabel>
      <RadioGroup
        aria-labelledby="request-type-options-label"
        name="request-type-options"
        value={requestType}
        onChange={handleChange}>
        <FormControlLabel value={"get"} control={<Radio />} label="GET" />
        <FormControlLabel value={"post"} control={<Radio />} label="POST" />
        <FormControlLabel value={"put"} control={<Radio />} label="PUT" />
      </RadioGroup>
    </FormControl>
  );
}

export default RequestSelector;

const radioGroupStyle = {
  margin: "20px",
};
