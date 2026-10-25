import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="" />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          className={`${styles.navLinks} ${
            menuOpen ? styles.navLinksOpen : ""
          }`}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/" onClick={closeMenu}>
            Shop
          </Link>
          <Link to="/" onClick={closeMenu}>
            Categories
          </Link>
          <Link to="/" onClick={closeMenu}>
            About
          </Link>
          <Link to="/" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className={styles.navActions}>
          <button
            className={styles.iconButton}
            aria-label="Search products"
            onClick={() => alert("Search coming soon!")}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 4 4" />
            </svg>
          </button>

          <Link to="/" className={styles.iconButton} aria-label="Wishlist">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
            </svg>
          </Link>

          <Link to="/" className={styles.iconButton} aria-label="Shopping cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 3h2l2.5 12h10.8l2-8H6" />
              <circle cx="9" cy="19" r="1.3" />
              <circle cx="18" cy="19" r="1.3" />
            </svg>
          </Link>

          <Link to="/" className={styles.loginButton}>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
