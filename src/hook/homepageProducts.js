import { useContext, useEffect } from "react";
import { HomepageContext } from "../components/context/HomepageContext";

export const useHomepageProducts = () => {
  const { setProduct } = useContext(HomepageContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_URL_API}/api/auth/homepage-product`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch homepage products");
        }

        const data = await response.json();

        setProduct(data.products);
      } catch (error) {
        console.error("Error fetching homepage products:", error);
      }
    };

    fetchData();
  }, [setProduct]);

  return null;
};
