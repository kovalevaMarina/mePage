import "./OurProducts.scss";

import meTicket from "../../assets/images/me-ticket.png";
import meQa from "../../assets/images/me-qa.png";
import meReview from "../../assets/images/me-peview.png";
import meBooking from "../../assets/images/me-booking.png";
import meAds from "../../assets/images/me-ads.png";
import meCity from "../../assets/images/me-city.png";
import mePromo from "../../assets/images/me-promo.png";

function OurProducts() {
  const allProducts = [
    {
      imgUrl: meTicket,
      productName: "meTicket",
    },

    {
      imgUrl: meQa,
      productName: "meQa",
    },

    {
      imgUrl: meReview,
      productName: "meReview",
    },

    {
      imgUrl: meBooking,
      productName: "meBooking",
    },

    {
      imgUrl: meAds,
      productName: "meAds",
    },

    {
      imgUrl: meCity,
      productName: "meCity",
    },

    {
      imgUrl: mePromo,
      productName: "mePromo",
    },
  ];
  return (
    <>
      {allProducts.map((product, i) => (
        <div className="product-item" key={i}>
          <img
            className="product-item_img"
            src={product.imgUrl}
            alt={`Icon ${product.productName}`}
          />
        </div>
      ))}
    </>
  );
}

export default OurProducts;
