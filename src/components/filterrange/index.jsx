import React from 'react'
import styles from './filter.module.scss'

const FilterRange = ({ filteredNumber, inputName, label, range, width }) => {
  return (
    <div className={styles.filterwrapper}>
      <div className={styles.checkbox_label}>
        <input
          type='checkbox'
          name={inputName}
          id=''
          className={styles.checkbox}
        />
        <label htmlFor='' className={styles.filterlabel}>
          {label}
        </label>
      </div>
      <span className={styles.starrange}>{range}</span>
      <span className={styles.filteredNumber}>{filteredNumber}</span>
    </div>
  )
}

export default FilterRange
