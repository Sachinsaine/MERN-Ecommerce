import { useState } from "react";
import { DashboardContext } from "./DashboardContext";

export const DashboardProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [dashboardProducts, setDashboardProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  return (
    <DashboardContext.Provider
      value={{
        dashboardProducts,
        setDashboardProducts,
        loading,
        setLoading,
        cartProducts,
        setCartProducts,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
