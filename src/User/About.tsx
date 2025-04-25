import "./About.css";
import { FaHeart, FaRocket, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      {/* Top Section */}
      <div className="about-top">
        <div className="founder-image">
          <img src="image.png" alt="Founder" />
          <p className="founder-name">SANDHYA SHAH</p>
        </div>
        <div className="founder-quote">
          <h1 style={{ margin: "2rem", color: "white" }}>
            Learn How everything Started
          </h1>
          <p>
            “ Everything started as in COVID lockdown when the under priviledge
            families in my areas were acting differently then they should.
            Everyone got instructions clearly from the government, and the sad
            part hit when I asked a children why are you roaming around going
            here and there, he said his parents didnot say about any of this. It
            hit me how Government school were not teaching them enough, when
            first lockdown cooled , I decided to teach them in balcony of my
            house because I couldn't afford any other place.”
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="about-grid">
        <div className="about-box">
          <FaHeart size={32} />
          <p>Passion for excellence in every detail.</p>
          <img style={{ width: "100px" }} src="3d.png" alt="Founder" />
        </div>
        <div className="divider" />
        <div className="about-box">
          <FaRocket size={32} />

          <p>Driving innovation with purpose.</p>
          <img style={{ width: "100px" }} src="Homeimg.png" alt="Founder" />
        </div>
        <div className="divider" />
        <div className="about-box">
          <FaLightbulb size={32} />
          <p>Ideas that change the world.</p>
          <img style={{ width: "100px" }} src="group.png" alt="Founder" />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-bottom">
        <p className="quote">“Building a better tomorrow.”</p>
        <p className="explanation">
          “Namaste to everyone, It is both an honor and a humble privilege to
          share you as the founder of this organization, as someone who believes
          deeply in the power of compassion, community, and courage. When we
          started this journey, it was never about grand gestures or big
          headlines. It was about the quiet cries of the children who went to
          school without bags. It was about the silent strength of the mothers
          who sacrificed everything just so their families could survive. It was
          about the forgotten voices in the villages of Nepal—voices that
          deserved to be heard. Our NGO was born out of a simple yet powerful
          belief: every child deserves a chance, and every woman deserves
          dignity. In a world full of injustice, we are here to bring light. In
          the darkest corners of poverty, we are here to build hope. Over the
          past years, we have worked hand-in-hand with communities to: Provide
          safe shelter and education to children who were otherwise lost in the
          cracks of society, Empower women through skill-building, healthcare,
          and financial independence, And advocate for sustainable,
          community-driven solutions that honor our culture while pushing for
          progress. Every uniform given, every workshop held, every life
          touched—it is a thread in the fabric of a stronger Nepal. To our
          donors, volunteers, partners, and especially the local families who
          trust us—you are the heartbeat of this mission. Your kindness fuels
          our momentum, your belief drives our purpose. ”
        </p>
      </div>
    </div>
  );
}

export default About;
