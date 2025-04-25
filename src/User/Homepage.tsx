import "./Homepage.css";
import HomeComponent from "./HomeComponent";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="homepage">
        <div className="Slogan">
          <span>Our Program</span>
          <h1>
            If you cannot be the sun that lights up the world, be a streetlight
            that lights up a street.
          </h1>
        </div>

        <div className="Slogan2">
          <h1>Empowering Change, One Step at a Time</h1>
          <p>
            At Prayas Foundation Nepal, we believe that even the smallest effort
            can create ripples of transformation. Our mission is to uplift
            underprivileged communities through education, healthcare, and
            sustainable development programs. Whether it's sponsoring a child's
            education, conducting health camps in remote areas, or empowering
            women with vocational training, we strive to make a difference every
            day.
            <br />
            <br />
            Join us in lighting the path of hope—because meaningful change
            starts with you.
          </p>
        </div>
      </div>
      <HomeComponent />
      <article>
        <section>
          <h1> SEE WHAT HAVE WE DONE SO FAR. LIVES TOUCHED, HEARTS HEALED</h1>
          <button>
            <Link to="/about">
              BROWSE HERE <FaArrowRight />
            </Link>
          </button>
        </section>
        <img src="Homeimg.png" alt="photo" />
      </article>
    </>
  );
}

export default Homepage;
