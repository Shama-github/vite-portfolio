import { useState } from "react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Navbar({ activeSection, onNavClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand} onClick={() => handleClick("hero")}>
          <span className={styles.logo}>JD</span>
          <span className={styles.name}>John Doe</span>
        </div>

        <button
          className={styles.menuButton}
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={styles.menuIcon} />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  className={`${styles.navLink} ${
                    activeSection === item.id ? styles.active : ""
                  }`}
                  onClick={() => handleClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;


