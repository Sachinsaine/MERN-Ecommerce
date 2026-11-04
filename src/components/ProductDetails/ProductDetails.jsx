import { useLocation, useNavigate } from "react-router-dom";
import styles from "./productdetails.module.css";
import { useCartStore } from "../../store/cartStore";

export const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const product = state?.product;

  if (!product) {
    return (
      <main className={styles.productDetailsPage}>
        <h2>Product Not Found!</h2>
        <button onClick={() => navigate("/home")}>Back to Dashboard</button>
      </main>
    );
  }

  const colours = product.product_colors || [];

  const handleProductDetails = (item) => {
    addToCart(item);
    navigate("/mycart");
  };

  return (
    <main className={styles.productDetailsPage}>
      <div className={styles.productCard}>
        <div className={styles.imagePanel}>
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
            <button
              type="button"
              className={styles.buyButton}
              onClick={() => handleProductDetails(product)}
            >
              BUY NOW
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};
