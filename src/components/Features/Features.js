import "./Features.scss";

import Row from "react-bootstrap/Row";

import FeatureItem from "./FeatureItem";
import ButtonPress from "../Button/Button";

import featureCustom from "../../assets/images/feature-custom.png";
import featureMode from "../../assets/images/feature-mode.png";
import featureMobile from "../../assets/images/feature-mobile.png";
import featureLibrary from "../../assets/images/feature-library.png";

import Container from "react-bootstrap/Container";

const featuresData = [
  {
    title: "Empowering Customization",
    description:
      "Users can customize every aspect of their website, from the fonts and colors to the layout and design using additional settings. The ability to edit HTML and CSS code directly gives users unparalleled flexibility and control over their website's design and functionality. It's a powerful feature that sets ME-Page apart from other website builders and makes it an excellent choice for users who want complete customization options.",
    imgUrl: featureCustom,
  },

  {
    title: "Advanced Mode",
    description:
      "Advanced mode in ME Page allows users to have more control over the design and functionality of their website. With this mode, users can edit the HTML and CSS code directly, giving them the ability to customize every aspect of their site's appearance and behavior. In addition, advanced mode also enables users to edit the nesting blocks of their website. This means they can rearrange and modify the layout of their site's content, such as moving sections around, adding new ones, or deleting existing ones.",
    imgUrl: featureMode,
  },

  {
    title: "Build On-the-Go: Use on Mobile Device",
    description:
      "Our ME-Page Constructor is perfect for individuals or teams who need to work on projects while on the go. With our constructor, you can create your designs on your smartphone or tablet, so you can work from the comfort of your own home, on your daily commute, or even while you're on vacation.",
    imgUrl: featureMobile,
  },

  {
    title: "Big Library of Ready-made Blocks",
    description:
      "Ready-made blocks are pre-designed sections of a website that can be easily added to a page. The advantage is that it allows website builders to create professional-looking websites without needing any design or coding experience. Some of the common ready-made blocks include headers, footers, testimonials, contact forms, and image galleries. These blocks are designed to be responsive, which means they automatically adjust to fit the screen size of the device being used to view the website.",
    imgUrl: featureLibrary,
  },
];

function Features() {
  return (
    <section className="features py-s py-lg-5">
      <Container>
        <h3 className="title-h3 mb-2 text-center text-uppercase">
          Key Features You Need to Know
        </h3>
        <h2 className="title-h2 fs-1 mb-s text-center">
          Unleashing the Power of ME-Page
        </h2>
        <p className="features-text mx-auto fs-1m ln-xl text-center color-grey400 d-none d-lg-block mb-xxl">
          ME-Page have made website building more accessible than ever before,
          and their key features make it easy for anyone to create a
          professional-looking website in a matter of hours.
        </p>
        <Row className="gap-5">
          {featuresData.map((feature, i) => (
            <FeatureItem {...feature} key={i} index={i} />
          ))}
        </Row>
        <p className="features-description mx-auto fs-m text-center ln-m fw-400 color-grey400 my-s">
          Have greater control over the design and content of your website, and
          can make changes in real-time to see how they look before publishing.
        </p>
        <ButtonPress variant={"primary"} value={"Get Started"} />
      </Container>
    </section>
  );
}

export default Features;
