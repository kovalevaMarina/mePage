import "./Plans.scss";

import Container from "react-bootstrap/Container";

import FormSelect from "../FormSelect/FormSelect";
import Results from "../Pesults/Results";
import PlansCard from "./PlansCard";

function Plans() {
  const currencies = ["GBP", "EUR", "USD"];

  return (
    <section className="plans py-s">
      <Container>
        <h3 className="title-h3 mb-2 text-center text-uppercase">Plans</h3>
        <h2 className="title-h2 fs-1 mb-s text-center">
          Pick the Best Plan for You
        </h2>
        <FormSelect arrayOptions={currencies} currencies={true} />
        <PlansCard />
        <Results />
      </Container>
    </section>
  );
}

export default Plans;
