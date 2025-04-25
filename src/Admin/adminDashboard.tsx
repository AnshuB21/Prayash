import { JSX } from "react";
import { useState } from "react";
import supabase from "../Client";

function adminDashboard(): JSX.Element {
  const postType = {
    title: "",
    description: "",
    image: "",
    created_by: "",
  };
  const [postProject, setpostProject] = useState<typeof postType>(postType);
  const [file, setFile] = useState<File | null>(null);
  const [fileURL, setFileURL] = useState("");

  //handle the Onchange in the file input
  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
  };

  //Onsubmit function
  const PostData = async (e: React.FormEvent) => {
    e.preventDefault();

    //edit url image
    if (!file) {
      alert("Please select a file before submitting.");
      return;
    }
    //Check if the file is an image
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `${fileName}`;
    //For image upload
    const { error: uploadError } = await supabase.storage
      .from("prayash")
      .upload(filePath, file);
    if (uploadError) {
      throw new Error("Error uploading image: " + uploadError.message);
    }

    //Needs to get public url as well
    const { data: url } = await supabase.storage
      .from("prayash")
      .getPublicUrl(filePath);

    setFileURL(url.publicUrl);
    alert("Image uploaded successfully!");

    //Insert data into the database
    const publicUrl = url.publicUrl;

    // Add the image URL to the post object
    const projectWithImage = {
      ...postProject,
      image: publicUrl,
    };

    const { error } = await supabase
      .from("projects")
      .insert([projectWithImage]);
    if (error) {
      console.log("Error inserting data:", error);
    }
    setpostProject({
      title: "",
      description: "",
      image: "",
      created_by: "",
    });
  };
  return (
    <div>
      <h1> Admin Dashboard</h1>
      <form onSubmit={PostData}>
        <div className="mb-1">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={postProject.title}
            onChange={(e) => {
              setpostProject({ ...postProject, title: e.target.value });
            }}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={4}
            cols={50}
            placeholder="Enter your description here..."
            id="description"
            value={postProject.description}
            onChange={(e) => {
              setpostProject({
                ...postProject,
                description: e.target.value,
              });
            }}
          />
        </div>
        {/* <div className="mb-1">
          <label htmlFor="image">Location </label>
          <input
            type="text"
            id="image"
            value={postProject.image}
            onChange={(e) => {
              setpostProject({ ...postProject, image: e.target.value });
            }}
          />
        </div> */}
        <div className="mb-1">
          <label htmlFor="created_by">Created BY:</label>
          <input
            type="text"
            id="created_by"
            value={postProject.created_by}
            onChange={(e) => {
              setpostProject({ ...postProject, created_by: e.target.value });
            }}
          />
        </div>
        {/* Handling the file upload */}
        <div className="mb-1">
          <label htmlFor="image">Upload image:</label>
          <input
            type="file"
            id="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default adminDashboard;
