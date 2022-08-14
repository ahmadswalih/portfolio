import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import quiz from "../../Assets/Projects/quiz.png";
import pokedex from "../../Assets/Projects/pokedex.png";
import gitfire from "../../Assets/Projects/gitfire.png";
import recipe from "../../Assets/Projects/recipe.png";
import shorty from "../../Assets/Projects/shorty.png";
import ultra from "../../Assets/Projects/ultra.png";
import breakingbad from "../../Assets/Projects/breakingbad.png";
import advicegenerator from "../../Assets/Projects/advicegenerator.png";
import movieland from "../../Assets/Projects/movieland.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz App"
              description="An Opensource Quiz application using Reactjs.Users can select their preferred field and start quiz. Each Quiz is consist of 10 questions and every correct answer has 1 point . "
              ghLink="https://github.com/ahmadswalih/quiz-app"
              demoLink="https://intuitive-quiz-app-sw.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recipe}
              isBlog={false}
              title="Recipe Application"
              description="It's an application were users can find almost every recipe's including their ingredients list.Also users can search their recipes."
              ghLink="https://github.com/ahmadswalih/Recipe-app-react"
              demoLink="https://recipe-app-swalih.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ultra}
              isBlog={false}
              title="Ultra Template"
              description="Ultra is an opensource template for web developers as well as for  designers.The template is under MIT license and free to use and edit ."
              ghLink="https://github.com/ahmadswalih/ULTRA-react-template"
              demoLink="https://swalih-proj.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitfire}
              isBlog={false}
              title="Git Fire"
              description="Git-Fire is a Github firebase application to search the github users and their repository lists. The application shows the public repositories of desired users and also their availablity to work ."
              ghLink="https://github.com/ahmadswalih/GitFire"
              demoLink="https://git-fire-sw.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex"
              description="Pokedex is a pokemon character listing application. The application uses pokmon api to get data and shows features of each charactes."
              ghLink="https://github.com/ahmadswalih/pokedex-nextjs"
              demoLink="https://pokedex-sw.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shorty}
              isBlog={false}
              title="Shorty"
              description="Shorty is a web application where users can save their notes upto 200 characters. The application is mainly focused for developers to note quick points."
              ghLink="https://github.com/ahmadswalih/notes-app"
              demoLink="https://notes-app-sw.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieland}
              isBlog={false}
              title="Movie Land"
              description="Movie Land is a movie searching application built using Reactjs.The application is fully responsive in all Devices and has a search option to search movies"
              ghLink="https://github.com/ahmadswalih/Movie-Land"
              demoLink="https://movie-application-swa.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breakingbad}
              isBlog={false}
              title="Breaking Bad Cast"
              description="Breaking Bad Cast is a fan-made website which shows all the characters from the Great American TV Series Breaking Bad"
              ghLink="https://github.com/ahmadswalih/breaking-bad-website"
              demoLink="https://breakingbad-proj.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={advicegenerator}
              isBlog={false}
              title="Advice Generator"
              description="Advice Generator is web-application which generates advices / quotes. Users will get unique advices on every refresh . "
              ghLink="https://github.com/ahmadswalih/advice-Generator"
              demoLink="https://celadon-praline-d67394.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
      <p style={{ color: "#fff" }}>
        For More Project Visit my{" "}
        <a
          className="link"
          style={{ cursor: "pointer", color: "#fff" }}
          href="https://github.com/ahmadswalih">
          Github Profile
        </a>
      </p>
    </Container>
  );
}

export default Projects;
