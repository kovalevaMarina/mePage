import "./Hero.scss";
import mainImgMob from "../../assets/images/main-img-mob.png";
import ButtonPress from "../Button/Button";
import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <section className="hero pt-s pt-lg-5 mb-l">
      <Container>
        <div className="d-flex flex-column flex-lg-column-reverse gap-lg-5">
          <div className="hero-img mb-l">
            {/* TODO add another img in lg, how? */}
            <img src={mainImgMob} alt="Screen picture" />
          </div>
          <div>
            <h1 className="display-5 fw-700 text-center color-grey700">
              Flexible Constructor for Creating
            </h1>
            <div className="text-center color-blue display-5 fm-arial fw-700">
              Perfect Websites
            </div>
            <p className="hero-text mx-auto mb-0 pt-xs pb-l color-grey400 h6 ln-m text-center">
              Build a website that fits your needs, not the other way around
              with our flexible website constructor ME-Page!
            </p>
            <ButtonPress variant={"primary"} value={"Get Started"} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
