import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductSales from "./Pages/ProductSales/ProductSales";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="shop" />} />
          <Route path="shop" element={<Products />} />
					<Route path="product-sales/:id" element={<ProductSales />} />
					<Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
