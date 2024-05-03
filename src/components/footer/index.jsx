import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import { logo } from 'assets'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to='/'>
        <img src={logo} alt='' />
      </Link>
      <div className={styles.footerContent}>
        <div className={styles.footerContenttoplinks}>
          <div className={styles.footerlinks}>
            <div className={styles.about}>
              <h3 className={styles.footerlinksheading}>About</h3>
              <Link to='/#'>About us</Link>
              <Link to='/#'>Jobs</Link>
              <Link to='/#'>Contact</Link>
              <Link to='/#'>Blog</Link>
              <Link to='/#'>How TrustDesk works</Link>
            </div>
            <div className={styles.community}>
              <h3 className={styles.footerlinksheading}>Trust in reviews</h3>
              <Link to='/#'>Help centre</Link>
              <Link to='/#'>Login</Link>
              <Link to='/#'>Contact</Link>
              <Link to='/#'>Sign up</Link>
              <div className={styles.socialicongroups}></div>
            </div>
            <div className={styles.businesses}>
              <h3 className={styles.footerlinksheading}>Bussinesses</h3>
              <Link to='/#'>Products</Link>
              <Link to='/#'>Plans & pricing</Link>
              <Link to='/#'>Blog for business</Link>
            </div>
            <div className={styles.chooselanguage}>
              <h3 className={styles.footerlinksheading}>Choose language</h3>
              <div className='dropdown'></div>
            </div>
          </div>
        </div>
        <div className={styles.footerContentotherlinks}></div>
      </div>
    </footer>
  )
}

export default Footer
