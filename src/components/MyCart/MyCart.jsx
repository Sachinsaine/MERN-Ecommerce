import { useMemo, useState } from "react";
import styles from "./mycart.module.css";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { MyCartDialog } from "./MyCartDialog";
import { useCartStore } from "../../store/cartStore";

export const MyCart = () => {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cartProducts = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.incrementQuantity);
  const decreaseQuantity = useCartStore((state) => state.decrementQuantity);
  const removeProduct = useCartStore((state) => state.removeFromCart);

  const totalAddedProducts = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const subTotal = useMemo(() => {
    return cartProducts.reduce(
      (sum, product) => sum + Number(product.price) * product.quantity,
      0,
    );
  }, [cartProducts]);

  const handleClickRemove = (item) => {
    setSelectedProduct(item);
    setOpen(true);
  };

  const handleConfirmRemove = () => {
    removeProduct(selectedProduct);
    toast.success("Product removed from cart!");
    setOpen(false);
    setSelectedProduct(null);
  };

  return (
    <main className={styles.myCartPage}>
      <div className={styles.cartLayout}>
        <section className={styles.cartSection}>
          {cartProducts.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>Your cart is empty</h3>
              <p>Add products from the dashboard to see them here.</p>
              <Link to="/home" type="button" className={styles.addToCartBtn}>
                SHOP NOW
              </Link>
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
                      <strong>{`₹ ${product.price}.00`}</strong>
                    </div>

                    <div className={styles.quantityWrapper}>
                      <span className={styles.quantityLabel}>Quantity</span>

                      <div className={styles.quantityControl}>
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => decreaseQuantity(product._id)}
                        >
                          −
                        </button>

                        <span className={styles.quantityValue}>
                          <span className={styles.quantityValue}>
                            {product.quantity}
                          </span>
                        </span>

                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => increaseQuantity(product._id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className={styles.cartProductActions}>
                    <button type="button" className={styles.addToCartBtn}>
                      BUY NOW
                    </button>

                    <button
                      type="button"
                      className={styles.removeButton}
                      // onClick={() => handleRemove(product)}
                      onClick={() => handleClickRemove(product)}
                    >
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
            <span>{`${totalAddedProducts} items`}</span>
          </div>

          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <span>{`₹${subTotal}.00`}</span>
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
            <strong>{`₹${subTotal}.00`}</strong>
          </div>

          <button type="button" className={styles.checkoutButton}>
            <span>Proceed to Checkout</span>{" "}
            <MdOutlineArrowRightAlt size={26} />
          </button>

          <p className={styles.deliveryNote}>
            Free delivery on orders above ₹999
          </p>
        </aside>
      </div>
      <MyCartDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirmRemove}
      />
    </main>
  );
};

export default MyCart;
