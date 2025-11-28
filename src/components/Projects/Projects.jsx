import ProjectCard from "./ProjectCard.jsx";
import styles from "./Projects.module.css";

const projects = [
  {
    title: "Developer Portfolio",
    description:
      "A responsive portfolio template for developers with smooth scrolling, project highlights, and blog integration.",
    tech: ["React", "Vite", "CSS Modules"],
    link: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing product metrics, conversion funnels, and cohort analysis.",
    tech: ["TypeScript", "React", "Recharts", "Node.js"],
    link: "#",
  },
  {
    title: "Design System",
    description:
      "Reusable, accessible component library powering multiple internal applications across teams.",
    tech: ["React", "Storybook", "Styled Components"],
    link: "#",
  },
];

function Projects() {
  return (
    <div className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <p className={styles.intro}>
        Selected work and experiments focused on performance, UX, and developer experience.
      </p>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;


