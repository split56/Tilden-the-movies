import React from 'react'
import Header from '../component/header/Header'
import Body from '../component/body/homebody/Body'
import Footer from '../component/footer/Footer'
function Home() {
  return (
    <div>
        <Header type='movie' home={true}/>
        <Body/>
        <Footer/>
    </div>
  )
}

export default Home