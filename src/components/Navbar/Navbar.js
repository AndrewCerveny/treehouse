import Header from "../Header/Header";
import "./Navbar.css";
import banner from "../../images/Tbanner3.jpg";

const Navbar = () => {
  return (
    <section className="nav-area">
      <section className="banner-bk">
        <img className="banner-img" src={banner} alt="TreeHouse banner" />
      </section>
      <nav className="navbar">
        <div className="link-wrap">
          <ul className="list-cont">
            <li>
              <span>🏠</span> HomePage
            </li>
            <li>
              <span>🎟️</span> Admissions
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
