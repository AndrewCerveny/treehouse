import "./Admission.css";
import playZone from "../../images/admission_pg.jpg";

const Admission = () => {
  return (
    <section className="admission-area">
      <img className="play-zone-pic" src={playZone} alt="play area picture" />
      <div className="entry-wr">
        <h2> 🌳 Admission 🛝 </h2>
        <section className="entry-options">
          <ul>
            <li> $12 per Child (Adults and Children under 12 months FREE)</li>
            <li> Open play during business hours</li>
            <li> No Reservations unless for Party Bookings</li>
            <li> Unlimited Play Time </li>
            <li> No re-entry for kids </li>
          </ul>
        </section>
      </div>
      <div className="rules-area">
        <h2> Rules of Conduct </h2>
        <ul>
          <li> No outside food,drinks,or cake</li>
          <li> No outside decorations </li>
          <li> Children must wear socks </li>
        </ul>
      </div>
      <section className="call-out">
        <p>
          {" "}
          No Longer accepting PUNCH CARDS, GIFT CERTS, TreeHouse CASH etc: Sold
          by previous owner
        </p>
      </section>
    </section>
  );
};
export default Admission;
