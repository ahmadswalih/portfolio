import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects That I'have worked on </strong>
        </h1>
        <p style={{ color: "white" }}>
          click on the{" "}
          <span style={{ fontStyle: "bold" }} className="purple">
            {" "}
            "view the project "{" "}
          </span>
          button to view the project
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/terfuqbwzgzq0jdu32gq"
              isBlog={false}
              title="MyFinMentor- AI Financial Planner"
              description="MyFinMentor is an AI Financial Planner that helps you to plan your financials."
              demoLink="https://myfinmentor.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/pw4u9ubakrhtxpcxkkvn"
              isBlog={false}
              title="Awaas Sunooo - YT Music Player"
              description="The application is a curated lis tof Malayalam songs fro wedding Functions."
              ghLink="https://github.com/ahmadswalih/awaas-suno"
              demoLink="https://awaassuno.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/zxsxjnbbfzcoft8z96ez"
              isBlog={false}
              title="Monday Motivation for developers"
              description="The application will Generate a Monday Motivation Quote for developers.   "
              ghLink="https://github.com/ahmadswalih/monday-motivation"
              demoLink="https://mondaymotivation.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/lnuhfozn5gmt4cveoq1t"
              isBlog={false}
              title="Excuse Generator"
              description="The application will Generate Random excuses for your use cases. "
              ghLink="https://github.com/ahmadswalih/excuse-generator"
              demoLink="https://excuse-generator.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/n1fitjivpjhz2qwe7ls9"
              isBlog={false}
              title="Prompts For Devs"
              description="The application will help Developers to craft best AI Prompts for their development needs. There are around 200+ prompts available."
              ghLink="https://github.com/ahmadswalih/prompt-for-devs"
              demoLink="https://prompts.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/tczpbck5ks1hdirhg0ce"
              isBlog={false}
              title="Chaiwala"
              description="Chaiwala is a application that lists great things said by pm narendra modi."
              ghLink="https://github.com/ahmadswalih/chaiwala"
              demoLink="https://chaiwala.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/tdjdtc8xkdx0ue0abvfq"
              isBlog={false}
              title="CountUp."
              description="Countup is an application to tally the number of repeatative word in a youtube video , user just has to submit a youtube url and the word that he/she wants to tally"
              //ghLink="https://github.com/ahmadswalih/dns-lookup"
              demoLink="https://wordup.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/ftc9b4f3k7gt4pqaeoid"
              isBlog={false}
              title="TrumpLaughs"
              description="TrumpLaughs is a Funny Hobby project built on a coozy sunday. The application will list the dumbest things said by Ex.American President Donald Trump. Not just listing , it will give the source link and the date for the things that he said"
              //ghLink="https://github.com/ahmadswalih/dns-lookup"
              demoLink="https://trumplaughs.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/qckivt1wwgxsm7p5lslt"
              isBlog={false}
              title="Image to Audio Story"
              description="Image To Audio Story is a application using multiple hugging face models and llm. The application changes a normal image to audio story."
              ghLink="https://github.com/ahmadswalih/image-2-audio"
              //demoLink="https://trumplaughs.ahmadswalih.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/hnxpixmij2kl5n2ueupf"
              isBlog={false}
              title="The Kedye - Ecommerce Shop "
              description="The Kedye is an ecommerce application for selling Premium Jwelleries , Dresses and all . It's built on top of Shopify"
              //ghLink="https://github.com/ahmadswalih/dns-lookup"
              demoLink="https://kedya.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/e8s9xi2afxhllvucz0hs"
              isBlog={false}
              title="Leafy Legacy - Ecommerce "
              description="Leafy Legacy is an ecommerce application for selling decorations , plants and all . It's built on top of Shopify"
              //ghLink="https://github.com/ahmadswalih/dns-lookup"
              demoLink="https://ecommerce.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/c7ip7n0otuxukrvqnxhy"
              isBlog={false}
              title="DNS Lookup"
              description="DNS Lookup is a user-friendly tool for individuals, web developers, and network administrators. It simplifies retrieving domain information, providing insights into DNS records, expiration dates, and ownership details for various tasks."
              ghLink="https://github.com/ahmadswalih/dns-lookup"
              demoLink="https://dnslookup.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/pimmmcaevrwix6kadrfi"
              isBlog={false}
              title="Portfolio Project"
              description="This is a portfolio for my friend Rayees who wants a game-themed portfolio built using Next.js and Framer Motion."
              ghLink="https://rayees.netlify.app/"
              demoLink="https://rayees.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/ihidurr5iakxhg06dxsl"
              isBlog={false}
              title="HiLink Travel Website"
              description="HiLink Travel website is a travel agency website . the website is created using nextjs and styled using tailwindcss . the website is fully responsive in all devices."
              ghLink="https://hilink-demo.ahmadswalih.com/"
              demoLink="https://hilink-demo.ahmadswalih.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/e3tr5agpq4ieijcyvtum"
              isBlog={false}
              title="Shorty"
              description="Shorty is a web application where users can save their notes upto 200 characters. The application is mainly focused for developers to note quick points."
              ghLink="https://github.com/ahmadswalih/notes-app"
              demoLink="https://shorty.ahmadswalih.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/p4yma5r8phdcsxaf3uxi"
              isBlog={false}
              title="Quiz App"
              description="An Opensource Quiz application using Reactjs.Users can select their preferred field and start quiz. Each Quiz is consist of 10 questions and every correct answer has 1 point . "
              ghLink="https://github.com/ahmadswalih/quiz-app"
              demoLink="https://quiz.ahmadswalih.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/u8vkqa8koxufammikypp"
              isBlog={false}
              title="Recipe Application"
              description="It's an application were users can find almost every recipe's including their ingredients list.Also users can search their recipes."
              ghLink="https://github.com/ahmadswalih/Recipe-app-react"
              demoLink="https://recipe.ahmadswalih.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/ffmw3mlhsfgdgzfhqdpy"
              isBlog={false}
              title="Ultra Template"
              description="Ultra is an opensource template for web developers as well as for  designers.The template is under MIT license and free to use and edit ."
              ghLink="https://github.com/ahmadswalih/ULTRA-react-template"
              demoLink="https://ultra-banking.ahmadswalih.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/undyynnqgvb4ku4uvs9d"
              isBlog={false}
              title="Git Finder"
              description="Git-Finder is a Github firebase application to search the github users and their repository lists. The application shows the public repositories of desired users and also their availablity to work ."
              ghLink="https://github.com/ahmadswalih/GitFire"
              demoLink="https://find-git.ahmadswalih.com/ "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/w1fygfhzqlnuq0zbbtyr"
              isBlog={false}
              title="Pokedex"
              description="Pokedex is a pokemon character listing application. The application uses pokmon api to get data and shows features of each charactes."
              ghLink="https://github.com/ahmadswalih/pokedex-nextjs"
              demoLink="https://pokedex.ahmadswalih.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/swqginfbtisamm18ugvj"
              isBlog={false}
              title="Movie Land"
              description="Movie Land is a movie searching application built using Reactjs.The application is fully responsive in all Devices and has a search option to search movies"
              ghLink="https://github.com/ahmadswalih/Movie-Land"
              demoLink="https://movie-finder.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/ms88uaajeapjh8ojpkhk"
              isBlog={false}
              title="Breaking Bad Cast"
              description="Breaking Bad Cast is a fan-made website which shows all the characters from the Great American TV Series Breaking Bad"
              ghLink="https://github.com/ahmadswalih/breaking-bad-website"
              demoLink="https://breakingbad.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/omf9rtppzklgumjciu3z"
              isBlog={false}
              title="Advice Generator"
              description="Advice Generator is web-application which generates advices / quotes. Users will get unique advices on every refresh . "
              ghLink="https://github.com/ahmadswalih/advice-Generator"
              demoLink="https://quotes-generator.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/fgkennclxziajs2iifgd"
              isBlog={false}
              title="Weather Application"
              description="Weather Application using React Js . The applicaiton uses api from the openweather website. Users can search the Weather based on city/country.The application is Bootstrapped with Create React App ."
              ghLink="https://github.com/ahmadswalih/React-Weather-App"
              demoLink="https://weather.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/hfjquc2cjidod6iev1b2"
              isBlog={false}
              title="Crypto Tracker"
              description="A Portfolio Project that Updates The Value of Crpto Currencies.The application uses API from the website CoinGecko .This is a Next.js project bootstrapped with create-next-app."
              ghLink="https://github.com/ahmadswalih/Crpto"
              demoLink="https://proj-crypto.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/selwaninreiylqr6mmlv"
              isBlog={false}
              title="Contact Application"
              description="Contacts is a user-contact saving application using ReactJs and Google Firebase.The application can perform all CRUD operations and also user can upload images related to that particular contact."
              ghLink="https://github.com/ahmadswalih/contact-app"
              demoLink="https://contact-app.ahmadswalih.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dgxwp8osu/image/upload/f_auto,q_auto/v1/assets-portfolio/ogvvgij7vveb0qmqg8xk"
              isBlog={false}
              title="Banking UI Template"
              description="Banking UI Template is a UI template for banking sector . The whole website is crafted using Bootstrap"
              ghLink="https://github.com/ahmadswalih/Banking-UI-Template"
              demoLink="https://banking-ui.ahmadswalih.com/"
            />
          </Col>
        </Row>
      </Container>
      <p style={{ color: "#fff" }}>
        For More Project Visit my{" "}
        <a
          className="link"
          style={{ cursor: "pointer", color: "#fff" }}
          href="https://github.com/ahmadswalih"
        >
          Github Profile
        </a>
      </p>
    </Container>
  );
}

export default Projects;
