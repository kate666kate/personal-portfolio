import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Spotify Next.js API Interface",
      description: "React, Next.js, Express and Spotify Web API authentication flow.",
      imgUrl: projImg1,
    },
    {
      title: "Greenline WordPress Delivery",
      description: "Responsive service website, forms, REST API, Docker, QA and tracking concepts.",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio Website",
      description: "React portfolio with component sections, Bootstrap layout, routing and animations.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Selected Front-End Projects</h2>
                <p>These projects show my current front-end direction: React interfaces, API-backed user flows, responsive public-facing websites, online forms, website QA, accessibility-minded checks and analytics/tracking workflows.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        ))}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>
                        <ul>
                          <li>React Development - General Assembly - 02/2024 to 06/2024</li>
                          <li>Master of Information Technology and Systems - University of Tasmania - 07/2017 to 07/2019</li>
                          <li>Ongoing practice: TypeScript, Next.js, REST API integration and dashboard/chart interfaces</li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Decorative background" />
    </section>
  )
}
