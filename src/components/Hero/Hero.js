import "./Hero.scss";
import mainImgMob from "../../assets/images/main-img-mob.png";
import line from "../../assets/images/line.svg";
import ButtonPress from "../Button/Button";
import Container from "react-bootstrap/Container";

function Hero() {
  return (
    <section className="hero pt-m mb-l">
      <Container>
        <img src={mainImgMob} />
        <h1 className="fs-xl fw-700 text-center color-grey700">
          Flexible Constructor for Creating
        </h1>
        <div className="text-center color-blue fs-xl fm-arial fw-700">
          Perfect Websites
        </div>
        <p className="hero-text mx-auto pt-xs pb-l color-grey400 fs-m ln-m text-center">
          Build a website that fits your needs, not the other way around with
          our flexible website constructor ME-Page!
        </p>
        <ButtonPress variant={"primary"} value={"Get Started"} />
      </Container>
    </section>
  );
}

export default Hero;
