import React, { useState }from 'react'
import styles from './Topbar.module.css'
import { Search, Menu } from '@mui/icons-material';

function Topbar({all = 0, fruit = 0, veg = 0, onFilterChange, onSearch}) {
  const [searchInput, setSearchInput] = useState(null)

  const handleClear = (e) => {
    e.preventDefault();
    setSearchInput('');
    onSearch('');
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilter = (category) => {
    onFilterChange(category);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission on Enter key
    }
  };

  return(
    <header className={styles['header-container']}>
      <button className={styles['header-menu-toggle']}><Menu /></button>
      <form className={styles["header-search-form"]} autoComplete='off'>
        <Search />
        <input type="text" className={styles['search-input']} placeholder={`Search...`} />
      </form>
    </header>
  )
}

export default Topbar