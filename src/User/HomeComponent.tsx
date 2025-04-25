import "./HomeComponent.css";

function HomeComponent() {
  return (
    <div className="programs-section">
      <div className="program-card">
        <img src="1.png" alt="Education Program" />
        <h3>CHILD EDUCATION INITIATIVE</h3>
        <p>
          Providing quality education and safe learning environments for
          underprivileged children, helping them dream, grow, and succeed.
        </p>
      </div>

      <div className="program-card">
        <img src="2.png" alt="Women's Empowerment" />
        <h3>WOMEN EMPOWERMENT PROGRAM</h3>
        <p>
          Empowering women through skill development, entrepreneurship, and
          leadership training to foster independence and confidence.
        </p>
      </div>

      <div className="program-card">
        <img src="3.png" alt="Health & Safety" />
        <h3>HEALTH & SAFETY AWARENESS</h3>
        <p>
          Organizing health camps, hygiene workshops, and child protection
          drives to ensure well-being and safety for women and children.
        </p>
      </div>
    </div>
  );
}

export default HomeComponent;
