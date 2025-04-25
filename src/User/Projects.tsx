import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import supabase from "../Client";
import "./Project.css";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  created_by: string;
  created_at: string;
}

function Projects() {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.log(error);
      else setData(data || []);
    };
    fetchData();
  }, []);

  return (
    <main className="projects-page">
      <header className="projects-header">
        <h1>Our Projects</h1>
        <p>
          Explore the initiatives we've taken to empower women and children.
          Each project is a step toward a brighter, more inclusive future.
        </p>
      </header>

      <section className="projects-grid">
        {data.map((content) => (
          <div className="project-card" key={content.id}>
            <Link to={`/projects/${content.id}`}>
              <img src={content.image} alt={content.title} />
              <div className="project-info">
                <h2>{content.title}</h2>
                <p>{content.description.slice(0, 100)}...</p>
                <button>View More</button>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Projects;
