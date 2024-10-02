import {BrowserRouter as Router,Route,Routes,Navigate,} from "react-router-dom";
import './App.css';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import Salehistory from "./Pages/SaleHistory/Salehistory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/products" />} /> {/* Redirect to Products by default */}
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Salehistory />} />
        </Route>
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
