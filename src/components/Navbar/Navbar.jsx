import { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { useCartStore } from "../../store/cartStore";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);
  const totalProducts = useCartStore((state) => state.cart.length);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo} onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div
          className={`${styles.navLinks} ${
            menuOpen ? styles.navLinksOpen : ""
          }`}
        >
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/blog" onClick={closeMenu}>
            Blog
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className={styles.navActions}>
          <Link
            to="/wishlist"
            className={styles.iconButton}
            aria-label="Wishlist"
          >
            <FiHeart />
          </Link>

          <Link to="/mycart" className={styles.iconButton}>
            <FiShoppingCart />

            <span className={styles.cartBadge}>
              {totalProducts > 99 ? "99+" : totalProducts}
            </span>
          </Link>

          <Link to="/sign-in" className={styles.loginButton}>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
