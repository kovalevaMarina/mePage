import "./Competitors.scss";
import circleCheck from "../../assets/icons/check-circle.svg";
import circleX from "../../assets/icons/x-circle.svg";
import Logo from "../Logo/Logo";
import ButtonPrimary from "../Button/Button";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function Competitors() {
  return (
    <section className="mb-s">
      <Container>
        <h3 className="title-h3 mb-2">Competitors</h3>
        <h2 className="title-h2">Why ME Page?</h2>
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th className="table-cell_rigth">
                    <Logo firstColor={"#3A83F6"} secondColor={"#3E4857"} />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Share Project</td>
                  <td className="table-cell_rigth">
                    <img src={circleCheck} />
                  </td>
                </tr>
                <tr>
                  <td>Customized Templates</td>
                  <td className="table-cell_rigth">
                    <img src={circleCheck} />
                  </td>
                </tr>
                <tr>
                  <td>Customized Ready-made Blocks</td>
                  <td className="table-cell_rigth">
                    <img src={circleCheck} />
                  </td>
                </tr>
                <tr>
                  <td>HTML and CSS editing</td>
                  <td className="table-cell_rigth">
                    <img src={circleCheck} />
                  </td>
                </tr>
                <tr>
                  <td>Advanced Mode</td>
                  <td className="table-cell_rigth">
                    <img src={circleCheck} />
                  </td>
                </tr>
                <tr>
                  <td>Average Price</td>
                  <td className="table-cell_rigth">$10</td>
                </tr>
                <tr>
                  <td>Customer Support</td>
                  <td className="table-cell_rigth">24/7 live chat and email</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th className="table-cell_rigth">Other Constructors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Share Project</td>
                  <td className="table-cell_rigth">
                    <img src={circleX} />
                  </td>
                </tr>
                <tr>
                  <td>Customized Templates</td>
                  <td className="table-cell_rigth">Limited</td>
                </tr>
                <tr>
                  <td>Customized Ready-made Blocks</td>
                  <td className="table-cell_rigth">
                    <img src={circleX} />
                  </td>
                </tr>
                <tr>
                  <td>HTML and CSS editing</td>
                  <td className="table-cell_rigth">
                    <img src={circleX} />
                  </td>
                </tr>
                <tr>
                  <td>Advanced Mode</td>
                  <td className="table-cell_rigth">
                    <img src={circleX} />
                  </td>
                </tr>
                <tr>
                  <td>Average Price</td>
                  <td className="table-cell_rigth">$20</td>
                </tr>
                <tr>
                  <td>Customer Support</td>
                  <td className="table-cell_rigth">Email only</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <p className="fs-s fw-400 ln-2s color-grey400 text-center my-s">
          As seen in the competition, ME Page offers several features that are
          comparable to other web-constructors, customizable templates & blocks,
          ability to share project for view or edit, ability to edit HTML and
          CSS code directly and its 24/7 live chat and email customer support.
        </p>
        <ButtonPrimary />
      </Container>
    </section>
  );
}

export default Competitors;
