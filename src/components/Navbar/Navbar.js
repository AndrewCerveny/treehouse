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
            <li> 🏠 HomePage</li>
            <li> 🎟️ Admission</li>
            <li> 🔖 About</li>
            <li> 🧁 Party</li>
            <li> 🎒 Traveling Groups</li>
            <li> 📱 Contact Us</li>
          </ul>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
