import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import styles from "./contact.module.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>GET IN TOUCH</p>

        <h1>
          We'd love to <span>hear from you.</span>
        </h1>

        <p>
          Have a question, suggestion, or need assistance? We're here to help
          make your shopping experience better.
        </p>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <p className={styles.eyebrow}>CONTACT INFORMATION</p>

          <h2>Let's start a conversation.</h2>

          <p className={styles.infoDescription}>
            Reach out to us through any of the following channels. Our team will
            be happy to assist you.
          </p>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiMail />
            </div>

            <div>
              <h3>Email Us</h3>
              <p>support@example.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiPhone />
            </div>

            <div>
              <h3>Call Us</h3>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiMapPin />
            </div>

            <div>
              <h3>Our Location</h3>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.iconBox}>
              <FiClock />
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday, 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={styles.contactFormContainer}>
          <h2>Send us a message</h2>

          <p>Fill out the form below and we'll get back to you.</p>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              SEND MESSAGE <FiSend />
            </button>
          </form>
        </div>
      </section>

      {/* Bottom Section */}
      <section className={styles.bottomSection}>
        <p className={styles.eyebrow}>WE'RE HERE FOR YOU</p>

        <h2>Your satisfaction matters to us.</h2>

        <p>Thank you for choosing us. We look forward to helping you.</p>
      </section>
    </main>
  );
};
