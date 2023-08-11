import "./CompetitorsCard.scss";
import circleCheck from "../../assets/icons/check-circle.svg";
import CircleX from "../Icones/CircleX";
import Logo from "../Logo/Logo";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CompetitorsCard() {
  return (
    <Row className="d-flex flex-column flex-lg-row gap-4 gap-lg-0 py-4">
      <Col lg={4}>
        <Card className="d-none d-lg-flex">
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Share Project</td>
                </tr>
                <tr>
                  <td>Customized Templates</td>
                </tr>
                <tr>
                  <td>Customized Ready-made Blocks</td>
                </tr>
                <tr>
                  <td>HTML and CSS editing</td>
                </tr>
                <tr>
                  <td>Advanced Mode</td>
                </tr>
                <tr>
                  <td>Average Price</td>
                </tr>
                <tr>
                  <td>Customer Support</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th className="d-lg-none">Features</th>
                  <th className="align-middle text-end text-lg-center">
                    <Logo
                      width={86}
                      height={25}
                      firstColor={"#3A83F6"}
                      secondColor={"#3E4857"}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="d-lg-none">Share Project</td>
                  <td className="text-end text-lg-center">
                    <img src={circleCheck} alt="Icon circle check" />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Customized Templates</td>
                  <td className="text-end text-lg-center">
                    <img src={circleCheck} alt="Icon circle check" />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Customized Ready-made Blocks</td>
                  <td className="text-end text-lg-center">
                    <img src={circleCheck} alt="Icon circle check" />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">HTML and CSS editing</td>
                  <td className="text-end text-lg-center">
                    <img src={circleCheck} alt="Icon circle check" />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Advanced Mode</td>
                  <td className="text-end text-lg-center">
                    <img src={circleCheck} alt="Icon circle check" />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Average Price</td>
                  <td className="text-end text-lg-center">$10</td>
                </tr>
                <tr>
                  <td className="d-lg-none">Customer Support</td>
                  <td className="text-end text-lg-center">
                    24/7 live chat and email
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={4}>
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th className="d-lg-none">Features</th>
                  <th className="align-middle text-end text-lg-center">
                    Other Constructors
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="d-lg-none">Share Project</td>
                  <td className="text-end text-lg-center">
                    <CircleX circleColor={"#3E4957"} />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Customized Templates</td>
                  <td className="align-middle text-end text-lg-center">
                    Limited
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Customized Ready-made Blocks</td>
                  <td className="text-end text-lg-center">
                    <CircleX circleColor={"#3E4957"} />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">HTML and CSS editing</td>
                  <td className="text-end text-lg-center">
                    <CircleX circleColor={"#3E4957"} />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Advanced Mode</td>
                  <td className="text-end text-lg-center">
                    <CircleX circleColor={"#3E4957"} />
                  </td>
                </tr>
                <tr>
                  <td className="d-lg-none">Average Price</td>
                  <td className="align-middle text-end text-lg-center">$20</td>
                </tr>
                <tr>
                  <td className="d-lg-none">Customer Support</td>
                  <td className="align-middle text-end text-lg-center">
                    Email only
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CompetitorsCard;
