import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Home.module.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidemenu from '../../Components/Sidemenu/Sidemenu'
import FilterBar from '../../Components/FilterBar/FilterBar'

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const handleSearch = (input) => {
    setSearchInput(input); // Update the state with the search input
  };

  const handleFilterChange = (category) => {
    setActiveFilter(category); // Update the active filter
  };

  return (

   <div className={`${styles['home-container']} `}>
    <Sidemenu />
    <Topbar onSearch={handleSearch} />

    <main>
    <FilterBar
          onFilterChange={handleFilterChange}
          all
          fruit
          veg
        />
      <Outlet context={{ searchInput, activeFilter }}/>
    </main>
    <footer>footer</footer>
   </div>
  )
}

export default Home