import {
  FiTruck,
  FiShield,
  FiRefreshCcw,
  FiHeadphones,
  FiAward,
  FiGift,
  FiArrowRight,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import styles from "./services.module.css";

const services = [
  {
    icon: <FiTruck />,
    title: "Fast & Free Delivery",
    description:
      "Enjoy quick and reliable delivery right to your doorstep. Free shipping on eligible orders.",
    number: "01",
  },
  {
    icon: <FiShield />,
    title: "Secure Payments",
    description:
      "Shop with confidence using our secure payment process. Your information stays protected.",
    number: "02",
  },
  {
    icon: <FiRefreshCcw />,
    title: "Easy Returns & Exchanges",
    description:
      "Not completely satisfied? Our simple return and exchange process makes shopping easier.",
    number: "03",
  },
  {
    icon: <FiHeadphones />,
    title: "Customer Support",
    description:
      "Our friendly support team is here to help you with your questions and shopping needs.",
    number: "04",
  },
  {
    icon: <FiAward />,
    title: "Premium Quality",
    description:
      "We carefully select our products to bring you quality, style, and great value.",
    number: "05",
  },
  {
    icon: <FiGift />,
    title: "Exclusive Offers",
    description:
      "Discover special deals, exciting discounts, and exclusive shopping experiences.",
    number: "06",
  },
];

export const Services = () => {
  return (
    <main className={styles.servicesPage}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>WHAT WE OFFER</span>

          <h1>
            Services Designed
            <br />
            <span>For You.</span>
          </h1>

          <p>
            More than just shopping. We bring you convenience, quality,
            security, and a seamless shopping experience at every step.
          </p>

          <Link to="/home" className={styles.heroButton}>
            EXPLORE COLLECTION <FiArrowRight />
          </Link>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.sectionHeading}>
          <span className={styles.eyebrow}>OUR SERVICES</span>

          <h2>Everything You Need, All in One Place.</h2>

          <p>
            We make every shopping experience special with services you can
            trust.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <div className={styles.serviceCard} key={service.number}>
              <div className={styles.cardTop}>
                <span className={styles.serviceNumber}>{service.number}</span>

                <div className={styles.iconBox}>{service.icon}</div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className={styles.cardLine}></div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContent}>
          <span className={styles.eyebrow}>WHY ROYAL STORE?</span>

          <h2>
            Your Satisfaction
            <br />
            Is Our <span>Priority.</span>
          </h2>

          <p>
            From discovering your favorite products to receiving your order, we
            focus on making every step simple, reliable, and enjoyable.
          </p>

          <Link to="/contact" className={styles.contactButton}>
            TALK TO OUR TEAM <FiArrowRight />
          </Link>
        </div>

        <div className={styles.whyChooseStats}>
          <div className={styles.statItem}>
            <h3>100%</h3>
            <p>Customer Focused</p>
          </div>

          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Online Shopping</p>
          </div>

          <div className={styles.statItem}>
            <h3>6+</h3>
            <p>Customer Services</p>
          </div>

          <div className={styles.statItem}>
            <h3>1st</h3>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      <section className={styles.bottomSection}>
        <span className={styles.eyebrow}>YOUR JOURNEY STARTS HERE</span>

        <h2>Experience Shopping The Royal Way.</h2>

        <p>
          Explore our collection and enjoy a shopping experience designed around
          you.
        </p>

        <Link to="/home" className={styles.bottomButton}>
          START SHOPPING <FiArrowRight />
        </Link>
      </section>
    </main>
  );
};
