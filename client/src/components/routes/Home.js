import React from "react";
import Navbar from "../Navbar"
import Hero from "../Hero";
import bg from "../../asstes/bg3.jpg";

const Home = () => {
  return (
    <>
     <Navbar />
      <Hero
        cName="hero"
        heroImg={bg}
        title="Change mobility for good"
        text="Choose Your Favourite Destination."
        btnText="Download the App"
        btnClass="show"
        url="/"
      />
    </>
  );
};

export default Home;
