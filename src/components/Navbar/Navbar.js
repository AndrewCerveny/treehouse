import Header from "../Header/Header";
import "./Navbar.css";
import { Link } from "react-router-dom";
// photos
import banner from "../../images/TH_landscape.jpg";

const Navbar = () => {
  return (
    <section className="nav-area">
      <div className="banner-wrap">
        <div className="title-area">
          <h1> TreeHouse</h1>
          <h2> Absolute Best Kids' Play Address </h2>
        </div>
        <div></div>
      </div>
      <nav className="navbar">
        <div className="link-wrap">
          <ul className="list-cont">
            <li>
              <Link to="/">
                <span>🏠</span> HomePage
              </Link>
            </li>
            <li>
              <Link to="/admission">
                <span>🎟️</span> Admission
              </Link>
            </li>
            <li>
              <span>🔖</span> About
            </li>
            <li>
              <span>🧁</span> Party
            </li>
            <li>
              <span>🎒</span> Traveling Groups
            </li>
            <li>
              <span>📱</span> Contact Us
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
