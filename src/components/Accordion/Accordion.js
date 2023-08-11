import "./Accordion.scss";
import Accordion from "react-bootstrap/Accordion";

function AccordionFaq() {
  const itemsData = [
    {
      title: "What is a ME-Page constructor?",
      text: "A ME-Page constructor is a tool that allows users to easily create and customize their own web pages without requiring any knowledge of coding.",
    },

    {
      title: "How does a ME-Page constructor work?",
      text: "A ME-Page constructor is a tool that allows users to easily create and customize their own web pages without requiring any knowledge of coding.",
    },

    {
      title: "Are there any limitations to using a ME-Page?",
      text: "A ME-Page constructor is a tool that allows users to easily create and customize their own web pages without requiring any knowledge of coding.",
    },

    {
      title: "Can ME-Page be used to create mobile-responsive websites?",
      text: "A ME-Page constructor is a tool that allows users to easily create and customize their own web pages without requiring any knowledge of coding.",
    },
  ];

  return (
    <Accordion
      defaultActiveKey="0"
      className="py-s py-lg-0 d-flex flex-column gap-3"
    >
      {itemsData.map((item, i) => {
        return (
          <Accordion.Item eventKey={i} className="rounded-0" key={i}>
            <Accordion.Header>{item.title}</Accordion.Header>
            <Accordion.Body>{item.text}</Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default AccordionFaq;
