import { useState } from "react";
import { HomepageContext } from "./HomepageContext";

export const HomepageContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState([]);

  return (
    <HomepageContext.Provider
      value={{ categories, setCategories, product, setProduct }}
    >
      {children}
    </HomepageContext.Provider>
  );
};
