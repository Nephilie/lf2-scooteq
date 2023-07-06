import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Navbar";
import TableList from "../TableList";


const Scooters = () => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "150px" }}>
        <TableList />
      </Container>
    </>
  );
};

export default Scooters;
