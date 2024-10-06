import React, { useState }from 'react'
import styles from './Topbar.module.css'
import { Search, Menu,ArrowDropDown} from '@mui/icons-material';

function Topbar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("")

  const handleClear = (e) => {
    e.preventDefault();
    setSearchInput('');
    onSearch(''); 
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value); 
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return(
    <header className={styles['header-container']}>
      <button className={styles['header-menu-toggle']}><Menu /></button>
      <form className={styles["header-search-form"]} autoComplete='off' onSubmit={handleSubmit}>
        <Search />
        <input type="text" value={searchInput} className={styles['search-input']} placeholder={`! ! ! work on the filter ! ! !`} onChange={handleInputChange} />
      </form>
      <div className={styles["user-profile"]}>
          <img src="https://i.pinimg.com/736x/e4/ea/7a/e4ea7a052f09288f1490c1037b3f7181.jpg" alt="" className={styles["user-profile-image"]} />
          <span className={styles["user-profile-name"]}>Naruto Uzumaki</span>
          <span className={styles["user-profile-email"]}>naruto@example.com</span>
          <span className={styles['user-profile-dropdown-button']}><ArrowDropDown /></span>
        </div>
    </header>
  )
}

export default Topbar