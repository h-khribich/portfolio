import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        HAMZA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">À propos</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#testimonials">Recommendations</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <IconContext.Provider value={{ size: "1.2rem" }}>
          <a
            href="https://www.linkedin.com/in/hamzakhribich/"
            rel="noreferrer"
            target="_blank"
            className="footer__icon"
          >
            <BsLinkedin />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem" }}>
          <a
            href="https://github.com/h-khribich"
            rel="noreferrer"
            target="_blank"
            className="footer__icon"
          >
            <FaGithub />
          </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ size: "1.2rem" }}>
          <a
            href="https://www.facebook.com/hamza.khribich/"
            rel="noreferrer"
            target="_blank"
            className="footer__icon"
          >
            <BsFacebook />
          </a>
        </IconContext.Provider>
      </div>

      <div className="footer__made-with">
        <small>
          Fait avec{" "}
          <IconContext.Provider
            value={{ color: "red", verticalAlign: "middle" }}
          >
            <AiFillHeart />
          </IconContext.Provider>{" "}
          à Toulouse
        </small>
      </div>
    </footer>
  );
};

export default Footer;
