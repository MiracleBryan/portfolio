import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/RW.png";
import navIcon1 from "../assets/img/github-mark-white.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/MiracleBryan"><img src={navIcon1} alt="" /></a>
              {/* <a href="#"><img src={navIcon2} alt="" /></a> */}
              <a href="https://www.instagram.com/mir_acle3333/profilecard/?igsh=aXU1eXJpcGlwcXBs"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}