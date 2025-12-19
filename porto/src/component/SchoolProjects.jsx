import { useEffect, useState } from "react";
import { getProjects } from "../apis/ProjectApi";
import ProjectCard from "./ProjectCard";
import "../views/css/ProjectCard.css";
import "../views/css/SchoolProjects.css"; // Added import for specific section styles

const SchoolProjects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjects()
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Fout bij het laden van projecten.");
        setLoading(false);
      });
  }, []);

  // Render loading skeletons while data is being fetched
  const renderSkeletons = () => {
    return Array.from({ length: 3 }).map((_, index) => (
      <div className="loading-skeleton" key={`skeleton-${index}`}></div>
    ));
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">School Projects</h2>

      {error && (
        <div className="error-message">{error}</div>
      )}

      <div className="projects-grid">
        {loading ? (
          renderSkeletons()
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              summary={project.summary}
              technologies={project.technologies}
              link={project.link}
            />
          ))
        ) : (
          <div className="empty-message">Geen projecten beschikbaar op dit moment.</div>
        )}
      </div>
    </div>
  );
};

export default SchoolProjects;