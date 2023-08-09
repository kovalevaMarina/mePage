import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

import articalFirst from "../../assets/images/article-first.png";
import articalsecond from "../../assets/images/article-second.png";
import articalThird from "../../assets/images/article-third.png";

function Articles() {
  return (
    <section className="py-s">
      <Container>
        <h3 className="title-h3 mb-2">Articles</h3>
        <h2 className="title-h2">Latest news from ME-Page team</h2>
        <Carousel>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="First slide" /> */}
            <Carousel.Caption>
              {/* <img src={articalFirst} className="d-block w-100"></img> */}
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Second slide" /> */}
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* <ExampleCarouselImage text="Third slide" /> */}
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default Articles;
