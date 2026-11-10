import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import styles from "./signin.module.css";

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={styles.signinPage}>
      <div className={styles.signinContainer}>
        <div className={styles.signinBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.brandName}>ROYAL STORE</span>

            <h1>
              Welcome
              <br />
              <span>Back.</span>
            </h1>

            <p>
              Discover something beautiful. Sign in to continue your shopping
              journey with us.
            </p>

            <div className={styles.bannerBottom}>
              <span>STYLE • ELEGANCE • COMFORT</span>
            </div>
          </div>
        </div>

        <div className={styles.signinFormSection}>
          <div className={styles.formWrapper}>
            <div className={styles.formHeading}>
              <span className={styles.eyebrow}>WELCOME BACK</span>

              <h2>Sign In</h2>

              <p>Enter your details to access your account.</p>
            </div>

            <form>
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
                <label htmlFor="password">Password</label>

                <div className={styles.inputWrapper}>
                  <FiLock className={styles.inputIcon} />

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className={styles.formOptions}>
                <label className={styles.rememberMe}>
                  <input type="checkbox" name="rememberMe" />
                  <span>Remember me</span>
                </label>

                <Link to="/forgot-password" className={styles.forgotPassword}>
                  Forgot Password?
                </Link>
              </div>

              <button type="submit" className={styles.submitButton}>
                SIGN IN <FiArrowRight />
              </button>
            </form>

            <div className={styles.signupLink}>
              <p>
                Don't have an account?
                <Link to="/sign-up"> Create Account</Link>
              </p>
            </div>

            <div className={styles.formFooter}>
              <span>Secure Shopping Experience</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
