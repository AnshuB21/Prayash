import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../Client";
import "./ProjectComponent.css"; // Import your CSS file for styling

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  created_by: string;
  created_at: string;
}

function ProjectComponent() {
  const { id } = useParams();
  const [projectData, setProjectData] = useState<Project | null>(null); // should be SINGLE Project, not array

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return; // handle if id is undefined

      const { data, error } = await supabase
        .from("projects")
        .select("*") // select all columns
        .eq("id", id) // filter by id
        .single(); // fetch a single row

      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setProjectData(data);
      }
    };
    fetchData();
  }, [id]); // add id in dependency array

  if (!projectData) {
    return <p>Loading...</p>;
  }

  return (
    <main>
      <h1>Project Details</h1>
      <div className="project-details">
        <h2>{projectData.title}</h2>
        <img src={projectData.image} alt={projectData.title} />
        <p>{projectData.description}</p>

        <p>Created by: {projectData.created_by}</p>
      </div>
    </main>
  );
}

export default ProjectComponent;
