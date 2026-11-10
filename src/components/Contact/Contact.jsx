import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import styles from "./contact.module.css";

export const Contact = () => {
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

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
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
                required
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              SEND MESSAGE <FiSend />
            </button>
          </form>
        </div>
      </section>

      <div className={styles.mapContainer}>
        <iframe
          title="Our Location - SBR Arcade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5392504190704!2d78.40268477438948!3d17.433885601465526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b4795b8145%3A0x9a54c648fb058eb3!2sSBR%20Arcade!5e0!3m2!1sen!2sin!4v1794293180910!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <section className={styles.bottomSection}>
        <p className={styles.eyebrow}>WE'RE HERE FOR YOU</p>

        <h2>Your satisfaction matters to us.</h2>

        <p>Thank you for choosing us. We look forward to helping you.</p>
      </section>
    </main>
  );
};
