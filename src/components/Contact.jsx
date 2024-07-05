import React from "react";
import { FaInstagram } from "react-icons/fa";
// import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
// import { FaSquareXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/itsvishal_singh?igsh=MWQ4NWZtNmc5NGkwMg=="
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/itsvishalsingh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a
            href="https://wa.me/+918757001015"
            target="_blank"
            className="items"
          >
            <FaWhatsapp className="icons" />
          </a>
          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a> */}
          <a
            href="https://github.com/itsvishal-singh"
            target="_blank"
            className="items"
          >
            <FiGithub className="icons" />
          </a>
          <a
            href="mailto:vishal.200087@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
