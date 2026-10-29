import { useLocation } from "react-router-dom";

export const ProductDetails = () => {
  const { state } = useLocation();
  const product = state?.product;

  if (!product) {
    return <h1>Product Not Found!</h1>;
  }

  return (
    <>
      <h1>Product Details</h1>
      <img src={product.image_link} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Brand: {product.brand}</p>
      <p>Price: ₹{product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Category: {product.category}</p>
      <p>Product Type: {product.product_type}</p>
      <p>
        product colors:{" "}
        {product.product_colors.map((colour) => colour.hex_value)}
        colors name:{" "}
        {product.product_colors.map((colour) => colour.colour_name)}
      </p>
    </>
  );
};
