import { useContext, useEffect } from "react";
import { DashboardContext } from "../components/context/DashboardContext";

export const useFetchDashboardProducts = () => {
  const { setDashboardProducts, setLoading } = useContext(DashboardContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProducts = await fetch(
          `${import.meta.env.VITE_URL_API}/api/auth/getProducts`,
        );

        if (!getProducts.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await getProducts.json();
        setDashboardProducts(data.products);
      } catch (error) {
        console.log("Failed to fetch Homepage products:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [setDashboardProducts]);
};
