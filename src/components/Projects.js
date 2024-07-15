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
      title: "Web Maintenance Specialist and Service Coordinator",
      description: "Aircool Service",
      imgUrl: projImg1,
    },
    {
      title: "Hospitality Supervisor",
      description: "Keltice Oriental",
      imgUrl: projImg2,
    },
    {
      title: "Inventory Coordinator",
      description: "StoneBridge",
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
                <h2>Working and Study Experience</h2>
                <p>I have extensive experience in project management and resource allocation at Aircool, overseeing air conditioning installation and maintenance projects. I excel in communication, coordination with stakeholders, and problem-solving to ensure project success. Previously, at StoneBridge, I managed inventory using ERP systems, achieving high productivity and accuracy in inventory management. I also gained hospitality management experience at Keltice Oriental. Recently, I participated in the Victorian Government's Digital Jobs Program, becoming proficient in React, JavaScript, and Tailwind CSS. I've also completed internships and obtained certifications in data analytics and Azure fundamentals.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Working Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Study Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div>
                        <ul>
                          <li>Web development (React) ------Digital jobs Program------02/2024-06/2024</li>
                          <li>Master of Information Technology and Systems ------University Of Tasmania, Hobart------07/2017-08/2019</li>
                          <li>Bachelor of Logistic Management------Dalian Jiaotong University------10/2008-06/2012</li>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
