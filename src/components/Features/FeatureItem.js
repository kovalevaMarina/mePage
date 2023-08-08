import "./FeatureItem.scss";

function FeatureItem({ title, description, imgUrl }) {
  return (
    <div className="features-item">
      <div className="features-item_img">
        <img src={imgUrl} />
      </div>
      <div>
        <h2 className="title-h2 mb-xs">{title}</h2>
        <p className="fs-m text-center ln-m fw-400 color-grey400">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;
