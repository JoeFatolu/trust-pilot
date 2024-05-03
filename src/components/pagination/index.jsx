import React from 'react'
import { backarrow, forwardarrow } from 'assets'
import styles from './pagination.module.css'

const Pagination = ({ pagination }) => {
  return (
    <div className={styles.pagination}>
      <span className={styles.paginationItem}>{backarrow}</span>
      {pagination.map(({ id, value }) => (
        <span key={id} className={styles.paginationItem}>
          {value}
        </span>
      ))}
      <span className={styles.paginationItem}>{forwardarrow}</span>
    </div>
  )
}

export default Pagination
