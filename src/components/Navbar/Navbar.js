import Header from "../Header/Header";
import "./Navbar.css";
import { Link } from "react-router-dom";
// photos

const Navbar = () => {
  return (
    <section className="nav-area">
      <nav className="navbar">
        <div className="link-wrap">
          <ul className="list-cont">
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/admission">Admission</Link>
            </li>
            <li>About</li>
            <li>Party</li>
            <li>Traveling Groups</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
