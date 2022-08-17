import React from 'react'
import Header from '../component/header/Header'
import GBody from '../component/body/generalBody/GBody'
import {category} from '../api/tmbdApi'
import Footer from '../component/footer/Footer'
function Tv() {
  return (
    <div>
        <Header home={false}/>
        <GBody category={category.tv} title={'Tv shows for you !'}/>
        <Footer/>
    </div>
  )
}

export default Tv