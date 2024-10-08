import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Home.module.css';
import Topbar from '../../Components/Topbar/Topbar';
import Sidemenu from '../../Components/Sidemenu/Sidemenu';
import FilterBar from '../../Components/FilterBar/FilterBar';

import Login from '../Login/Login';
import Register from '../Register/Register';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
    const [searchInput, setSearchInput] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");
    const [categoryCounts, setCategoryCounts] = useState({
        all: 0,
        fruit: 0,
        veg: 0,
    });

    const [showLogin, setShowLogin] = useState(false); // State to control login visibility
		const [showRegister, setShowRegister] = useState(false); // State to control login visibility

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
            <Topbar onSearch={handleSearch} setShowLogin={setShowLogin} setShowRegister={setShowRegister}/>
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
            {showLogin && <Login setShowLogin={setShowLogin} />} {/* Conditionally render Login */}
						{showRegister && <Register setShowRegister={setShowRegister} />} {/* Conditionally render Register */}

            <ToastContainer />
        </div>
    );
}

export default Home;
