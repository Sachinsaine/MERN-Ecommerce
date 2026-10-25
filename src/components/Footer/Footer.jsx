import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./footer.module.css";
import logo from "../../assets/logo.png";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    alert("Thank you for subscribing to STYLEORA!");
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.brandSection}>
          <Link to="/" className={styles.logo}>
            <img src={logo} alt="" />
          </Link>

          <p className={styles.brandDescription}>
            Discover your style, express your personality. Explore the latest
            fashion trends and find something that feels uniquely you.
          </p>

          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.5A22 22 0 0 0 15.2 1C12.4 1 10.5 2.7 10.5 6v3H7v4h3.5v8" />
              </svg>
            </a>

            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.8.2-2.7l1.3-5.5s-.3-.6-.3-1.5c0-1.4.8-2.5 1.9-2.5.9 0 1.3.7 1.3 1.6 0 1-.6 2.6-.9 4-.2 1.2.6 2.1 1.8 2.1 2.1 0 3.7-2.7 3.7-5.9 0-2.4-1.6-4.2-4.5-4.2-3.3 0-5.4 2.5-5.4 5.2 0 .9.3 1.9.8 2.4.2.2.2.3.1.6l-.3 1c-.1.3-.3.4-.6.3-1.5-.6-2.2-2.3-2.2-4.2 0-3.1 2.6-6.8 7.8-6.8 4.2 0 7 3 7 6.3 0 4.3-2.4 7.5-6 7.5-1.2 0-2.4-.7-2.8-1.5l-.8 3c-.3 1-.8 1.9-1.3 2.7A10 10 0 1 0 12 2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.footerColumn}>
          <h3>SHOP</h3>
          <Link to="/">New Arrivals</Link>
          <Link to="/">Women</Link>
          <Link to="/">Men</Link>
          <Link to="/">Accessories</Link>
          <Link to="/">Sale</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>HELP & SUPPORT</h3>
          <Link to="/">Contact Us</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Shipping Information</Link>
          <Link to="/">Returns & Exchanges</Link>
          <Link to="/">Track Your Order</Link>
        </div>

        <div className={styles.newsletter}>
          <h3>STAY IN STYLE</h3>
          <p>
            Subscribe to receive updates, exclusive offers, and the latest
            fashion inspiration.
          </p>

          <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>

          <p className={styles.privacyText}>
            By subscribing, you agree to receive our updates.
          </p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} STYLEORA. All rights reserved.</p>

        <div className={styles.legalLinks}>
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
        </div>

        <p className={styles.madeWith}>
          Made with <span>♥</span> for fashion lovers
        </p>
      </div>
    </footer>
  );
};
