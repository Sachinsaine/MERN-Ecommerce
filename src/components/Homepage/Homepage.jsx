import { useContext, useEffect } from "react";
import styles from "./homepage.module.css";
import {
  FiArrowRight,
  FiTruck,
  FiRefreshCw,
  FiShield,
  FiHeart,
  FiStar,
  FiArrowUpRight,
  FiCheck,
  FiPlus,
} from "react-icons/fi";
import { HomepageContext } from "../context/HomepageContext";

const products = [
  {
    id: 1,
    name: "Elegant Summer Dress",
    category: "Women's Fashion",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Classic Everyday Sneakers",
    category: "Footwear",
    price: 2499,
    oldPrice: 3299,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    badge: "POPULAR",
  },
  {
    id: 3,
    name: "Premium Shoulder Bag",
    category: "Accessories",
    price: 1599,
    oldPrice: 2199,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
    badge: "TRENDING",
  },
  {
    id: 4,
    name: "Minimal Men's Shirt",
    category: "Men's Fashion",
    price: 1299,
    oldPrice: 1799,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=600&q=80",
    badge: "",
  },
];

export const Homepage = () => {
  const { categories, setCategories, product } = useContext(HomepageContext);
  console.log(categories);
  console.log(product);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const getCategories = await fetch(
          `${import.meta.env.VITE_URL_API}/api/auth/homepage-category`,
        );
        const response = await getCategories.json();
        setCategories(response.categories);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <main className={styles.homePage}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>YOUR STYLE, YOUR STORY</p>

          <h1>
            Discover Your
            <br />
            <span>Perfect Style.</span>
          </h1>

          <p className={styles.heroDescription}>
            Explore thoughtfully selected fashion, timeless essentials, and
            everyday favorites made for your unique style.
          </p>

          <div className={styles.heroActions}>
            <a
              href="#products"
              className={`${styles.homeBtn} ${styles.homeBtnPrimary}`}
            >
              Shop Collection{" "}
              <span>
                <FiArrowRight />
              </span>
            </a>

            <a
              href="#categories"
              className={`${styles.homeBtn} ${styles.homeBtnOutline}`}
            >
              Explore Categories
            </a>
          </div>

          <div className={styles.heroTrust}>
            <span>
              <FiCheck /> Quality Products
            </span>
            <span>
              <FiCheck /> Secure Shopping
            </span>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <img
            className={styles.heroImage}
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85"
            alt="People exploring fashionable clothing"
          />

          <div className={styles.heroFloatingCard}>
            <span className={styles.floatingCardIcon}>
              <FiStar />
            </span>
            <div>
              <strong>New Season</strong>
              <p>Fresh styles are here</p>
            </div>
          </div>

          <div className={styles.heroImageDecoration}></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.benefitsBar}>
        <div className={styles.benefitItem}>
          <span className={styles.benefitIcon}>
            <FiTruck />
          </span>
          <div>
            <h3>Free Shipping</h3>
            <p>On orders over ₹999</p>
          </div>
        </div>

        <div className={styles.benefitItem}>
          <span className={styles.benefitIcon}>
            <FiRefreshCw />
          </span>
          <div>
            <h3>Easy Returns</h3>
            <p>Simple return process</p>
          </div>
        </div>

        <div className={styles.benefitItem}>
          <span className={styles.benefitIcon}>
            <FiShield />
          </span>
          <div>
            <h3>Secure Payments</h3>
            <p>Shop with confidence</p>
          </div>
        </div>

        <div className={styles.benefitItem}>
          <span className={styles.benefitIcon}>
            <FiHeart />
          </span>
          <div>
            <h3>Made for You</h3>
            <p>Styles you'll love</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section
        id="categories"
        className={`${styles.homeSection} ${styles.categoriesSection}`}
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionEyebrow}>EXPLORE OUR COLLECTION</p>
            <h2>Shop by Category</h2>
            <p className={styles.sectionDescription}>
              Find the pieces that match your personality.
            </p>
          </div>

          <a href="#products" className={styles.textLink}>
            View All Products <FiArrowRight />
          </a>
        </div>

        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <a
              href="#products"
              className={styles.categoryCard}
              key={category.name}
            >
              <img src={category.image} alt={category.name} />

              <div className={styles.categoryOverlay}>
                <h3>{category.name}</h3>
                <span>
                  Explore Collection <FiArrowUpRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section
        id="products"
        className={`${styles.homeSection} ${styles.productsSection}`}
      >
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.sectionEyebrow}>HANDPICKED FOR YOU</p>
            <h2>Featured Products</h2>
            <p className={styles.sectionDescription}>
              Discover the favorites everyone is talking about.
            </p>
          </div>

          <a href="#categories" className={styles.textLink}>
            Explore More <FiArrowRight />
          </a>
        </div>

        <div className={styles.productsGrid}>
          {products.map((product) => (
            <article className={styles.homeProductCard} key={product.id}>
              <div className={styles.productImageWrapper}>
                <img src={product.image} alt={product.name} />

                {product.badge && (
                  <span className={styles.productBadge}>{product.badge}</span>
                )}

                <button
                  type="button"
                  className={styles.productWishlist}
                  aria-label={`Add ${product.name} to wishlist`}
                >
                  <FiHeart />
                </button>
              </div>

              <div className={styles.homeProductInfo}>
                <p className={styles.homeProductCategory}>{product.category}</p>

                <h3>{product.name}</h3>

                <div className={styles.productRating}>
                  <span>
                    <FiStar />
                  </span>{" "}
                  {product.rating}
                </div>

                <div className={styles.homeProductPrice}>
                  <strong>₹{product.price.toLocaleString("en-IN")}</strong>

                  <del>₹{product.oldPrice.toLocaleString("en-IN")}</del>

                  <span className={styles.discountLabel}>
                    {Math.round(
                      ((product.oldPrice - product.price) / product.oldPrice) *
                        100,
                    )}
                    % OFF
                  </span>
                </div>

                <button type="button" className={styles.addToCartBtn}>
                  Add to Cart <FiPlus />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className={styles.promoSection}>
        <div className={styles.promoContent}>
          <p className={styles.sectionEyebrow}>A LITTLE SOMETHING SPECIAL</p>

          <h2>
            Your Next Favorite
            <br />
            <span>Look Awaits.</span>
          </h2>

          <p>
            Refresh your wardrobe with styles you'll reach for again and again.
          </p>

          <a
            href="#products"
            className={`${styles.homeBtn} ${styles.homeBtnPrimary}`}
          >
            Shop Now <FiArrowRight />
          </a>
        </div>

        <div className={styles.promoImage}>
          <img
            src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=900&q=85"
            alt="Stylish fashion collection"
          />
          <div className={styles.promoDecoration}>
            STYLE
            <br />
            EDIT
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <p className={styles.sectionEyebrow}>STAY IN THE LOOP</p>

        <h2>A little inspiration in your inbox.</h2>

        <p>Sign up for new arrivals, style inspiration, and special offers.</p>

        <form className={styles.newsletterForm}>
          <label htmlFor="newsletter-email" className={styles.srOnly}>
            Email address
          </label>

          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email address"
            required
          />

          <button type="submit">
            Subscribe <FiArrowRight />
          </button>
        </form>

        <p className={styles.newsletterNote}>
          By subscribing, you agree to receive our occasional updates.
        </p>
      </section>
    </main>
  );
};
