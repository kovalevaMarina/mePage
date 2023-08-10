import "./Navbar.scss";
import Logo from "../Logo/Logo";
import FormSelect from "../FormSelect/FormSelect";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import ButtonPress from "../Button/Button";

function NavbarHeader() {
  const languages = ["UKR", "ENG"];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row className="flex-row-reverse flex-lg-row">
          <Col>
            <Navbar.Brand href="/">
              <Logo
                width={90}
                height={30}
                firstColor={"#3A83F6"}
                secondColor={"#3E4857"}
              />
            </Navbar.Brand>
          </Col>
          <Col className="d-lg-none">
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          </Col>
          <Navbar.Offcanvas placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="d-flex flex-column gap-3 flex-lg-row justify-content-lg-end flex-grow-1 pe-3">
              <ButtonPress variant={"primary"} value={"Login"} />
              <FormSelect arrayOptions={languages} />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
