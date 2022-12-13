import { ChangeEvent } from "react";
import { Radio, RadioGroup } from "@mui/material";
import { FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { FIREBASE_PROXY } from "../util/urls";

function ProxySelector(props: any) {
  const { proxyUrl, setProxyUrl } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProxyUrl(event.target.value);
  };

  return (
    <FormControl sx={radioGroupStyle}>
      <FormLabel id="cors-proxy-options-label">CORS proxy</FormLabel>
      <RadioGroup
        aria-labelledby="cors-proxy-options-label"
        name="cors-proxy-options"
        value={proxyUrl}
        onChange={handleChange}>
        <FormControlLabel value="" control={<Radio />} label="None" />
        <FormControlLabel
          value={FIREBASE_PROXY}
          control={<Radio />}
          label="Firebase"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default ProxySelector;

const radioGroupStyle = {
  margin: "20px",
};