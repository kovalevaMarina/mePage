import Button from "react-bootstrap/Button";

function ButtonPress({ variantClass }) {
  return (
    <Button variant={variantClass} className="fs-m fm-roboto ln-m fw-700 py-xs">
      Get Started
    </Button>
  );
}

export default ButtonPress;
