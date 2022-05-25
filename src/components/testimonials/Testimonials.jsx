import Carousel from "nuka-carousel";
import React from "react";
import "./testimonials.css";
import { testimonialsData } from "./testimonials_data";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const customArrowBtn = {
  background: "transparent",
  fontSize: "1.3rem",
  color: "var(--color-primary-variant)",
};

const customPagingDots = {
  fill: "var(--color-primary-variant)",
};

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Ils m'ont cotôyé</h5>
      <h2>Recommendations</h2>

      <div className="container testimonials__container">
        <Carousel
          wrapAround={true}
          slidesToShow={1}
          animation="zoom"
          swiping={true}
          defaultControlsConfig={{
            nextButtonText: <BsFillArrowRightCircleFill />,
            prevButtonText: <BsFillArrowLeftCircleFill />,
            nextButtonStyle: customArrowBtn,
            prevButtonStyle: customArrowBtn,
            pagingDotsStyle: customPagingDots,
          }}
        >
          {testimonialsData.map((item) => (
            <article className="testimonial" key={item.name}>
              <div className="colleague__avatar">
                <img src={item.img} alt="" />
              </div>
              <h3 className="colleague__position">{item.position}</h3>
              <h5 className="colleague__name">{item.name}</h5>
              <small className="colleague__review">{item.review}</small>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
