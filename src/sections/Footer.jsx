import React from "react";
import { socialImgs } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">
            <img src="/portfolio-logo.ico" alt="logo" className="h-[100px]" />
          </a>
        </div>

        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="blank" href={img.link} key={img.link}>
              <img src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:tet-end">
            © {new Date().getFullYear()} Karim El mansouri. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
