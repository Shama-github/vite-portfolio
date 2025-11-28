import styles from "./Skills.module.css";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Vite", "Next.js", "Tailwind CSS", "CSS Modules"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "CI/CD", "GitHub Actions", "AWS", "Vercel", "Jest"],
  },
];

function Skills() {
  return (
    <div className={styles.skills}>
      <h2 className={styles.heading}>Skills</h2>
      <p className={styles.intro}>
        A snapshot of the technologies and tools I work with most frequently.
      </p>
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.card}>
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;


