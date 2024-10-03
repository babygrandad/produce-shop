import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Home.module.css'
import Topbar from '../../Components/Topbar/Topbar'

function Home() {
  return (

   <div className={`${styles['home-container']} `}>
    <Topbar />
   </div>
  )
}

export default Home