import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { HomepageContextProvider } from "./components/context/HomepageContextProvider";
import { Homepage } from "./components/Homepage/Homepage";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <BrowserRouter>
        <Navbar />
        <HomepageContextProvider>
          <Homepage />
        </HomepageContextProvider>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
