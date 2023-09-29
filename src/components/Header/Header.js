import facebook from "../../images/facebook.png";
import instagram from "../../images/insta.png";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-area">
      <section className="tel-area">
        <label>
          Telephone:
          <p className="tel">(734)475-1555</p>
        </label>
      </section>
      <section className="follow-us">
        <p className="follow-wrap">Follow Us</p>
        <div className="icon-wrap">
          <img className="h-icon" src={facebook} alt="facebook icon" />
          <img className="h-icon" src={instagram} alt="instagram icon" />
        </div>
      </section>
    </section>
  );
};

export default Header;
