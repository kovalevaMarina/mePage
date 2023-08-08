import "./Navbar.scss";
import Logo from "../Logo/Logo";
import FormSelect from "../FormSelect/FormSelect";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";

function NavbarHeader() {
  const languages = ["UKR", "ENG"];

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="flex-row-reverse">
        <Navbar.Brand href="/">
          <Logo
            width={90}
            height={30}
            firstColor={"#3A83F6"}
            secondColor={"#3E4857"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="justify-content-end flex-grow-1 pe-3">
            <Button>Login</Button>
            <FormSelect arrayOptions={languages} />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
