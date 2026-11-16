import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiHeart, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { useCartStore } from "../../store/cartStore";
import toast from "react-hot-toast";
import { DashboardContext } from "../context/DashboardContext";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const totalProducts = useCartStore((state) => state.cart.length);

  const navigate = useNavigate();

  const clearCart = useCartStore((state) => state.clearCart);
  const { setWishlist } = useContext(DashboardContext);
  const { user, setUser, authLoading } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Logout failed");
      }

      setUser(null);
      clearCart();
      setWishlist([]);

      toast.success("Logout successful!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Logout failed");
    }
  };

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

          {!authLoading &&
            (user ? (
              <button className={styles.logoutButton} onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to="/sign-in" className={styles.loginButton}>
                Sign In
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};
