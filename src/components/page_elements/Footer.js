import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
//css
import "../../styles/Footer.css";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  return (
    <footer className="footer-dark">
      <div className="footer-top">
        <Container>
          <Row>
            <Col sm="3">
              <h6 className="text-uppercase">Contact Us</h6>
              <ul className="list-unstyled address">
                <li>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                  <span>
                    No.26B, Jalan Astana 1C, Bandar Bukit Raja, 41050 Klang,
                    Selangor.
                  </span>
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:dave@kuarzabumi.my" className="ml-2">
                    enquiry@kuarzabumi.my
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  <span>+6016 222 7779</span>
                </li>
              </ul>
            </Col>
            <Col sm="9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0307939151066!2d101.45091831475717!3d3.0864558977524474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc53979fe48c15%3A0x41032e925b7d5699!2s26%2C+Jalan+Astana+1C%2C+41050+Shah+Alam%2C+Selangor%2C+Malaysia!5e0!3m2!1sen!2sin!4v1553260236839"
                className="map"
                title="map"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer-bottom">
        <Container>
          <Row>
            <Col sm="8">
              © 2020 kuarzabumi.my All rights reserved. Designed and developed
              by{" "}
              <a href="https://www.spiders.asia/" style={{ color: "#ffff" }}>
                Spider Asia Sdn Bhd
              </a>
            </Col>
            <Col sm="4" className="text-right">
              <ul className="list-unstyled list-inline footer-social">
                <li className="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedinIn} />{" "}
                  </a>{" "}
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
export default Footer;
