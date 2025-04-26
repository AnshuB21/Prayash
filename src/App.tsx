import AdminDashboard from "./Admin/adminDashboard";
import Homepage from "./User/Homepage";
import NavBar from "./NavBar";
import About from "./User/About";
import Projects from "./User/Projects";
import Members from "./User/Members";
import Error from "./Error";
import LoginPage from "./Admin/LoginPage";
import { Routes, Route } from "react-router-dom";
import ProjectComponent from "./User/ProjectComponent";
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="members" element={<Members />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<ProjectComponent />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="adminpanel" element={<AdminDashboard />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
