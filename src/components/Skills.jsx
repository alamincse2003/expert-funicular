/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I am a Junior web developer. As a web developer , My skill have
                html,css,javascript,react,firebase,node.js and other libraries
                and framework. I have hard working ability. I can write clean
                code and trying to improve every single day.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src="/img/meter1.svg" alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src="/img/meter2.svg" alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src="/img/meter3.svg" alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="/img/meter1.svg" alt="Image" />
                  <h5>HTML</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-image-left"
        src="/img/color-sharp.png"
        alt="Image"
      />
    </section>
  );
};

export default Skills;
