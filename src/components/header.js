import React from "react"

const header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>
          Notre<span>Studio</span>
        </h1>
      </div>
      <div className="menu">
        <ul class="nav">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#offerings">Services</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default header
