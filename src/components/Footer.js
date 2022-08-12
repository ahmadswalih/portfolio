import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineBehance,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Ahamad Swalih</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ahmadswalih"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.behance.net/ahmadswalihcm"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiOutlineBehance />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/ahmad-swalih-cm-6429881b5/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/swalih_ahmd_"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
