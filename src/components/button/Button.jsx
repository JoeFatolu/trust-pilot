import React from 'react'
import styles from './button.module.scss'

const Button = ({ children, onClick, className }) => {
  return (
    <button className={`${styles.btn} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.Title = ({ children }) => {
  return <>{children}</>
}

export default Button
