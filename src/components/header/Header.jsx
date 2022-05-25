import React, { useState } from "react";
import "./header.css";
import CTA from "./CTA";
import ProfilePic from "../../assets/photo_de_profil.png";
import HeaderSocials from "./HeaderSocials";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { IconContext } from "react-icons";

const Header = () => {
  const [bottom, setBottom] = useState(false);
  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setBottom(true);
    } else {
      setBottom(false);
    }
  };

  return (
    <header>
      <div className="container header__container">
        <h5>Bonjour, je suis</h5>
        <h1>Hamza Khribich</h1>
        <h5 className="text-light">Développeur Front-End</h5>

        <CTA />
        <HeaderSocials bottom={bottom} />

        <div className="profile">
          <img src={ProfilePic} alt="Hamza KHRIBICH" className="profile__img" />
        </div>

        <a
          href="mailto: hamza.khribich@gmail.com"
          rel="noreferrer"
          className={`email ${bottom ? "socials__bottom" : ""}`}
          target="_blank"
        >
          hamza.khribich@gmail.com
        </a>
        {bottom ? (
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <a href="#" className="scroll-down socials__bottom">
              <BsFillArrowUpCircleFill />
            </a>
          </IconContext.Provider>
        ) : (
          <IconContext.Provider value={{ size: "1.2rem" }}>
            <a href="#footer" className="scroll-down">
              <BsFillArrowDownCircleFill />
            </a>
          </IconContext.Provider>
        )}
      </div>
    </header>
  );
};

export default Header;
