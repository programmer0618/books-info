import { Box, Stack } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

const EditInput = (props) => {
  const {
    label,
    type = "text",
    mb = "15px",
    state,
    setState,
    name,
    value = "",
  } = props;
  const handleChange = (e) => {
    let { name, value } = e.target;
    if (!e.target.value) {
    }
    setState({ ...state, [name]: value });
  };
  return (
    <Stack width={"100%"}>
      <label style={{ fontSize: "13px", marginBottom: "3px" }} htmlFor={label}>
        {label[0].toUpperCase() + label.slice(1)}
      </label>
      <Box display={"flex"} position={"relative"}>
        <input
          name={name}
          required
          onChange={handleChange}
          type={type}
          value={value}
          id={label}
          autoComplete="off"
          placeholder={`Enter your ${label}`}
          className="input"
          style={{
            marginBottom: mb,
          }}
        />
      </Box>
    </Stack>
  );
};

export default EditInput;
