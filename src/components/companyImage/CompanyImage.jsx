import React from 'react'

const CompanyImage = ({ icon, backgroundColor, companyName, className }) => {
  return (
    <div style={{ backgroundColor }} className={className}>
      <img src={icon} alt={companyName} />
    </div>
  )
}

export default CompanyImage
