import styles from "./Experience.module.css";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Acme Corp",
    period: "2022 – Present",
    description:
      "Leading the development of a multi-tenant SaaS platform, mentoring engineers, and collaborating with design and product on roadmap planning.",
  },
  {
    role: "Full-Stack Engineer",
    company: "Productify",
    period: "2019 – 2022",
    description:
      "Built end-to-end features across the stack, improved performance, and introduced testing and deployment best practices.",
  },
];

const education = [
  {
    title: "B.S. in Computer Science",
    institution: "Tech University",
    period: "2015 – 2019",
  },
];

function Experience() {
  return (
    <div className={styles.experience}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.layout}>
        <div>
          <h3 className={styles.subheading}>Work</h3>
          <ul className={styles.timeline}>
            {experience.map((item) => (
              <li key={item.role} className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.role}>{item.role}</span>
                  <span className={styles.company}>{item.company}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>
                <p className={styles.description}>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subheading}>Education</h3>
          <ul className={styles.timeline}>
            {education.map((item) => (
              <li key={item.title} className={styles.item}>
                <div className={styles.itemHeader}>
                  <span className={styles.role}>{item.title}</span>
                  <span className={styles.company}>{item.institution}</span>
                  <span className={styles.period}>{item.period}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;


