import React from 'react';
import Slider from './slider/Slider';
import Navbar from './Navbar';
import './Header.css'
function Header({type,home}) {
  return (
    <>
      <Navbar home={home}/>
      <Slider type={type} />
    </>
  )
}

export default Header