import React from "react";
import Navbar from "../Navbar";
import img from "../../asstes/hero.jpg";
import img2 from "../../asstes/bg.jpg"
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "180px" }}>
        <Row style={{marginBottom: "50px"}}>
          <Col>
            <h1>Who We Are</h1>
            <p>
              SCOOTEQ is the largest shared electric vehicle company in Germany.
              We are on a mission to build a future where transportation is
              shared, affordable and carbon-free.
            </p>
          </Col>
          <Col>
            <img alt="img" src={img} style={{borderRadius: "13px"}}/>
          </Col>
        </Row>

        <Row style={{marginBottom: "50px"}}>
          <Col>
            <img alt="img" src={img2} style={{borderRadius: "13px"}} />
          </Col>
          <Col>
            <h1>What We Do</h1>
            <p>
              We provide convenient and reliable short-term rentals of electric
              bikes and scooters at an affordable price in more than 200 cities.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
