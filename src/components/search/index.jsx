import React from 'react'
import { searchIcon } from 'assets'
import styles from './search.module.css'

const Search = ({ value, onChange, placeholder, style }) => {
  return (
    <div className={`${styles.searchContainer} ${style}`}>
      <span className={styles.svg}>{searchIcon}</span>
      <input
        type='search'
        name=''
        id=''
        value={value}
        className={`${styles.search} `}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  )
}

export default Search
