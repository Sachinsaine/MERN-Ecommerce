import { useContext, useEffect } from "react";
import { DashboardContext } from "../components/context/DashboardContext";

export const useFetchDashboardProducts = () => {
  const { setDashboardProducts, setLoading } = useContext(DashboardContext);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const getProducts = await fetch(
          `${import.meta.env.VITE_API_URL}/api/auth/getProducts`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        const data = await getProducts.json();
        if (!getProducts.ok) {
          throw new Error(data.message || "Failed to fetch products");
        }

        setDashboardProducts(data.products || []);
      } catch (error) {
        console.log("Failed to fetch Homepage products:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [setDashboardProducts, setLoading]);
};
