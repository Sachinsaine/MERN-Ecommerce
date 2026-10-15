import "./App.css";
import { HomepageContextProvider } from "./components/context/HomepageContextProvider";
// import { Dashboard } from "./components/Dashboard/Dashboard";
import { Homepage } from "./components/Homepage/Homepage";

function App() {
  return (
    <>
      {/* <Dashboard /> */}
      <HomepageContextProvider>
        <Homepage />
      </HomepageContextProvider>
    </>
  );
}

export default App;
