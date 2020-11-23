import React from 'react'

import './index.scss'

export const Ingredients = () => {
  return (
    <div className="second-page">
      <h1 className="title">MAIN INGREDIENTS</h1>
      <p className="txt">What is inside Simpleat?</p>

     <div className="components">
        <div>
         <img 
            src="../Ingredient1.png" 
            alt="logo"
            height={140}
            width={140}
            className="img"
          /> 
            <h5 className="card-title" style={{marginLeft: '7.3rem', marginTop: '1.7rem'}}>SOYBEAN PROTEIN</h5>
            <p className="card-txt" style={{marginLeft: '5.5rem'}}> 
           Soy is a complete protein and rich in vitamins and minerals. Soybean protein provides all the essential amino acids in the amounts needed for human health.
            </p>
        </div>

        <div className="position">
          <img 
            src="../Ingredient2.png" 
            alt="logo"
            height={140}
            width={140}
            className="img"
          /> 
           <h5 className="card-title" style={{marginLeft: '10.5rem', marginTop: '1.7rem'}}>OILS</h5>
           <p className="card-txt" style={{marginLeft: '5.5rem'}}> 
          The perfect mix of lipids from sea algae, coconut, sunflower, flaxseed and canola. Rich with omega-3, unsaturated fatty acids DHA and EPA, which contribute to the normal function of the heart and brain function.
          </p>
      </div>

        <div className="position">
          <img 
            src="../Ingredient3.png" 
            alt="logo"
            height={140}
            width={140}
            className="img"
          /> 
           <h5 className="card-title" style={{marginLeft: '9.1rem', marginTop: '1.7rem'}}>OAT FLOUR</h5>
           <p className="card-txt" style={{marginLeft: '5.7rem'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

       <div className="position">
          <img 
            src="../Ingredient4.png" 
            alt="logo"
            height={140}
            width={140}
            className="img"
          /> 
           <h5 className="card-title" style={{marginLeft: '8.3rem', marginTop: '1.7rem'}}>ISOMALTULOSE</h5>
           <p className="card-txt" style={{marginLeft: '5.7rem'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

       <div className="position">
          <img 
            src="../Ingredient5.png" 
            alt="logo"
            height={140}
            width={140}
            className="img"
          /> 
           <h5 className="card-title" style={{marginLeft: '7rem', marginTop: '1.7rem'}}>MINERALS VITAMINS</h5>
           <p className="card-txt" style={{marginLeft: '5.7rem'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
       </div>
      </div>
    </div>
  )
}