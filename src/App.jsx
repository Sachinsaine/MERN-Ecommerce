import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomepageContextProvider } from "./components/context/HomepageContextProvider";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { DashboardProvider } from "./components/context/DashboardProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <HomepageContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route
              path="/home"
              element={
                <DashboardProvider>
                  <Dashboard />
                </DashboardProvider>
              }
            />
          </Routes>
          <Footer />
        </HomepageContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
