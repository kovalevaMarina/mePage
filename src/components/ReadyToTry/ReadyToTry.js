import "./ReadyToTry.scss";
import Container from "react-bootstrap/Container";

import Logo from "../Logo/Logo";
import ButtonPress from "../Button/Button";

function ReadyToTry() {
  return (
    <section className="ready-try bg-blue py-2xxl">
      <Container>
        <h2 className="fs-xl fw-700 ln-2xl text-center color-white">
          Ready to Try <br />
          <Logo
            width={137}
            height={45}
            firstColor={"#ffffff"}
            secondColor={"#ffffff"}
          />{" "}
          ?
        </h2>
        <p className="fs-m ln-m color-white fw-400 my-s text-center">
          ME-Page have made website building more accessible than ever before,
          and their key features make it easy for anyone to create a
          professional-looking website in a matter of hours.
        </p>
        <ButtonPress variant={"light"} value={"Get Started"} />
      </Container>
    </section>
  );
}

export default ReadyToTry;
