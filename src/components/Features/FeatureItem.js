import "./FeatureItem.scss";

import Col from "react-bootstrap/Col";

function FeatureItem({ title, description, imgUrl, index }) {
  return (
    <Col xs={12}>
      <div className="features-item d-lg-flex gap-lg-5 justify-content-lg-between align-items-lg-center">
        <div className="features-item_img">
          <img src={imgUrl} />
        </div>
        <div
          className={`${
            index % 2 !== 0 ? "order-lg-first" : ""
          } features-item_info`}
        >
          <h2 className="title-h2 h1 mb-xs text-center text-lg-start">
            {title}
          </h2>
          <p className="fs-m text-center ln-m fw-400 color-grey400 text-lg-start">
            {description}
          </p>
        </div>
      </div>
    </Col>
  );
}

export default FeatureItem;
