import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <ul className="nav background-light">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to={'/search-asin-number'}>Search by ASIN number</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to={'/search-qr-code'}>Search by QR Code</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" to={'/search-image'}>Search by image</Link>
      </li>
      <li className="nav-item">
        {/*<a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>*/}
      </li>
    </ul>
  )
}



export default Menu
