import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";
import styles from "./signup.module.css";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <div className={styles.signupBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.brandName}>STYLEORA</span>

            <h1>
              Create Your
              <br />
              <span>Account.</span>
            </h1>

            <p>
              Join our community and discover a world of beautiful products,
              exclusive collections, and special offers.
            </p>

            <div className={styles.bannerBottom}>
              STYLE • ELEGANCE • COMFORT
            </div>
          </div>
        </div>

        <div className={styles.signupFormSection}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeading}>
              <span className={styles.eyebrow}>JOIN OUR COMMUNITY</span>

              <h2>Create Account</h2>

              <p>Fill in your details to get started.</p>
            </div>

            <form>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>

                <div className={styles.inputWrapper}>
                  <FiUser className={styles.inputIcon} />

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>

                <div className={styles.inputWrapper}>
                  <FiMail className={styles.inputIcon} />

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>

                <div className={styles.inputWrapper}>
                  <FiPhone className={styles.inputIcon} />

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>

                <div className={styles.inputWrapper}>
                  <FiLock className={styles.inputIcon} />

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    minLength="6"
                    required
                  />

                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>

                <div className={styles.inputWrapper}>
                  <FiLock className={styles.inputIcon} />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    minLength="6"
                    required
                  />

                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <label className={styles.terms}>
                <input type="checkbox" name="terms" required />

                <span>
                  I agree to the <Link to="/terms">Terms & Conditions</Link> and{" "}
                  <Link to="/privacy">Privacy Policy</Link>.
                </span>
              </label>

              <button type="submit" className={styles.submitButton}>
                CREATE ACCOUNT <FiArrowRight />
              </button>
            </form>

            <div className={styles.signinLink}>
              <p>
                Already have an account?
                <Link to="/sign-in"> Sign In</Link>
              </p>
            </div>

            <div className={styles.formFooter}>Secure Shopping Experience</div>
          </div>
        </div>
      </div>
    </main>
  );
};
