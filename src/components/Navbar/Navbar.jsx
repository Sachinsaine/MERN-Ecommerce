import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { DashboardContext } from "../context/DashboardContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartProducts } = useContext(DashboardContext);

  const closeMenu = () => setMenuOpen(false);
  const totalAddedProducts = cartProducts.length;

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
          <Link to="/" onClick={closeMenu}>
            Shop
          </Link>
          <Link to="/" onClick={closeMenu}>
            Categories
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </div>

        <div className={styles.navActions}>
          <button
            className={styles.iconButton}
            aria-label="Search products"
            onClick={() => alert("Search coming soon!")}
          >
            <FiSearch />
          </button>

          <Link to="/" className={styles.iconButton} aria-label="Wishlist">
            <FiHeart />
          </Link>

          <Link to="/mycart" className={styles.iconButton}>
            <FiShoppingCart />

            <span className={styles.cartBadge}>
              {totalAddedProducts > 99 ? "99+" : totalAddedProducts}
            </span>
          </Link>

          <Link to="/" className={styles.loginButton}>
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
};
