import React from 'react'
import { Header } from './Components/Header'
import { Home } from './pages/Home'
import { Info } from './pages/Info'
import { SecondHome } from './pages/SecondHome'
import { Footer } from './Components/Footer'
import { Testimonial } from './pages/Testimonial'
import { Ingredients } from './pages/Ingredients'
import { Nutritional } from './pages/Nutritional'
import { Scale } from './pages/Scale'
import { Join } from './pages/Join'
import { Simpleat } from './pages/Simpleat'


function App() {
  return (
   <div className="main" >
     <Header />
       <Home />
         <Info />
           <SecondHome />
             <Testimonial />
           <Ingredients />
         <Nutritional />
       <Scale />  
       <Simpleat />
       <Join />
     <Footer />

   </div> 
  )
}

export default App;
