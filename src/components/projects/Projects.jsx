import React from "react";
import "./projects.css";
import Reservia from "../../assets/portfolio-project-images/reservia.png";
import Ohmyfood from "../../assets/portfolio-project-images/ohmyfood.png";
import Fisheye from "../../assets/portfolio-project-images/fisheye.png";
import Hrnet from "../../assets/portfolio-project-images/hrnet.png";
import Sportsee from "../../assets/portfolio-project-images/sportsee.png";
import Kasa from "../../assets/portfolio-project-images/kasa.png";

const Projects = () => {
  return (
    <section id="projects">
      <h5>Portfolio</h5>
      <h2>Projets</h2>

      <div className="container projects__container">
        <article className="projects__item">
          <div className="projects__item-img">
            <img src={Kasa} alt="" />
          </div>
          <h3>
            Application SPA de location immobilière avec{" "}
            <span className="projects__tech">React</span> et{" "}
            <span className="projects__tech">React Router</span>
          </h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/h-khribich/HamzaKhribich_11_19122021"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://hamzakhribich-11-19122021.pages.dev/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-img">
            <img src={Sportsee} alt="" />
          </div>
          <h3>
            Dashboard d'analyse de performance sportive avec{" "}
            <span className="projects__tech">React</span> et{" "}
            <span className="projects__tech">Recharts</span>
          </h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/h-khribich/HamzaKhribich_12_11012022"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://hamzakhribich-12-11012022.pages.dev/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-img">
            <img src={Ohmyfood} alt="" />
          </div>
          <h3>
            Site de presentations de restaurants avec{" "}
            <span className="projects__tech">HTML/CSS</span> et{" "}
            <span className="projects__tech">Sass</span>
          </h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/h-khribich/HamzaKhribich_3_25052021"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://h-khribich.github.io/HamzaKhribich_3_25052021/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-img">
            <img src={Reservia} alt="" />
          </div>
          <h3>
            Site statique de réservations de vacances avec{" "}
            <span className="projects__tech">HTML/CSS</span>
          </h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/h-khribich/HamzaKhribich_2_10052021"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://h-khribich.github.io/HamzaKhribich_2_10052021/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-img">
            <img src={Hrnet} alt="" />
          </div>
          <h3>
            Conversion d'une application jQuery en{" "}
            <span className="projects__tech">React</span> et{" "}
            <span className="projects__tech">Redux</span>
          </h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/h-khribich/HamzaKhribich_14_20032022"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://hamzakhribich-14-20032022.pages.dev/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
        <article className="projects__item">
          <div className="projects__item-img">
            <img src={Fisheye} alt="" />
          </div>
          <h3>
            Site dynamique de pages de photographes en{" "}
            <span className="projects__tech">JS vanilla</span>
          </h3>
          <div className="projects__item-cta">
            <a
              href="https://github.com/h-khribich/HamzaKhribich_6_14072021"
              className="btn"
              rel="noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://h-khribich.github.io/HamzaKhribich_6_14072021/"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
