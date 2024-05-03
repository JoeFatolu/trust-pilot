import React from 'react'
import styles from './tab.module.css'

const SelectedTab = ({ icon, name, className, onCLick }) => {
  return (
    <li onClick={onCLick} className={styles.tabItem}>
      <div className={`${styles.tabItemwrapper} ${className}`}>
        {icon}
        <p>{name}</p>
      </div>
    </li>
  )
}

export default SelectedTab
