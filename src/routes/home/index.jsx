import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFindCompany } from 'api'

const Home = () => {
  const navigate = useNavigate()
  const [domain, setDomain] = useState('')
  const findCompanies = useFindCompany()
  const { mutate, isLoading } = findCompanies

  const handleFormSubmit = (e) => {
    e.preventDefault()
    mutate(
      { domain },
      {
        onSuccess: (data) => {
          navigate('/company', { state: { data } })
        },
        onError: (error) => {
          console.log(error)
        },
      }
    )
  }
  if (isLoading) return <div>Loading...</div>
  return (
    <div>
      <>Welcome to the Home page</>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button>Search</button>
      </form>
      <></>
    </div>
  )
}

export default Home
