import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        I&apos;m a software engineer with a passion for building elegant, user-centric
        products. Over the past few years, I&apos;ve shipped production-grade web
        applications, design systems, and APIs across startups and enterprise teams.
      </p>
      <p className={styles.text}>
        My focus is on creating experiences that feel effortless—clean UI, accessible
        interactions, and performant, maintainable code. I enjoy collaborating closely
        with design, product, and engineering teams to turn complex problems into simple
        solutions.
      </p>
      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>What I do</h3>
          <p>
            Full-stack development with React, TypeScript, Node.js, and modern tooling.
            I care deeply about DX and CI/CD workflows.
          </p>
        </div>
        <div className={styles.card}>
          <h3>How I work</h3>
          <p>
            Pragmatic, data-informed, and user-driven. I value clear communication,
            thoughtful abstractions, and continuous improvement.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Beyond code</h3>
          <p>
            Mentoring junior developers, contributing to open-source, and experimenting
            with new technologies and UX patterns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;


