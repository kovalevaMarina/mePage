import "./Templates.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import templateOne from "../../assets/images/templates-1.jpg";
import templateTwo from "../../assets/images/templates-2.jpg";
import ButtonPress from "../Button/Button";

const templatesData = [
  templateOne,
  templateTwo,
  templateOne,
  templateTwo,
  templateOne,
  templateTwo,
];

function Templates() {
  return (
    <section className="templates py-s py-lg-5">
      <Container>
        <h3 className="title-h3 mb-2 text-uppercase text-center">Templates</h3>
        <h2 className="title-h2 h1 mb-0 text-center">
          Don't waste your time! choose from 100+ templates
        </h2>
        <Row className="py-s py-lg-5 justify-content-center gap-3">
          {templatesData.map((template, i) => (
            <Col xs={12} md={5} xxl={3}>
              <div className="templates-item" key={i}>
                <img className="templates-item_img" src={template} />
              </div>
            </Col>
          ))}
        </Row>
        <ButtonPress value={"View All Templates"} variant={"outline-primary"} />
      </Container>
    </section>
  );
}

export default Templates;
