import { useContext, useState } from "react";
import { useFetchDashboardProducts } from "../../hook/dashboardProducts";
import styles from "./dashboard.module.css";
import { FiHeart, FiStar, FiPlus } from "react-icons/fi";
import { DashboardContext } from "../context/DashboardContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  useFetchDashboardProducts();
  const navigate = useNavigate();
  const [added, setAdded] = useState([]);

  const {
    dashboardProducts = [],
    cartProducts = [],
    loading,
    setCartProducts,
  } = useContext(DashboardContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const handleAddToCart = (item) => {
    const alreadyExist = cartProducts.some(
      (product) => product._id === item._id,
    );

    if (alreadyExist) {
      toast.error("Product is already in your cart!");
      return;
    }
    setCartProducts((prev) => [...prev, item]);
    toast.success("Product has been added to the cart!");
  };

  const handleSelectedProduct = (item) => {
    navigate("/product-details", {
      state: { product: item },
    });
  };

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
            {dashboardProducts.map((product) => (
              <article className={styles.homeProductCard} key={product.id}>
                <div className={styles.productImageWrapper}>
                  <img src={product.image_link} alt={product.name} />

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
                  <p className={styles.homeProductCategory}>
                    {product.category}
                  </p>

                  <h3 onClick={() => handleSelectedProduct(product)}>
                    {product.name}
                  </h3>
                  <p className={styles.brand}>{product.brand}</p>

                  <div className={styles.productRating}>
                    <span>
                      <FiStar />
                    </span>{" "}
                    {product.rating ?? "3.2"}
                  </div>

                  <div className={styles.homeProductPrice}>
                    <strong>₹{product.price}</strong>

                    <del>₹{product.oldPrice}</del>

                    <span className={styles.discountLabel}>
                      {Math.round(
                        ((product.oldPrice - product.price) /
                          product.oldPrice) *
                          100,
                      )}
                      % OFF
                    </span>
                  </div>

                  <button
                    type="button"
                    className={styles.addToCartBtn}
                    onClick={() => handleAddToCart(product)}
                    disabled={added.includes(product._id)}
                  >
                    {cartProducts.some((item) => item._id === product._id) ? (
                      "Added"
                    ) : (
                      <>
                        <FiPlus /> Add To Cart
                      </>
                    )}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
