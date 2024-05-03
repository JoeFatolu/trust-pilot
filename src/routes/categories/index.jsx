import React from 'react'
import { Search, CategoryCard } from 'components'
import { allCategories } from 'utils'
import styles from './index.module.css'

const Categories = () => {
  return (
    <div className={styles.categoriescontainer}>
      <div className={styles.hero}>
        <div className={styles.herowrapper}>
          <p className={styles.herotext}>What are you looking for?</p>
          <Search placeholder='Search' style={styles.searchcontainer} />
        </div>
      </div>
      <div className={styles.categoriesInIcons}>
        <div className={styles.categoriesInIconswrapper}>
          <p className={styles.categoriesInIconswrappertitle}>
            Explore Companies & Products by category
          </p>
          <div className={styles.allcategories}>
            {allCategories.map(({ id, ...rest }) => (
              <CategoryCard
                details={rest.title}
                key={id}
                backgroundColor={rest.backgroundColor}
                icon={rest.icon}
                title={rest.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
