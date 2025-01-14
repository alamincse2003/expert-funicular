import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src="/img/logo.svg" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src="/img/nav-icon1.svg" alt="Icon" />
              </a>
              <a href="#">
                <img src="/img/nav-icon2.svg" alt="Icon" />
              </a>
              <a href="#">
                <img src="/img/nav-icon3.svg" alt="Icon" />
              </a>
            </div>
            <p>Design at Al Amin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
