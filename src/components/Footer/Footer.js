import "./Footer.scss";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";
import Navigation from "../Navigation/Navigation";
import OurProducts from "../OurProducts/OurProducts";

import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/master-card.png";
import paypal from "../../assets/images/master-card.png";

import Container from "react-bootstrap/Container";

function Footer() {
  const payments = [visa, masterCard, paypal];
  return (
    <footer className="footer bg-grey-dark py-s">
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
            <Socials />
          </div>
        </div>
        <div>
          <Navigation />
        </div>
        <div className="product pb-s">
          <OurProducts />
        </div>
        <div>
          <p className="fs-s ln-2s fw-400 color-white">
            <span className="color-grey400">© 2023,</span> ME-Team
            <div>
              {payments.map((payment) => {
                return (
                  <div className="payment-item bg-grey700 d-flex justify-content-center align-items-center">
                    <img src={payment} />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center align-items-center gap-xxs">
              <p className="fs-s ln-2s fw-400 color-grey400">Made on</p>
              <Logo
                width={64}
                height={21}
                firstColor={"#ffffff"}
                secondColor={"#3A83F6"}
              />
            </div>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
