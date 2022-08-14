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
            Hi Everyone, I am <span className="purple">Ahmad Swalih</span> from{" "}
            <span className="purple"> Kerala, India.</span>
            <br /> <br /> I am a passionate self learner .I started web
            development after my 10th standard and now I have an experience of 2
            years in web development and builded about{" "}
            <span className="purple"> 36</span> projects in Reactjs and also I
            have completed a three months of internship in WebSniffer - a german
            based company.
            <br />
            <br />
            Apart from coding, I have a Decent Design background . Started
            Poster designing using Gimp and published about{" "}
            <span className="purple">12</span> projects in Behance. <br />
            <br />
            some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

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
