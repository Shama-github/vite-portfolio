import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>Contact</h2>
      <p className={styles.intro}>
        Have a role, project, or idea you&apos;d like to discuss? Reach out and
        let&apos;s talk.
      </p>
      <div className={styles.layout}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Tell me a bit about what you're looking for..."
            />
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
        <div className={styles.sidebar}>
          <h3>Other ways to connect</h3>
          <ul>
            <li>
              <span className={styles.label}>Email</span>
              <a href="mailto:hello@example.com">hello@example.com</a>
            </li>
            <li>
              <span className={styles.label}>GitHub</span>
              <a href="https://github.com/example" target="_blank" rel="noreferrer">
                github.com/example
              </a>
            </li>
            <li>
              <span className={styles.label}>LinkedIn</span>
              <a href="https://linkedin.com/in/example" target="_blank" rel="noreferrer">
                linkedin.com/in/example
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;


