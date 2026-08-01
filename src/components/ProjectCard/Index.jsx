import "./ProjectCard.scss";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} aria-label={project.ariaLabel} />
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label="Technologies utilisées">
          {project.stack.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="project-links">
          <a href={project.links.github}>GitHub</a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;