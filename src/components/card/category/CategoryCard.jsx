import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const CategoryCard = ({ backgroundColor, icon, title, details }) => {
  return (
    <Link
      to={`/categories/${details}`}
      className={styles.categorycard}
      style={{ backgroundColor: backgroundColor }}
    >
      <span className={styles.cardIcon}>{icon}</span>
      <p className={styles.cardtitle}>{title}</p>
    </Link>
  )
}

export default CategoryCard
