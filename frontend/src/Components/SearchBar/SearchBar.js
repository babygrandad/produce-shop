import React, { useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar({all = 0, fruit = 0, veg = 0, onFilterChange, onSearch}) {
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

  return (
	<div className={styles['searchbar-container']}>
    <div className={styles["filter-container"]}>
      <span className={styles['searchbar-group-identifier']}>Filters</span>
      <div className={styles["filter-wrapper"]}>
        <button className={`${styles['product-filter-button'] } button`} onClick={() => handleFilter('All')}>All<span>{all}</span></button>
        <button className={`${styles['product-filter-button'] } button`} onClick={() => handleFilter('Fruit')}>Fruits<span>{fruit}</span></button>
        <button className={`${styles['product-filter-button'] } button`} onClick={() => handleFilter('Vegetable')}>Veg<span>{veg}</span></button>
      </div>
    </div>
    <div className={styles["search-container"]}>
      <form onSubmit={handleSubmit}>
      <span className={styles['searchbar-group-identifier']}>Search</span>
        <div className={styles["search-input-container"]}>
          <input onChange={handleInputChange} type="text" placeholder='E.g "Banana"' value={searchInput}  onKeyDown={handleKeyPress}/>
          <button onClick={handleClear}><span>X</span></button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SearchBar