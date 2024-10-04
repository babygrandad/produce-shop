import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="shop" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
