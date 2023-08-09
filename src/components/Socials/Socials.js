import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

function Socials() {
  const socials = [instagram, facebook, twitter];

  return socials.map((social, i) => {
    return (
      <div key={i}>
        <img src={social} />
      </div>
    );
  });
}

export default Socials;
