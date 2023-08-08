import "./Faq.scss";
import faqImg from "../../assets/images/faq-img.png";
import AccordionFaq from "../Accordion/Accordion";

import Container from "react-bootstrap/Container";

function Faq() {
  return (
    <section className="faq py-s">
      <Container>
        <h3 className="title-h3 mb-2">Faq</h3>
        <h2 className="title-h2 mb-s">All of Your Questions Answered Here</h2>
        <div>
          <div className="faq-img">
            <img src={faqImg} />
          </div>
          <AccordionFaq />
        </div>
      </Container>
    </section>
  );
}

export default Faq;
