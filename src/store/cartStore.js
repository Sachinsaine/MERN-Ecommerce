import toast from "react-hot-toast";
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (product) => {
    const isExist = useCartStore
      .getState()
      .cart.some((item) => item._id === product._id);

    if (isExist) {
      toast.error("Product is already added!");
      return;
    }

    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }],
    }));

    toast.success("Product added to cart!");
  },

  removeFromCart: (product) => {
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== product._id),
    }));

    toast.success("Product removed from cart!");
  },

  incrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),

  decrementQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    })),

  totalProducts: () =>
    useCartStore
      .getState()
      .cart.reduce((total, item) => total + item.quantity, 0),
}));
