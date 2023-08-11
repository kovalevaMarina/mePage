import "./Footer.scss";
import Logo from "../Logo/Logo";
import Socials from "../Socials/Socials";
import Navigation from "../Navigation/Navigation";
import OurProducts from "../OurProducts/OurProducts";

import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/master-card.png";
import paypal from "../../assets/images/paypal.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const payments = [visa, masterCard, paypal];

  return (
    <footer className="footer bg-grey-dark py-s py-md-5">
      <Container>
        <Row>
          <Col xs={12} md={5}>
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
            <div className="d-flex gap-3">
              <Socials />
            </div>
          </Col>
          <Col xs={12} md={7}>
            <div className="d-flex justify-content-between flex-wrap gap-3 my-5 my-md-0">
              <Navigation />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="product pb-s d-flex flex-wrap gap-3 justify-content-center justify-content-lg-between  align-items-center pt-5">
              <OurProducts />
            </div>
          </Col>
          <Col xs={12}>
            <div className="d-flex justify-content-between py-4">
              <p className="fs-s ln-2s fw-400 color-white">
                <span className="color-grey400">© 2023,</span> ME-Team
              </p>
              <div className="d-flex gap-2">
                {payments.map((payment) => {
                  return (
                    <div className="payment-item bg-grey700 d-flex justify-content-center align-items-center">
                      <img src={payment} alt="Payment systems" />
                    </div>
                  );
                })}
              </div>
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
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
