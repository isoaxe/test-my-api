import { useContext, ChangeEvent } from "react";
import { Radio, RadioGroup } from "@mui/material";
import { FormControlLabel, FormControl, FormLabel } from "@mui/material";
import { FIREBASE_PROXY, FLY_PROXY } from "../util/urls";
import { UrlSubContext } from "../util/GlobalContext";

function ProxySelector(props: any) {
  const { setProxyUrl } = props;
  const { proxyUrl } = useContext(UrlSubContext);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setProxyUrl(event.target.value);
  }

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
        <FormControlLabel
          value={FLY_PROXY}
          control={<Radio />}
          label="Fly.io"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default ProxySelector;

const radioGroupStyle = {
  margin: "20px",
  minWidth: "100px",
};
