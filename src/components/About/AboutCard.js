import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { Link } from "react-router-dom";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, It's <span className="purple">Ahmad Swalih</span> from
            the{" "}
            <span className="purple">
              {" "}
              vibrant landscapes of Kerala, India!
            </span>
            <br /> <br /> I'm not your typical web developer; I'm a passionate
            self-learner who delved into coding, and now, after three fantastic
            years, I've crafted <span className="purple"> 36</span> diverse
            projects. My journey led me through a transformative three-month
            internship at WebSniffer, a German-based company, and exciting
            collaborations that shaped my unique perspective.
            <br />
            <br />
            Beyond the digital realm, I bring a touch of design magic. I started
            my adventure in poster designing using Gimp, proudly showcasing{" "}
            <span className="purple">12</span> projects on Behance. <br />
            <br />
            When I'm not immersed in the world of tech, you'll find me making
            strategic moves on the chessboard, flipping through the pages of a
            good book, or exploring new places. Currently, I'm steering the ship
            as Cheif Technology Officer (CTO) at{" "}
            <a
              className="purple"
              href="https://kkscapitals.in"
              rel="_noreferrer"
              target="_blank"
            >
              KKS Capitals
            </a>
            , adding my touch to the world of technology and design. some other
            activities that I love to do!
            <br />
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul> */}

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">ahmadswalih</footer>
        </blockquote>

        <Button style={{ marginTop: "2px" }}>
          {" "}
          <Link className="btn btn-purple btn-lg text-white" to="/project">
            Projects
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
