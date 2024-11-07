import React from 'react'
import Add from './component/Add'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import OptionButton from './component/OptionButton'
import ShopNow from './component/ShopNow'
import Hero from './section/hero'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <OptionButton />
      <Add />
      <ShopNow />
      <Footer />
      
    </div>
  )
}

export default App