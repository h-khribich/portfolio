import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const sendEmail = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pdhp55m",
        "template_07fqnsa",
        form.current,
        "7-MdLBnKrz7T2ufXh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    (async () => {
      await delay(500);
      e.target.classList.toggle("validating");

      await delay(500);
      e.target.classList.toggle("validating");
    })();

    (async () => {
      await delay(1000);
      e.target.reset();
    })();
  };

  return (
    <section id="contact">
      <h5>Faire connaissance</h5>
      <h2>Prenez contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hamza.khribich@gmail.com</h5>
            <a
              href="mailto:hamza.khribich@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Envoyer un message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
