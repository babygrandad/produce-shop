import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import Topbar from '../../Components/Topbar/Topbar';
import Sidemenu from '../../Components/Sidemenu/Sidemenu';
import FilterBar from '../../Components/FilterBar/FilterBar';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../ForgotPassword/ForgotPassword';
import ResetPassword from '../ResetPassword/ResetPassword';
import ChangePassword from '../ChangePassword/ChangePassword';
import EditProfile from '../EditProfile/EditProfile';
import CartApi from '../../utils/Api/CartApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [cartItems, setCartItems] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({
    all: 0,
    fruit: 0,
    veg: 0,
  });

	const location = useLocation(); // Get the current route

  const handleSearch = (input) => {
    setSearchInput(input);
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category);
  };

  return (
    <div className={`${styles['home-container']}`}>
      <Sidemenu />
      <Topbar onSearch={handleSearch} />
      <main>
			{location.pathname === "/shop" && (
          <FilterBar
            onFilterChange={handleFilterChange}
            all={categoryCounts.all}
            fruit={categoryCounts.fruit}
            veg={categoryCounts.veg}
          />
        )}
        <Outlet context={{ searchInput, activeFilter, setCategoryCounts }} />
      </main>
			{/*<EditProfile />*/}
      <ToastContainer />
    </div>
  );
}

export default Home;
