import Container from "react-bootstrap/Container";

import Logo from "../Logo/Logo";

function ReadyToTry() {
  return (
    <section className="bg-blue py-2xxl">
      <Container>
        <h2>
          Ready to Try <br />
          <Logo firstColor={"#ffffff"} secondColor={"#ffffff"} /> ?
        </h2>
      </Container>
    </section>
  );
}

export default ReadyToTry;
