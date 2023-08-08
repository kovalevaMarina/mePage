import "./Results.scss";

import layoutText from "../../assets/icons/layout-text.svg";
import collection from "../../assets/icons/collection.svg";
import file from "../../assets/icons/file.svg";
import people from "../../assets/icons/people.svg";

const resultsData = [
  { icon: layoutText, number: "567+", text: "Template Blocks" },
  { icon: collection, number: "45+", text: "Templates" },
  { icon: file, number: "323+", text: "Pages Created" },
  { icon: people, number: "187+", text: "Happy Clients" },
];

function Results() {
  return (
    <div className="results">
      {resultsData.map((result) => (
        <div
          className="results_item p-s d-flex gap-s align-items-center"
          key={result.text}
        >
          <div className="results_item-img d-flex justify-content-center align-items-center">
            <img src={result.icon} />
          </div>
          <div className="results_item-info">
            <span className="fs-2xl fw-700 text-capitalize ln-xxl">
              {result.number}
            </span>
            <p className="fs-1m ln-xl fw-400 color-grey400">{result.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Results;
