import "./Competitors.scss";
import ButtonPress from "../Button/Button";
import CompetitorsCard from "./CompetitorsCard";

import Container from "react-bootstrap/Container";

function Competitors() {
  return (
    <section className="competitors pb-s pb-lg-5">
      <Container>
        <h3 className="title-h3 mb-2 text-uppercase text-center">
          Competitors
        </h3>
        <h2 className="title-h2 h1 text-center">Why ME Page?</h2>
        <CompetitorsCard />
        <p className="competitors-text fs-s fw-400 ln-2s color-grey400 text-center my-s">
          As seen in the competition, ME Page offers several features that are
          comparable to other web-constructors, customizable templates & blocks,
          ability to share project for view or edit, ability to edit HTML and
          CSS code directly and its 24/7 live chat and email customer support.
        </p>
        <ButtonPress variant={"primary"} value={"Get Started"} />
      </Container>
    </section>
  );
}

export default Competitors;
