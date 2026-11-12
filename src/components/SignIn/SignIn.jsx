import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import styles from "./signin.module.css";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

const userData = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter valid email address"),
  password: z
    .string()
    .min(6, "Password must contain at least 6 characters")
    .max(64, "Password cannot exceed 64 characters"),
});

export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(userData),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        },
      );

      const result = await response.json();

      console.log("LOGIN RESPONSE:", result);

      if (!response.ok) {
        toast.error(result.message || "Sign in failed");
        return;
      }
      reset();
      navigate("/home", {
        replace: true,
      });
    } catch (error) {
      console.error("SIGNIN ERROR:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <main className={styles.signinPage}>
      <div className={styles.signinContainer}>
        <div className={styles.signinBanner}>
          <div className={styles.bannerContent}>
            <span className={styles.brandName}>STYLEORA</span>

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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>

                <div className={styles.inputWrapper}>
                  <FiMail className={styles.inputIcon} />

                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                </div>
                {errors.email && (
                  <span className={styles.error}>{errors.email.message}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>

                <div className={styles.inputWrapper}>
                  <FiLock className={styles.inputIcon} />

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Enter your password"
                    {...register("password")}
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
                {errors.password && (
                  <span className={styles.error}>
                    {errors.password.message}
                  </span>
                )}
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

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "SIGN IN"} <FiArrowRight />
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
