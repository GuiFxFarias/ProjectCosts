import "./FooterStyle.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <ul className="listFa">
        <li>
          <FaFacebook></FaFacebook>
        </li>
        <li>
          <FaInstagram></FaInstagram>
        </li>
        <li>
          <FaLinkedin></FaLinkedin>
        </li>
      </ul>
      <p className="copyRight">
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
