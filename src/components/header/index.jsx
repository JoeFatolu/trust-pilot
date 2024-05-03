import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'components'
import { logo } from 'assets'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to='/'>
          <img src={logo} alt='brand logo' />
        </Link>
        <div className={styles.navwrapper}>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link to='/categories'>Categories</Link>
            </li>

            <li className={styles.navItem}>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
          <Button onClick={() => console.log('Register button clicked')}>
            <Button.Title>Register</Button.Title>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
