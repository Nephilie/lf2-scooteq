import React from "react";
import "./HeroStyles.css"

const Hero = (props) => {
  return (
    <>
      <div className={props.cName}>
        <img alt="HeroImage" src={props.heroImg} />
        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btnText}</a>
            {/* <a href={props.url}>Our Rides</a> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
