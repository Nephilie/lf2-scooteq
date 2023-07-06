import React from "react";
import Navbar from "../Navbar";
import bg from "../../asstes/bg2.jpg";
import Hero from "../Hero";

const OurRides = () => {
  return (
    <>
      <Navbar />

      <Hero cName="hero" heroImg={bg} title="Our Rides" text="" btnClass="hide" url="/" />
    </>
  );
};

export default OurRides;
