import "./Homepage.css";
import Homeswiper from "../Homeswipe/Homeswipe";
// Photos
import newsUpdate from "../../images/newsUpdate.png";
import emblem from "../../images/treeHouseEmblem.jpeg";
import treeHours from "../../images/TreeHours.jpg";
const Homepage = () => {
  return (
    <section>
      <Homeswiper />
      <div className="hours-title">
        <img src={treeHours} alt="TreeHouse Hours title" />
      </div>
      <section className="hours-area">
        <article>
          <h2> Fall / Winter Hours </h2>
          <h3> September - May </h3>
          <section>
            <h3 className="head-t"> Work Week </h3>
            <p className="hours-p">
              Monday: <span> CLOSED </span>
              <br />
              Tuesday - Friday: <span> 10am - 3pm</span>
              <br />
              Saturday: <span>10am - 6pm</span>
              <br />
              Sunday:<span>10am - 4pm</span>
            </p>
          </section>
          <section>
            <h3 className="head-t"> Holidays</h3>
            <p className="hours-p">
              Labor Day Weekend:<span> Sep 1-11 Closed</span>
              <br />
              Thanksgiving: <span> Nov 23 Closed </span>
              <br />
              Christmas: <span> Dec 22-26 Closed</span>
              <br />
              New Years: <span> Dec 31 - Jan 2 Closed</span>
              <br />
              Easter Weekend <span> Fri - Sun Closed </span>
            </p>
          </section>
        </article>
        <article>
          <h2> Spring / Summer Hours </h2>
          <h3> May - August </h3>
          <section>
            <h3 className="head-t"> Work Week </h3>
            <p className="hours-p">
              Monday: <span> CLOSED </span>
              <br />
              Tuesday - Friday: <span> 10am - 3pm</span>
              <br />
              Saturday: <span>10am - 2pm</span>
              <br />
              Sunday:<span>10am - 2pm</span>
            </p>
          </section>
          <section>
            <h3 className="head-t"> Holidays</h3>
            <p className="hours-p">
              Mother's Day:<span> Sun Closed </span>
              <br />
              Memorial Day Weekend: <span> Sat- Mon Closed </span>
              <br />
              Father's Day : <span> Sun Closed</span>
              <br />
              4th of July Weekend: <span> Jul 1 - Jul 4 Closed</span>
            </p>
          </section>
        </article>
      </section>
      <section className="news-updates">
        <img
          className="news-img"
          src={newsUpdate}
          alt="image of Mother and Kids"
        />
        <h2> TreeHouse News and Updates:</h2>
        <h3> Attention TreeHouse Fans!</h3>
        <article className="news-wrap">
          <p className="news-p1">
            The TreeHouse has been helping a local preschool out during our
            closure- by providing a safe place for their students to learn while
            they wait for the buildings occupancy license. The preschool has
            asked to extend their time here at the TreeHouse for 1 more
            additional week.
            <br />
            <br />
            We know how important education is- and it is an honor to be able to
            provide a safe, clean and fun environment for their students.
            <br />
            <br />
            <strong>
              The TreeHouse will be closed on Monday, September 18th, to Friday,
              September 22nd
            </strong>
            <br />
            <br />
            <strong>
              <em> NO OPEN PLAY IS AUTHORIZED DURING THIS TIME</em>
            </strong>
          </p>
          <br />
          <br />
          <p className="news-p2">
            We <strong>WILL</strong> be open to the public on Saturday,
            September 15th-16th (10a-6p SAT, 10a-4p SUN).
            <br />
            <br />
            The TreeHouse will be back to our regular business hours (10a-6p) on
            Saturday, September 23rd, 2023. We know how missed the TreeHouse has
            been. We miss all of our friends, too!
            <br />
            <br />
            Thank you so much for all the love, support, and understanding.
            We'll be back in no time!
          </p>
          <div className="emblem-wrap">
            <img className="emblem-img" src={emblem} alt="TreeHouse Icon" />
          </div>
        </article>
      </section>
    </section>
  );
};
export default Homepage;
