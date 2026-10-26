import { useContext, useEffect } from "react";
import { HomepageContext } from "../components/context/HomepageContext";

export const useFetchDashboardProducts = () => {
  const { setDashboardProducts } = useContext(HomepageContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProducts = await fetch(
          `${import.meta.env.VITE_URL_API}/api/auth/getProducts`,
        );
        const data = await getProducts.json();
        setDashboardProducts(data.products);
      } catch (error) {
        console.log("Failed to fetch Homepage products:", error.message);
      }
    };
    fetchProducts();
  }, [setDashboardProducts]);
};
