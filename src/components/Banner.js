import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "WordPress Website Manager", "Shopify Content Specialist", "Digital Growth Marketer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const scrollToProjects = () => {
    const projects = document.getElementById('projects');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Interview-ready digital marketing showcase</span>
                <h1>{`Hi, I'm Meisi Xu, `}<span className="txt-rotate" data-period="1000" data-rotate='[ "WordPress Website Manager", "Shopify Content Specialist", "Digital Growth Marketer" ]'><span className="wrap">{text}</span></span></h1>
                <p>I manage websites as business assets: keeping WordPress and Shopify content accurate, improving SEO and forms, tracking user behaviour with GA4/GTM, and supporting campaigns, launches and events that generate stronger leads.</p>
                <div className="hero-proof">
                  <span>30+ websites supported</span>
                  <span>20% enquiry uplift example</span>
                  <span>GA4 / GTM / SEO / QA</span>
                </div>
                <div className="hero-actions">
                  <button onClick={scrollToProjects}>View Showcase <ArrowRightCircle size={25} /></button>
                  <a href="#connect" className="secondary-link">Interview demo flow</a>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <div className="growth-dashboard" aria-label="Website growth dashboard preview">
                    <div className="dashboard-top">
                      <span>Digital operations cockpit</span>
                      <strong>Interview demo ready</strong>
                    </div>
                    <div className="dashboard-metrics">
                      <div>
                        <span>Site health</span>
                        <strong>94%</strong>
                      </div>
                      <div>
                        <span>Enquiry path</span>
                        <strong>+20%</strong>
                      </div>
                    </div>
                    <div className="dashboard-panel">
                      <span>How I work</span>
                      <p>Audit - Fix - Track - Launch - Learn</p>
                    </div>
                    <div className="dashboard-bars">
                      <span style={{ width: "82%" }}></span>
                      <span style={{ width: "64%" }}></span>
                      <span style={{ width: "74%" }}></span>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
