import { useState } from "react";
import { HomepageContext } from "./HomepageContext";

export const HomepageContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);
  const [dashboardProducts, setDashboardProducts] = useState([]);
  return (
    <HomepageContext.Provider
      value={{
        categories,
        setCategories,
        product,
        setProduct,
        dashboardProducts,
        setDashboardProducts,
      }}
    >
      {children}
    </HomepageContext.Provider>
  );
};
