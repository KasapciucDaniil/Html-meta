import React from 'react'
import { Header } from './Components/Header/Header'
import { Home } from './pages/Home'
import { Info } from './pages/Info/Info'
import { SecondHome } from './pages/SecondHome/SecondHome'
import { Footer } from './Components/Footer/Footer'
import { Testimonial } from './pages/Testimonial/Testimonial'
import { Ingredients } from './pages/Ingredient/Ingredients'
import { Nutritional } from './pages/Nutritional/Nutritional'
import { Scale } from './pages/Scale/Scale'
import { Join } from './pages/Join/Join'
import { Simpleat } from './pages/Simpleat/Simpleat'


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
