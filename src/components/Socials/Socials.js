import "./Social.scss";

import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

function Socials() {
  const socials = [
    {
      urlImg: instagram,
      text: "instagram",
    },

    {
      urlImg: facebook,
      text: "facebook",
    },

    {
      urlImg: twitter,
      text: "twitter",
    },
  ];

  return socials.map((social, i) => {
    return (
      <div className="social-item" key={i}>
        <img
          className="social-item_img"
          src={social.urlImg}
          alt={`Icon ${social.text}`}
        />
      </div>
    );
  });
}

export default Socials;
