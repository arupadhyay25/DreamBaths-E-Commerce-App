import { MainRoutes } from "./AllRoutes/MainRoutes";
import "./App.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <br/>
      <Navbar/>
      <br/>
      <MainRoutes />
      <br/>
      <Footer />
    </div>
  );
}

export default App;
