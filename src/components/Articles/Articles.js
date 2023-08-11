import "./Articles.scss";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import articalFirst from "../../assets/images/article-first.png";
import articalsecond from "../../assets/images/article-second.png";
import articalThird from "../../assets/images/article-third.png";

import ButtonPress from "../Button/Button";

const articalsData = [
  {
    imgUrl: articalFirst,
    textTopic: "Tips, Constructor",
    textTime: " - March 10, 2023",
    title: "Your Dream Website with a User-Friendly Constructor",
    description:
      "Building a website can be a daunting task, especially for those who lack technical expertise.",
  },

  {
    imgUrl: articalsecond,
    textTopic: "Tips, Constructor",
    textTime: " - March 10, 2023",
    title: "How ME-Page Can Help You Build Your Business Online",
    description:
      "With customizable templates, user-friendly interfaces, and integrated e-commerce features...",
  },

  {
    imgUrl: articalThird,
    textTopic: "Tips, Constructor",
    textTime: " - March 10, 2023",
    title: "Maximizing the Potential of Online Store with ME-Page",
    description:
      "From creating a visually appealing website to integrating essential features such as social...",
  },
  {
    imgUrl: articalFirst,
    textTopic: "Tips, Constructor",
    textTime: " - March 10, 2023",
    title: "Your Dream Website with a User-Friendly Constructor",
    description:
      "Building a website can be a daunting task, especially for those who lack technical expertise.",
  },

  {
    imgUrl: articalsecond,
    textTopic: "Tips, Constructor",
    textTime: " - March 10, 2023",
    title: "How ME-Page Can Help You Build Your Business Online",
    description:
      "With customizable templates, user-friendly interfaces, and integrated e-commerce features...",
  },

  {
    imgUrl: articalThird,
    textTopic: "Tips, Constructor",
    textTime: " - March 10, 2023",
    title: "Maximizing the Potential of Online Store with ME-Page",
    description:
      "From creating a visually appealing website to integrating essential features such as social...",
  },
];

function Articles() {
  return (
    <section className="articles py-s py-lg-5">
      <Container fluid>
        <h3 className="title-h3 mb-2 text-uppercase text-center">Articles</h3>
        <h2 className="title-h2 fs-1 text-center">
          Latest news from ME-Page team
        </h2>
        <Row>
          <Carousel>
            {articalsData.map((artical) => {
              return (
                <Col xs={12} lg={4}>
                  <Carousel.Item>
                    <img
                      src={artical.imgUrl}
                      className="d-block w-100"
                      alt={`Artical about ${artical.title}`}
                    />
                    <Carousel.Caption>
                      <p className="fs-m ln-m fw-400 color-grey400">
                        <span className="fw-700 color-grey700">
                          {artical.textTopic}
                        </span>
                        {artical.textTime}
                      </p>
                      <h3 className="fs-l ln-xl fw-700 color-grey700 my-xs">
                        {artical.title}
                      </h3>
                      <p className="fs-m ln-m fw-400 color-grey400 mb-s">
                        {artical.description}
                      </p>
                      <ButtonPress
                        variant={"outline-primary"}
                        value={"Read More"}
                      />
                    </Carousel.Caption>
                  </Carousel.Item>
                </Col>
              );
            })}
          </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default Articles;
