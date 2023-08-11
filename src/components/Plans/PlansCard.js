import "./PlansCard.scss";
import CircleX from "../Icones/CircleX";
import CircleCheck from "../Icones/CircleCheck";
import ButtonPress from "../Button/Button";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function PlansCard() {
  return (
    <div className="plans-card_wrap">
      <Row className="d-flex flex-xl-row align-items-stretch gap-4 justify-content-center gap-xl-0 py-4 py-xl-0">
        <Col xl={3}>
          <Card className="d-none d-xl-flex">
            <Card.Body className="p-2">
              <div className="card-first text-center">
                <h4 className="fw-700 fs-5 color-grey700">Benefits</h4>
              </div>
              <Table>
                <tbody>
                  <tr>
                    <td>Created web Pages</td>
                  </tr>
                  <tr>
                    <td>Created Projects</td>
                  </tr>
                  <tr>
                    <td>Share Projects / Pages</td>
                  </tr>
                  <tr>
                    <td>Ready-made Blocks</td>
                  </tr>
                  <tr>
                    <td>Templates</td>
                  </tr>
                  <tr>
                    <td>Advanced Mode</td>
                  </tr>
                  <tr>
                    <td>Personal Support Manager</td>
                  </tr>
                  <tr>
                    <td>No Advertising</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3}>
          <Card>
            <Card.Body className="p-2">
              <div className="card-second text-center">
                <h4 className="fw-700 fs-5 color-grey700">Free</h4>
                <h2 className="fs-s color-grey400">
                  <span className="h1 fw-bold color-grey700 my-2">$0</span> /
                  month
                </h2>
              </div>
              <Table>
                <tbody>
                  <tr>
                    <td className="d-xl-none">Created web Pages</td>
                    <td className="text-end text-xl-center fw-bold">
                      100 Pages
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Created Projects</td>
                    <td className="text-end text-xl-center fw-bold">
                      5 Projects
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Share Projects / Pages</td>
                    <td className="text-end text-xl-center fw-bold">
                      10 Projects
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Ready-made Blocks</td>
                    <td className="text-end text-xl-center fw-bold">
                      20 Blocks
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Templates</td>
                    <td className="text-end text-xl-center fw-bold">
                      100 Templates
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Advanced Mode</td>
                    <td className="text-end text-xl-center">
                      <CircleX circleColor={"#DDE0E4"} />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Personal Support Manager</td>
                    <td className="text-end text-xl-center">
                      <CircleCheck CircleColor={"#3A83F6"} bgColor={"none"} />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">No Advertising</td>
                    <td className="text-end text-xl-center">
                      <CircleX circleColor={"#DDE0E4"} />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <ButtonPress variant={"outline-primary"} value={"Get"} />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3}>
          <Card>
            <Card.Body className="p-2">
              <div className="text-center p-4">
                <h4 className="fw-700 fs-5 color-grey700 d-flex align-items-center  justify-content-center gap-1">
                  Monthly{" "}
                  <span className="plans-rate fs-s ln-s d-inline-block">
                    Popular
                  </span>
                </h4>
                <h2 className="fs-s color-grey400 my-2">
                  <span className="h1 fw-bold color-grey700">$15</span> / month
                </h2>
                <p className="fs-s color-grey400">Billed Monthly</p>
              </div>
              <Table>
                <tbody>
                  <tr>
                    <td className="d-xl-none">Created web Pages</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Created Projects</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Share Projects / Pages</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Ready-made Blocks</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Templates</td>
                    <td className="text-end text-xl-center fw-bold">500+</td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Advanced Mode</td>
                    <td className="text-end text-xl-center">
                      <CircleCheck CircleColor={"#3A83F6"} bgColor={"none"} />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Personal Support Manager</td>
                    <td className="text-end text-xl-center">
                      <CircleCheck CircleColor={"#3A83F6"} bgColor={"none"} />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">No Advertising</td>
                    <td className="text-end text-xl-center">
                      <CircleCheck CircleColor={"#3A83F6"} bgColor={"none"} />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <ButtonPress variant={"outline-primary"} value={"Get"} />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={3}>
          <Card>
            <Card.Body className="active-card p-2">
              <div className="text-center p-4">
                <h4 className="fw-700 fs-5 color-grey700 d-flex align-items-center justify-content-center gap-1">
                  Annualy{" "}
                  <span className="plans-rate fs-s ln-s d-inline-block">
                    Optimal
                  </span>
                </h4>
                <h2 className="fs-s color-grey400 my-2">
                  <span className="h1 fw-bold color-grey700">$10</span> / month
                </h2>
                <p className="fs-s color-grey400">Billed Yearly</p>
              </div>
              <Table>
                <tbody>
                  <tr>
                    <td className="d-xl-none">Created web Pages</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Created Projects</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Share Projects / Pages</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Ready-made Blocks</td>
                    <td className="text-end text-xl-center fw-bold">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Templates</td>
                    <td className="text-end text-xl-center fw-bold">500+</td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Advanced Mode</td>
                    <td className="text-end text-xl-center">
                      <CircleCheck
                        CircleColor={"#ffffff"}
                        bgColor={"#3A83F6"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">Personal Support Manager</td>
                    <td className="text-end text-xl-center">
                      <CircleCheck
                        CircleColor={"#ffffff"}
                        bgColor={"#3A83F6"}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="d-xl-none">No Advertising</td>
                    <td className="text-end text-xl-center">
                      <CircleCheck
                        CircleColor={"#ffffff"}
                        bgColor={"#3A83F6"}
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
              <ButtonPress variant={"outline-primary"} value={"Get"} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlansCard;
