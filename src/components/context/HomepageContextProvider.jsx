import { useState } from "react";
import { HomepageContext } from "./HomepageContext";

export const HomepageContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  return (
    <HomepageContext.Provider value={{ categories, setCategories }}>
      {children}
    </HomepageContext.Provider>
  );
};
