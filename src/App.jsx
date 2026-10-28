import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomepageContextProvider } from "./components/context/HomepageContextProvider";
import { DashboardProvider } from "./components/context/DashboardProvider";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { MyCart } from "./components/MyCart/MyCart";

function App() {
  return (
    <BrowserRouter>
      <HomepageContextProvider>
        <DashboardProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/mycart" element={<MyCart />} />
          </Routes>

          <Footer />
        </DashboardProvider>
      </HomepageContextProvider>
    </BrowserRouter>
  );
}

export default App;
