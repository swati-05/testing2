import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <h1>welcome to home Page</h1>
    <Link to="/form">home</Link>
    </>
  )
}

export default Home