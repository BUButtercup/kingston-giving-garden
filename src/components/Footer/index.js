import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <footer className="container-fluid d-flex flex-column">
      <small className="text-center">{'\u00A9'} Giving Garden 2022</small>
      <small className="text-center">Website photography by Kathy Curry</small>
      <small className="text-center">Site design by Nile Clark</small>
    </footer>
  )
}

export default Footer