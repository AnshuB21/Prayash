import { useState } from "react";
import Data from "./MemData";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

interface Member {
  name: string;
  image: string;
  DOB: string;
  hometown: string;
  education: string;
  story: string;
}

function Members() {
  const members: Member[] = Data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };

  const current = members[currentIndex];

  return (
    <div style={styles.container}>
      <button onClick={goToPrevious} style={styles.arrow}>
        <FaArrowAltCircleLeft color="white" />
      </button>

      <div style={styles.card}>
        <img src={current.image} alt={current.name} style={styles.image} />
        <h2 style={styles.name}>{current.name}</h2>

        <div style={styles.infoBox}>
          <p>
            <strong>DOB:</strong> {current.DOB}
          </p>
          <p>
            <strong>Hometown:</strong> {current.hometown}
          </p>
          <p>
            <strong>Education:</strong> {current.education}
          </p>
        </div>

        <div style={styles.storyBox}>
          <h3>Story</h3>
          <p>{current.story}</p>
        </div>
      </div>

      <button onClick={goToNext} style={styles.arrow}>
        <FaArrowCircleRight color="white" />
      </button>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginTop: "50px",
    marginBottom: "50px",
  },
  card: {
    textAlign: "center",
    maxWidth: "400px",
    padding: "20px",
    borderRadius: "16px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
  },
  image: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
    border: "4px solid #ddd",
  },
  name: {
    marginBottom: "20px",
    fontSize: "24px",
  },
  infoBox: {
    backgroundColor: "#f3f4f6",
    padding: "12px",
    borderRadius: "10px",
    textAlign: "left",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  storyBox: {
    backgroundColor: "#e0f2fe",
    padding: "12px",
    borderRadius: "10px",
    textAlign: "left",
    lineHeight: "1.6",
  },
  arrow: {
    fontSize: "2rem",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "10px",
  },
};

export default Members;
