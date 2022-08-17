import React from 'react'
import Header from '../component/header/Header'
import GBody from '../component/body/generalBody/GBody'
import {category} from '../api/tmbdApi'
import Footer from '../component/footer/Footer'
function Movies() {
  return (
    <div>
        <Header home={false} type={'movie'}/>
        <GBody category={category.movie} title={'Movies for you !'}/>
        <Footer/>
    </div>
  )
}

export default Movies