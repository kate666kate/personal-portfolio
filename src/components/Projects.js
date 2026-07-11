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
      title: "WordPress Demo Environment",
      description: "Multi-page website workflow for publishing, forms, mobile QA, SEO fields, plugin-aware testing and handover notes.",
      outcome: "Shows I can manage WordPress beyond simple content edits.",
      tags: ["WordPress", "Forms", "SEO", "QA"],
      imgUrl: projImg1,
    },
    {
      title: "Shopify Product Journey",
      description: "Product content and option clarity, merchandising logic, abandoned-cart follow-up and conversion pathway checks.",
      outcome: "Shows how I use content and analytics to reduce purchase friction.",
      tags: ["Shopify", "Products", "EDM", "Conversion"],
      imgUrl: projImg2,
    },
    {
      title: "Digital Growth Portfolio",
      description: "This React showcase packaged in Docker for interview demos, with focused role-fit content and responsive presentation.",
      outcome: "Shows I can package and present digital work clearly.",
      tags: ["React", "Docker", "Nginx", "Demo"],
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
                <h2>Selected Digital Showcase</h2>
                <p>These examples are structured for an interview conversation: what the business needed, what I would show on screen, how I would QA it, and how I would measure whether it helped generate better leads.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Showcase</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Proof points</Nav.Link>
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
                          <li><strong>Website scale:</strong> supported 30+ websites across multiple brands, branches and stakeholder groups.</li>
                          <li><strong>Analytics:</strong> used GA4 and GTM to find where users dropped off and which actions needed clearer tracking.</li>
                          <li><strong>Lead generation:</strong> helped standardise enquiry forms and improved enquiries by 20% in one example.</li>
                          <li><strong>Technical base:</strong> WordPress, Shopify, HTML/CSS, React, Docker, SEO checks and accessibility-minded QA.</li>
                          <li><strong>Education:</strong> Master of Information Technology and Systems, University of Tasmania.</li>
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
