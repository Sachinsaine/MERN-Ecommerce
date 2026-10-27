import { useContext } from "react";
import { useFetchDashboardProducts } from "../../hook/dashboardProducts";
import { HomepageContext } from "../context/HomepageContext";
import styles from "./dashboard.module.css";

export const Dashboard = () => {
  useFetchDashboardProducts();

  const { dashboardProducts = [] } = useContext(HomepageContext);

  return (
    <main className={styles.dashboardPage}>
      <section className={styles.dashboardHeader}>
        <div>
          <p className={styles.eyebrow}>YOUR PERSONAL COLLECTION</p>
          <h1>Welcome back to Dashboard</h1>
          <p className={styles.headerDescription}>
            Discover timeless styles and find your next favorite.
          </p>
        </div>
      </section>

      <section className={styles.productsSection}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>CURATED FOR YOU</p>
            <h2>Explore Products</h2>
          </div>

          <span className={styles.productCount}>
            {dashboardProducts.length} products
          </span>
        </div>

        {dashboardProducts.length === 0 ? (
          <div className={styles.emptyState}>
            <h3>No products available</h3>
            <p>Products will appear here when they are available.</p>
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {dashboardProducts.map((item) => {
              const price = Number(item.price);
              const oldPrice = Number(item.oldPrice);
              const hasDiscount =
                item.oldPrice != null &&
                item.oldPrice !== "" &&
                oldPrice > price &&
                price >= 0;

              const category =
                typeof item.category === "object"
                  ? item.category?.name
                  : item.category;

              return (
                <article className={styles.productCard} key={item._id}>
                  <div className={styles.productImageWrapper}>
                    <img src={item.image_link} alt={item.name} loading="lazy" />

                    <span className={styles.productBadge}>
                      {item.badge || "POPULAR"}
                    </span>

                    <button
                      type="button"
                      className={styles.wishlistButton}
                      aria-label={`Add ${item.name} to wishlist`}
                    >
                      ♡
                    </button>
                  </div>

                  <div className={styles.productInfo}>
                    <p className={styles.productCategory}>
                      {category || item.product_type || "COLLECTION"}
                    </p>

                    <h3 className={styles.productName}>{item.name}</h3>

                    <p className={styles.productBrand}>{item.brand}</p>

                    <div className={styles.productRating}>
                      <span aria-hidden="true">☆</span>
                      <span className={styles.ratingValue}>
                        {item.rating ?? "3.2"}
                      </span>
                    </div>

                    <div className={styles.productPrice}>
                      <strong>
                        ₹
                        {Number.isFinite(price)
                          ? price.toLocaleString("en-IN")
                          : item.price}
                      </strong>

                      {hasDiscount && (
                        <>
                          <del>₹{oldPrice.toLocaleString("en-IN")}</del>
                          <span className={styles.discount}>
                            {Math.round(((oldPrice - price) / oldPrice) * 100)}%
                            OFF
                          </span>
                        </>
                      )}
                    </div>

                    <button type="button" className={styles.addToCartButton}>
                      <span>Add to Cart</span>
                      <span className={styles.cartPlus}>＋</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};
