import "./Footer.scss";
import Logo from "../Logo/Logo";

import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";

import Container from "react-bootstrap/Container";

const socials = [instagram, facebook, twitter];

function Footer() {
  return (
    <footer className="footer bg-grey700 py-s">
      <Container>
        <div>
          <div>
            <Logo
              width={121}
              height={40}
              firstColor={"#ffffff"}
              secondColor={"#3A83F6"}
            />
          </div>
          <p className="fs-m ln-m fw-400 color-grey400 my-s">
            Whether you need a website for a small business, personal blog, or
            online portfolio, a flexible website constructor empowers you to
            create a website that stands out and reflects your unique brand or
            personality.
          </p>
          <div>
            {socials.map((social, i) => {
              return (
                <div key={i}>
                  <img src={social} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>
            <p>Quick Links</p>
            <ul>
              <li>Benefits</li>
            </ul>
          </div>
        </div>
        <div></div>
      </Container>
    </footer>
  );
}

export default Footer;
