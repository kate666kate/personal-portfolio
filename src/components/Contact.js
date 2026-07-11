import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact form illustration" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="section-kicker">Interview demo flow</span>
                  <h2>How I would present this in an interview</h2>
                  <div className="demo-list">
                    <div><strong>1. Start with the business goal</strong><span>What the website, product page or campaign needs to achieve.</span></div>
                    <div><strong>2. Show the customer journey</strong><span>Front-end page, mobile experience, content hierarchy and call to action.</span></div>
                    <div><strong>3. Explain the working method</strong><span>WordPress/Shopify workflow, QA, SEO checks, GA4/GTM events and stakeholder approval.</span></div>
                    <div><strong>4. Close with growth follow-up</strong><span>How I would monitor leads, enquiry quality, campaign source and next improvements.</span></div>
                  </div>
                  <a className="contact-cta" href="mailto:katexu2026@gmail.com">Contact Meisi <ArrowRightCircle size={22} /></a>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
