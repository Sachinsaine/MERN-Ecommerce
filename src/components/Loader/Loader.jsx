import styles from "./loader.module.css";

/**
 * <Loader />                      inline spinner
 * <Loader size="sm" />            small (for buttons)
 * <Loader size="lg" text="Loading products" />
 * <Loader fullscreen />           page overlay
 * <Loader block />                centered in a section
 */
export default function Loader({
  size = "md",
  text,
  fullscreen = false,
  block = false,
}) {
  const loader = (
    <div
      className={`${styles.loader} ${size !== "md" ? styles[size] : ""}`}
      role="status"
      aria-live="polite"
    >
      <span className={styles.ring} aria-hidden="true" />
      {text ? (
        <span className={styles.text}>{text}</span>
      ) : (
        <span className={styles.srOnly}>Loading</span>
      )}
    </div>
  );

  if (fullscreen) return <div className={styles.overlay}>{loader}</div>;
  if (block) return <div className={styles.block}>{loader}</div>;
  return loader;
}
