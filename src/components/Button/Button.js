import Button from "react-bootstrap/Button";

function ButtonPress({ variant, value }) {
  return (
    <Button variant={variant} className="fs-m fm-roboto ln-m fw-700 py-xs">
      {value}
    </Button>
  );
}

export default ButtonPress;
