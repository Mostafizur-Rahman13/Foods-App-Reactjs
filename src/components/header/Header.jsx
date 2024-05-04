import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='header'>

      <div className='header-contents'>

        <h2>Order your favourite food here</h2>

        <p>chose from a diverse menu featuring a delectable arry of dishes crafted with the finest ingredients and elevate your dining experience, once delicious meal at a time.</p>

        <button onClick={() => navigate("#explore-menu")}>View Menu</button>

      </div>
    </div>
  )
}

export default Header