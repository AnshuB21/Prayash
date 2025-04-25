import { JSX } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";
function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <ul className="icons">
        <li>
          <a
            style={{ color: "white" }}
            href="https://www.facebook.com/Prabalta"
          >
            <FaFacebookSquare />{" "}
          </a>
        </li>
        <li>
          <a
            style={{ color: "white" }}
            href="https://www.instagram.com/prayas_foundation_banke/"
          >
            <FaInstagram />{" "}
          </a>{" "}
        </li>
        <li>
          <AiFillTikTok />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <ul className="footer-links">
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </footer>
  );
}
export default Footer;
