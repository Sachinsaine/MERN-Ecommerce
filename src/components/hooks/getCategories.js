import { useCallback, useContext } from "react";
import { HomepageContext } from "../context/HomepageContext";

export const useGetCategories = () => {
  const { setCategories } = useContext(HomepageContext);

  const getCategories = useCallback(async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_URL_API}/api/auth/homepage-category`;

      console.log("API URL:", apiUrl);

      const response = await fetch(apiUrl);

      console.log("Response status:", response.status);
      console.log(
        "Response content type:",
        response.headers.get("content-type"),
      );

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const categoriesData = await response.json();
      console.log("Categories response:", categoriesData);

      setCategories(categoriesData.categories);
    } catch (error) {
      console.error("Error fetching categories:", error.message);
    }
  }, [setCategories]);

  return getCategories;
};
