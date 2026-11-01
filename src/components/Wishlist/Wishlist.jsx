import { useContext, useState } from "react";
import styles from "./wishlist.module.css";
import { FiHeart, FiStar, FiTrash2 } from "react-icons/fi";
import { DashboardContext } from "../context/DashboardContext";
import { WishlistDialog } from "./WishlistDialog";

export const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(DashboardContext);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClickRemove = (item) => {
    setSelectedProduct(item);
    setOpen(true);
  };

  const handleConfirmRemove = () => {
    setWishlist((prev) =>
      prev.filter((item) => item._id !== selectedProduct._id),
    );

    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.wishlistPage}>
      <div className={styles.wishlistHeader}>
        <div>
          <p className={styles.subtitle}>YOUR COLLECTION</p>
          <h1>My Wishlist</h1>
          <p className={styles.description}>
            Your favorite products, all in one place.
          </p>
        </div>

        <div className={styles.itemCount}>
          <FiHeart />
          <span>{wishlist.length} Items</span>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className={styles.emptyWishlist}>
          <FiHeart className={styles.emptyIcon} />
          <h2>Your wishlist is empty</h2>
          <p>Save your favorite products and find them here later.</p>
        </div>
      ) : (
        <div className={styles.wishlistGrid}>
          {wishlist.map((product) => {
            return (
              <div className={styles.homeProductCard} key={product._id}>
                <div className={styles.productImageWrapper}>
                  <img src={product.image_link} alt={product.name} />

                  {product.badge && (
                    <span className={styles.productBadge}>{product.badge}</span>
                  )}
                </div>

                <div className={styles.homeProductInfo}>
                  <p className={styles.homeProductCategory}>
                    {product.category}
                  </p>

                  <h3>{product.name}</h3>

                  <p className={styles.productRating}>
                    <span>
                      <FiStar size={12} />
                    </span>{" "}
                    {product.rating ?? "3.2"}
                  </p>

                  <div className={styles.homeProductPrice}>
                    <strong>{`₹${product.price}.00`}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className={styles.removeButton}
                  onClick={() => handleClickRemove(product)}
                >
                  <FiTrash2 />
                </button>
                <WishlistDialog
                  open={open}
                  onClose={() => setOpen(false)}
                  onConfirm={handleConfirmRemove}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
