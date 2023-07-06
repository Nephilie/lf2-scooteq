import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>ScooTeq</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div>
            <a href="/"><i className="fa-brands fa-facebook-square"></i></a>
            <a href="/"><i className="fa-brands fa-instagram-square"></i></a>
            <a href="/"><i className="fa-brands fa-behance-square"></i></a>
            <a href="/"><i className="fa-brands fa-twitter-square"></i></a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
        </div>
        <div>
            <h4>Other</h4>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
            <a href="/">Changelog</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
