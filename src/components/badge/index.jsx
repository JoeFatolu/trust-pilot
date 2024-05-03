import React from 'react'

const Badge = ({ title, backgroundColor, badgeColor, className }) => {
  return (
    <span
      className={className}
      style={{ backgroundColor: backgroundColor, color: badgeColor }}
    >
      <p>{title}</p>
    </span>
  )
}

export default Badge
