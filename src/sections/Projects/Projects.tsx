import "./Projects.css";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="links">
              <a href={project.github} target="_blank">
                GitHub
              </a>
              <a href={project.live} target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}