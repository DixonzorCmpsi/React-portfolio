import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, My name is <span className="purple">Dixon Zor </span>
            from <span className="purple"> I am from the philadelphia area.</span>
            <br />
            I am currently a student at Penn State, set to graduate in May of 2025.
            <br />
            At the end of my studies I will earn a bachelor degree in computer science and technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting and Creating Youtube videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer, Football and basketball
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Failure is the only way to improve"{" "}
          </p>
          <footer className="blockquote-footer">king zor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
