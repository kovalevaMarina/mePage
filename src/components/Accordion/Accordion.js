import "./Accordion.scss";
import Accordion from "react-bootstrap/Accordion";

function AccordionFaq() {
  // TODO: space between item (doesn't appear border to)
  // TODO: delete styles for states items
  // TODO create structure data
  return (
    <Accordion
      defaultActiveKey="0"
      className="py-s py-lg-0 d-flex flex-column gap-3"
    >
      <Accordion.Item eventKey="0" className="rounded-0">
        <Accordion.Header>What is a ME-Page constructor?</Accordion.Header>
        <Accordion.Body>
          A ME-Page constructor is a tool that allows users to easily create and
          customize their own web pages without requiring any knowledge of
          coding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="rounded-0">
        <Accordion.Header>
          How does a ME-Page constructor work?
        </Accordion.Header>
        <Accordion.Body>
          A ME-Page constructor is a tool that allows users to easily create and
          customize their own web pages without requiring any knowledge of
          coding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className="rounded-0">
        <Accordion.Header>
          Are there any limitations to using a ME-Page?
        </Accordion.Header>
        <Accordion.Body>
          A ME-Page constructor is a tool that allows users to easily create and
          customize their own web pages without requiring any knowledge of
          coding.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className="rounded-0">
        <Accordion.Header>
          Can ME-Page be used to create mobile-responsive websites?
        </Accordion.Header>
        <Accordion.Body>
          A ME-Page constructor is a tool that allows users to easily create and
          customize their own web pages without requiring any knowledge of
          coding.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionFaq;
