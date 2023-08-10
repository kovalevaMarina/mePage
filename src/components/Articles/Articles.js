import "./Articles.scss";

import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

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
];

function Articles() {
  return (
    <section className="articles py-s">
      <Container>
        <h3 className="title-h3 mb-2">Articles</h3>
        <h2 className="title-h2">Latest news from ME-Page team</h2>
        <Carousel>
          {articalsData.map((artical) => {
            return (
              <Carousel.Item>
                <img src={artical.imgUrl} className="d-block w-100" />
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
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

export default Articles;