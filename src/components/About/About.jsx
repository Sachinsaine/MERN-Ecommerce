import { FiHeart, FiStar, FiShoppingBag } from "react-icons/fi";
import styles from "./about.module.css";

export const About = () => {
  return (
    <main className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>ABOUT US</p>

        <h1>
          Style is a way to
          <span> express yourself.</span>
        </h1>

        <p className={styles.heroDescription}>
          Discover fashion that inspires confidence, celebrates individuality,
          and makes every moment special.
        </p>
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className={styles.storyContent}>
          <p className={styles.eyebrow}>OUR STORY</p>

          <h2>
            Fashion that feels
            <span> like you.</span>
          </h2>

          <p>
            We believe fashion is more than just clothing and accessories. It is
            a reflection of your personality, confidence, and individuality.
          </p>

          <p>
            Our goal is to bring together stylish collections that help everyone
            discover their own unique look. From everyday essentials to special
            occasion favorites, we make shopping simple and enjoyable.
          </p>
        </div>

        <div className={styles.storyImage}>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1000"
            alt="Fashion shopping"
          />
        </div>
      </section>

      {/* What We Believe */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>WHAT WE BELIEVE</p>
          <h2>More than just fashion.</h2>
          <p>
            Everything we do is inspired by making your shopping experience
            better.
          </p>
        </div>

        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <FiHeart />
            <h3>Love for Fashion</h3>
            <p>
              We bring you styles that inspire confidence and help you express
              your individuality.
            </p>
          </div>

          <div className={styles.valueCard}>
            <FiStar />
            <h3>Quality First</h3>
            <p>
              We focus on offering carefully selected products that bring value
              to your wardrobe.
            </p>
          </div>

          <div className={styles.valueCard}>
            <FiShoppingBag />
            <h3>Easy Shopping</h3>
            <p>
              We aim to make discovering and shopping for your favorite styles
              simple and enjoyable.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoriesContent}>
          <p className={styles.eyebrow}>EXPLORE OUR COLLECTION</p>

          <h2>Find your style. Make it yours.</h2>

          <p>
            Explore fashion and accessories for every mood, every occasion, and
            every version of you.
          </p>
        </div>

        <div className={styles.categoryList}>
          <span>Women's Fashion</span>
          <span>Men's Fashion</span>
          <span>Footwear</span>
          <span>Accessories</span>
        </div>
      </section>

      {/* Final Section */}
      <section className={styles.finalSection}>
        <p className={styles.eyebrow}>YOUR STYLE JOURNEY STARTS HERE</p>

        <h2>Be yourself. Wear your confidence.</h2>

        <p>Discover something you love and make every look your own.</p>
      </section>
    </main>
  );
};
