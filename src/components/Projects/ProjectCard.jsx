import styles from "./ProjectCard.module.css";

function ProjectCard({ title, description, tech, link }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            View
          </a>
        )}
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.techList}>
        {tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default ProjectCard;


