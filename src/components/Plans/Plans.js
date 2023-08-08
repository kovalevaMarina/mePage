import Container from "react-bootstrap/Container";

import FormSelect from "../FormSelect/FormSelect";
import Results from "../Pesults/Results";

const currencies = ["GBP", "EUR", "USD"];

function Plans() {
  return (
    <section className="plans py-s">
      <Container>
        <h3 className="title-h3 mb-2">Plans</h3>
        <h2 className="title-h2 mb-s">Pick the Best Plan for You</h2>
        <FormSelect arrayOptions={currencies} currencies={true} />
        <Results />
      </Container>
    </section>
  );
}

export default Plans;