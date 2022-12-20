import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import logo from "../img/costs_logo.png";
import Container from "./Container";

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to={"/"}>
          <img src={logo} alt="Logo_Costs" />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="item">
            <Link to={"/Projects"}>Projects</Link>
          </li>
          <li className="item">
            <Link to={"/Contato"}>Contact</Link>
          </li>
          <li className="item">
            <Link to={"/Empresa"}>Company</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
