import "./Results.scss";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import layoutText from "../../assets/icons/layout-text.svg";
import collection from "../../assets/icons/collection.svg";
import file from "../../assets/icons/file.svg";
import people from "../../assets/icons/people.svg";

function Results() {
  const resultsData = [
    { icon: layoutText, number: "567+", text: "Template Blocks" },
    { icon: collection, number: "45+", text: "Templates" },
    { icon: file, number: "323+", text: "Pages Created" },
    { icon: people, number: "187+", text: "Happy Clients" },
  ];

  return (
    <Row className="results gap-3 justify-content-center py-5">
      {resultsData.map((result) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="results_item p-s d-flex gap-s align-items-center"
        >
          <div className="results_item-img d-flex justify-content-center align-items-center">
            <img src={result.icon} alt={`Icon for ${result.text}`} />
          </div>
          <div className="results_item-info">
            <span className="fs-2xl fw-700 text-capitalize ln-xxl">
              {result.number}
            </span>
            <p className="fs-1m ln-xl fw-400 color-grey400">{result.text}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Results;
