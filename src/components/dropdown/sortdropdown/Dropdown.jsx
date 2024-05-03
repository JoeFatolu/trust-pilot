import React, { useState } from 'react'
import { chevronDown } from 'assets'
import styles from './styles.module.css'

const Dropdown = () => {
  const [dropdown, setDropdown] = useState('newest')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleDropdown = (value) => {
    setDropdown(value)
    closeDropdown()
  }

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  const dropdownItems = [
    {
      id: 1,
      name: 'day',
    },
    {
      id: 2,
      name: 'week',
    },
    {
      id: 3,
      name: 'month',
    },
  ]

  return (
    <div className={styles.dropdowncontainer}>
      <div onClick={toggleDropdown} className={styles.dropdowntop}>
        <p className={styles.sortby}>Sort by {dropdown} review</p>
        <span>{isDropdownOpen ? '' : chevronDown}</span>
      </div>

      {isDropdownOpen ? (
        <div className={styles.dropdownOptions}>
          {dropdownItems.map(({ id, name }) => {
            return (
              <div key={id} onClick={() => handleDropdown(name)}>
                {name}
              </div>
            )
          })}
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Dropdown
