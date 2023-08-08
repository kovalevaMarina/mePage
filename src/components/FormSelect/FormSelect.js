import Form from "react-bootstrap/Form";
import "./FormSelect.scss";

function FormSelect({ arrayOptions, currencies = false }) {
  return (
    <Form.Select
      size="sm"
      aria-label="Default select example"
      className={`${currencies ? "select-currencies" : ""}`}
    >
      {arrayOptions
        .map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))
        .reverse()}
    </Form.Select>
  );
}

export default FormSelect;
