import React from 'react'
import styles from './contactIcon.module.css'

const ContactIcon = ({ icon, label }) => {
  return (
    <div className={styles.contactIcon}>
      <span className={styles.iconcontainer}>{icon}</span>
      <p className={styles.contacttext}>{label}</p>
    </div>
  )
}

export default ContactIcon
