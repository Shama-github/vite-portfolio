import styles from "./Hero.module.css";

function Hero({ onCtaClick }) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Software Engineer · Full Stack</p>
        <h1 className={styles.title}>
          Building <span>modern</span> web experiences.
        </h1>
        <p className={styles.subtitle}>
          I’m John Doe, a software engineer focused on crafting clean, high-performing
          interfaces and scalable backends using modern web technologies.
        </p>
        <div className={styles.actions}>
          <button className={styles.primaryBtn} onClick={onCtaClick}>
            View Projects
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className={styles.profileCard}>
        <div className={styles.avatarPlaceholder}>JD</div>
        <div className={styles.profileMeta}>
          <span className={styles.metaLabel}>Current Role</span>
          <span className={styles.metaValue}>Senior Software Engineer @ Acme</span>
        </div>
        <div className={styles.profileMeta}>
          <span className={styles.metaLabel}>Location</span>
          <span className={styles.metaValue}>Remote · Anywhere</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;


