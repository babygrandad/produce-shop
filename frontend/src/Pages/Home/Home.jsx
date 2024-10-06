import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Home.module.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidemenu from '../../Components/Sidemenu/Sidemenu'

function Home() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (input) => {
    setSearchInput(input); // Update the state with the search input
  };

  return (

   <div className={`${styles['home-container']} `}>
    <Sidemenu />
    <Topbar onSearch={handleSearch} />
    <main>
      <Outlet context={{ searchInput }}/>
    </main>
    <footer>footer</footer>
   </div>
  )
}

export default Home