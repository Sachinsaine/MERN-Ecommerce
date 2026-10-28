import { useContext } from "react";
import { DashboardContext } from "../context/DashboardContext";
import styles from "./mycart.module.css";
import { FiTrash2 } from "react-icons/fi";

export const MyCart = () => {
  const { cartProducts = [] } = useContext(DashboardContext);

  return (
    <main className={styles.myCartPage}>
      <div className={styles.cartLayout}>
        <section className={styles.cartSection}>
          {cartProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>Your cart is empty</h3>
              <p>Add products from the dashboard to see them here.</p>
            </div>
          ) : (
            <div className={styles.productsGrid}>
              {cartProducts.map((product) => (
                <article className={styles.homeProductCard} key={product._id}>
                  <div className={styles.productImageWrapper}>
                    <img src={product.image_link} alt={product.name} />
                  </div>

                  <div className={styles.homeProductInfo}>
                    <p className={styles.homeProductCategory}>
                      {product.category || product.product_type}
                    </p>

                    <h3>{product.name}</h3>

                    <p className={styles.brand}>{product.brand}</p>

                    <div className={styles.homeProductPrice}>
                      <strong>₹{product.price}</strong>
                    </div>
                  </div>

                  <div className={styles.cartProductActions}>
                    <button type="button" className={styles.addToCartBtn}>
                      BUY NOW
                    </button>

                    <button type="button" className={styles.removeButton}>
                      <FiTrash2 size={16} /> <span>REMOVE</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <aside className={styles.orderSummary}>
          <h2>Order Summary</h2>

          <div className={styles.summaryRow}>
            <span>Total Products</span>
            <span>3 items</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>₹2,997</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Discount</span>
            <span className={styles.discount}>−₹300</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Delivery Charge</span>
            <span>₹49</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Tax</span>
            <span>₹0</span>
          </div>

          <div className={styles.summaryDivider} />

          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <span>Total Amount</span>
            <strong>₹2,746</strong>
          </div>

          <button type="button" className={styles.checkoutButton}>
            Proceed to Checkout
          </button>

          <p className={styles.deliveryNote}>
            Free delivery on orders above ₹999
          </p>
        </aside>
      </div>
    </main>
  );
};

export default MyCart;
