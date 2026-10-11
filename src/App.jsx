
import Info from "./components/info";
import About from "./components/About";
import Interests from "./components/Intrests";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="business-card">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
