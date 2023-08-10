import "./ReadyToTry.scss";
import Container from "react-bootstrap/Container";

import Logo from "../Logo/Logo";
import ButtonPress from "../Button/Button";

function ReadyToTry() {
  return (
    <section className="ready-try bg-blue py-2xxl">
      <Container>
        <h2 className="ready-try_title h2 fw-700 ln-2xl text-center color-white mx-auto">
          Ready to Try{" "}
          <Logo
            width={137}
            height={45}
            firstColor={"#ffffff"}
            secondColor={"#ffffff"}
          />{" "}
          ?
        </h2>
        <p className="ready-try_text fs-5 ln-m color-white fw-400 my-s text-center mx-auto">
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
