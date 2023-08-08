import "./Templates.scss";
import Container from "react-bootstrap/Container";

import templateOne from "../../assets/images/templates-1.jpg";
import templateTwo from "../../assets/images/templates-2.jpg";
import ButtonPress from "../Button/Button";

const templatesData = [templateOne, templateTwo, templateOne, templateTwo];

function Templates() {
  return (
    <section className="templates py-s">
      <Container>
        <h3 className="title-h3 mb-2">Templates</h3>
        <h2 className="title-h2 mb-s">
          Don't waste your time! choose from 100+ templates
        </h2>
        <div className="py-s">
          {templatesData.map((template, i) => (
            <div className="templates-item" key={i}>
              <img className="templates-item_img" src={template} />
            </div>
          ))}
        </div>
        <ButtonPress value={"View All Templates"} variant={"outline-primary"} />
      </Container>
    </section>
  );
}

export default Templates;
