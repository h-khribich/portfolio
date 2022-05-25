import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IconContext } from "react-icons";

const HeaderSocials = ({ bottom }) => {
  return (
    <div className={`header__socials ${bottom ? "socials__bottom" : ""}`}>
      <IconContext.Provider value={{ size: "1.2rem" }}>
        <a
          href="https://www.linkedin.com/in/hamzakhribich/"
          rel="noreferrer"
          target="_blank"
          className="socials__icon"
        >
          <BsLinkedin />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.2rem" }}>
        <a
          href="https://github.com/h-khribich"
          rel="noreferrer"
          target="_blank"
          className="socials__icon"
        >
          <FaGithub />
        </a>
      </IconContext.Provider>
      <IconContext.Provider value={{ size: "1.2rem" }}>
        <a
          href="https://www.facebook.com/hamza.khribich/"
          rel="noreferrer"
          target="_blank"
          className="socials__icon"
        >
          <BsFacebook />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export default HeaderSocials;
