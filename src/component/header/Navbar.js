import React from 'react'
import {Link} from 'react-router-dom'
function Navbar({home}) {
  return (
    <div className='navbar'>
      <div className='nav-left'>
        <div className='logo'>
          <Link to='/'>Tilden</Link>
        </div>
        <ul className='show-list'>
          <li className='show-item'>
            <Link to='/tv'>TV Series</Link>
          </li>
          <li className='show-item'>
            <Link to='/movies'>Movies</Link>
          </li>
        </ul>
      </div>
      <div className='nav-right'>
        {home && <button className='btn up-btn'> upgrade</button>}
      </div>
    </div>
  )
}

export default Navbar