import React from 'react'
import { star } from 'assets/index'
import styles from './styles.module.css'

const stars = [
  {
    id: 1,
    value: star,
  },
  {
    id: 2,
    value: star,
  },
  {
    id: 3,
    value: star,
  },
  {
    id: 4,
    value: star,
  },
  {
    id: 5,
    value: star,
  },
]

const ReviewBadge = ({
  reviewLocation,
  dateAndTime,
  userImage,
  username,
  reviewtext,
}) => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.location_time}>
        <p className={styles.toptext}>{reviewLocation}</p>
        <p className={styles.toptext}>{dateAndTime}</p>
      </div>
      <div className={styles.user_rating}>
        <span className={styles.reviewerImagecontainer}>
          <img
            src={userImage}
            alt={username}
            className={styles.reviewerImage}
          />
        </span>
        <div className={styles.username_stars}>
          <p className={styles.username}>{username}</p>
          <div className={styles.stars}>
            {stars.map(({ id, value }) => (
              <div key={id} className={styles.star}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.reviewtext}>{reviewtext}</div>
    </div>
  )
}

export default ReviewBadge
