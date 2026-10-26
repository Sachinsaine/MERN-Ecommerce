import { useContext } from "react";
import { useFetchDashboardProducts } from "../../hook/dashboardProducts";
import { HomepageContext } from "../context/HomepageContext";

export const Dashboard = () => {
  useFetchDashboardProducts();
  const { dashboardProducts } = useContext(HomepageContext);
  console.log(dashboardProducts);

  return (
    <div>
      <h1>Welcome back to Dashboard</h1>
      {dashboardProducts.map((item) => {
        return (
          <div>
            <img src={item.image_link} alt="" />
            <h5>{item.name}</h5>
            <p>{item.brand}</p>
          </div>
        );
      })}
    </div>
  );
};
