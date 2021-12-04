import "./App.scss";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="sections">
        <Products/>
      </div>
    </div>
  );
}

export default App;
