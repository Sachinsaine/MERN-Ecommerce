import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import styles from "./productdetails.module.css";

export const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;

  if (!product) {
    return (
      <main className={styles.productDetailsPage}>
        <h2>Product Not Found!</h2>
        <button onClick={() => navigate("/home")}>Back to Dashboard</button>
      </main>
    );
  }
  console.log(product);

  const colours = product.product_colors || [];

  return (
    <main className={styles.productDetailsPage}>
      <div className={styles.productCard}>
        <div className={styles.imagePanel}>
          <button
            type="button"
            className={styles.wishlistButton}
            aria-label="Add to wishlist"
          >
            <FiHeart />
          </button>

          <img
            className={styles.productImage}
            src={product.image_link}
            alt={product.name}
          />
        </div>

        <section className={styles.productInfo}>
          <p className={styles.eyebrow}>
            {product.product_type || product.category || "PRODUCT"}
          </p>

          <h1 className={styles.productName}>{product.name}</h1>

          <p>{product.brand}</p>
          <p>{product.category}</p>

          <div className={styles.rating}>
            <span className={styles.stars}>★★★★★</span>
            <span className={styles.ratingValue}>
              {product.rating ?? "Not rated"}
            </span>
          </div>

          <div className={styles.priceSection}>
            <strong className={styles.price}>₹{product.price}</strong>

            <span className={styles.bestValue}>BEST VALUE</span>
          </div>

          {colours.length > 0 && (
            <div className={styles.shadesSection}>
              <h3>AVAILABLE SHADES ({colours.length})</h3>

              <div className={styles.shadeList}>
                {colours.map((colour, index) => (
                  <div className={styles.shadeItem} key={index}>
                    <span
                      className={styles.shade}
                      style={{ backgroundColor: colour.hex_value }}
                      title={colour.colour_name}
                    />
                    <span className={styles.shadeName}>
                      {colour.colour_name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={styles.purchaseRow}>
            <Link to="/home" type="button" className={styles.buyButton}>
              BUY NOW
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};
