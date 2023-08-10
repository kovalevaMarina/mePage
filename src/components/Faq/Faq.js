import "./Faq.scss";
import faqImg from "../../assets/images/faq-img.png";
import AccordionFaq from "../Accordion/Accordion";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Faq() {
  return (
    <section className="faq py-s py-lg-5">
      <Container>
        <h3 className="title-h3 mb-2 text-uppercase text-center">Faq</h3>
        <h2 className="title-h2 h1 mb-s text-center">
          All of Your Questions Answered Here
        </h2>
        <p className="mx-auto fs-1m ln-xl text-center color-grey400 d-none d-lg-block">
          Everything You Need to Know About Using ME-Page Constructor for Your
          Website.
        </p>
        <Row className="d-flex flex-column justify-content-between align-items-center flex-lg-row-reverse pt-lg-5 gap-3">
          <Col>
            <div className="faq-img">
              <img src={faqImg} />
            </div>
          </Col>
          <Col>
            <AccordionFaq />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Faq;
