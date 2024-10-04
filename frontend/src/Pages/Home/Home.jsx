import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Home.module.css'
import Topbar from '../../Components/Topbar/Topbar'
import Sidemenu from '../../Components/Sidemenu/Sidemenu'

function Home() {
  return (

   <div className={`${styles['home-container']} `}>
    <Sidemenu />
    <Topbar />
    <main>
      <Outlet />
    </main>
    <footer>footer</footer>
   </div>
  )
}

export default Home