import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Meisi Xu Digital Growth" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/kate666kate" aria-label="GitHub profile"><img src={navIcon1} alt="" /></a>
              <a href="mailto:katexu2026@gmail.com" aria-label="Email Meisi"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Meisi Xu - Digital Growth Portfolio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
