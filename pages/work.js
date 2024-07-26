import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProgressScroll from "../components/ProgressScroll";

const Work = () => {
  return (
    <Container >
      <Row>
        <Col>Logo or Media</Col>
        <Col>Description</Col>
      </Row>
      <Row>
        <Col>
            <ProgressScroll />
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
