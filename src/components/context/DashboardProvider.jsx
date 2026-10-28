import { useState } from "react";
import { DashboardContext } from "./DashboardContext";

export const DashboardProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [dashboardProducts, setDashboardProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <DashboardContext.Provider
      value={{
        dashboardProducts,
        setDashboardProducts,
        loading,
        setLoading,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};
