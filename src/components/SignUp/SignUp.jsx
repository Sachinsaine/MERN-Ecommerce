import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";
import { z } from "zod";
import styles from "./signup.module.css";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const userData = z
  .object({
    name: z.string().trim().min(3, "Name must contain at least 3 characters"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    phone: z
      .string()
      .trim()
      .regex(/^[0-9]{10}$/, "Phone number must contain exactly 10 digits"),
    password: z
      .string()
      .min(6, "Password must contain at least 6 characters")
      .max(64, "Password cannot exceed 64 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    terms: z.boolean().refine((value) => value === true, {
      message: "Please accept Terms & Conditions",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(userData),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    const singUpUrl = `${import.meta.env.VITE_API_URL}/api/auth/signup`;
    console.log("signUp Url:", singUpUrl);

    try {
      const response = await fetch(singUpUrl, {
        method: "POST",

        headers: {
          "Content-type": "application/json",
        },

        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }),
      });

      console.log("Response status:", response.status);
      const result = await response.json();

      console.log("Response:", result);

      if (!response.ok) {
        toast.error(result.message || "SignUp failed");
        return;
      }

      toast.success("Sign Up successfull! Please sign in");
      reset();
      navigate("/sign-in", {
        replace: true,
      });
    } catch (error) {
      console.error("SIGNUP ERROR:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

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

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>

                <div className={styles.inputWrapper}>
                  <FiUser className={styles.inputIcon} />

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    {...register("name")}
                  />
                </div>
                {errors.name && (
                  <small className={styles.error}>{errors.name.message}</small>
                )}
              </div>

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
                  <small className={styles.error}>{errors.email.message}</small>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phone">Phone Number</label>

                <div className={styles.inputWrapper}>
                  <FiPhone className={styles.inputIcon} />

                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    {...register("phone")}
                  />
                </div>
                {errors.phone && (
                  <small className={styles.error}>{errors.phone.message}</small>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>

                <div className={styles.inputWrapper}>
                  <FiLock className={styles.inputIcon} />

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Create a password"
                    {...register("password")}
                  />

                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.password && (
                  <small className={styles.error}>
                    {errors.password.message}
                  </small>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>

                <div className={styles.inputWrapper}>
                  <FiLock className={styles.inputIcon} />

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    {...register("confirmPassword")}
                  />

                  <button
                    type="button"
                    className={styles.passwordToggle}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <small className={styles.error}>
                    {errors.confirmPassword.message}
                  </small>
                )}
              </div>

              <div>
                <label className={styles.terms}>
                  <input type="checkbox" {...register("terms")} />

                  <span>
                    I agree to the <Link to="/terms">Terms & Conditions</Link>{" "}
                    and <Link to="/privacy">Privacy Policy</Link>.
                  </span>
                </label>

                {errors.terms && (
                  <small className={styles.error}>{errors.terms.message}</small>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing up..." : "SIGN UP"} <FiArrowRight />
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
