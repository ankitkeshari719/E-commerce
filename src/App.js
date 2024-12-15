import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Checkout, Product, Products, Home } from "./pages";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="/:category/:productId" element={<Product />} />
          <Route exact path="/:category" element={<Products />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
