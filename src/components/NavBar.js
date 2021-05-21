import { useState } from 'react'

const NavBar = () => {
  const [showNav , setShowNav] = useState(false)


  const onShow = () => {
    setShowNav(!showNav)
  }
    return (
        <div className="nav-container">
        <nav>
          <div className="logo">
          <h1>crowdfund</h1>
          <label className={`${showNav && 'hamburger-close' } hamburger`} onClick={onShow}></label>
          </div>
          <div className={`${showNav && "show"} nav-headers`}>
          <ul className="nav-list"> 
            <li>About</li>
            <li> Discover</li>
            <li>Get Started</li>
          </ul>
          </div>
        </nav>
      </div>
    )
}

export default NavBar
