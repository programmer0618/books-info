import { Button } from "@mui/material";

const ButtonComponent = ({ img, name, variant }) => {
  return (
    <Button
      variant={variant}
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        alignItems: "center",
        color: "black",
        textTransform: "capitalize",
        marginBottom: "10px",
      }}
    >
      <img src={img} alt={`${name}`} />
      <span>Continue with {name}</span>
    </Button>
  );
};

export default ButtonComponent;
