import { useState } from "react";
import { useEffect } from "react";
import supabase from "../Client";
function Projects() {
  interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    created_by: string;
    created_at: string;
  }
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.log(error);
      else setData(data);
    };
    fetchData();
  }, []);

  return data.map((content) => (
    <ul key={content.id}>
      <li>{content.title}</li>
      <li>{content.description}</li>
      <li>
        <img src={content.image} alt="error" />
      </li>
      <li>{content.created_by}</li>
      <li>{content.created_at}</li>
    </ul>
  ));
}
export default Projects;
