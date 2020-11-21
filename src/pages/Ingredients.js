import React from 'react'

export const Ingredients = () => {
  return (
    <div className="second-page">
      <h1 style={{textAlign: 'center', fontWeight: '400', marginTop: '4rem', marginLeft: '1rem'}} className="main-title">MAIN INGREDIENTS</h1>
      <p style={{color: '#777', textAlign: 'center', marginTop: '1.5rem', marginLeft: '1rem'}}>What is inside Simpleat?</p>

     <div style={{display: 'flex', justifyContent: 'center', marginRight: '5rem'}}>
        <div>
         <img 
            src="../Ingredient1.png" 
            alt="logo"
            height={140}
            width={140}
            style={{marginTop: '3rem', marginLeft: '7rem', borderRadius: '75px'}} 
          /> 
          <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '7.3rem', marginTop: '1.7rem'}}>SOYBEAN PROTEIN</h5>
          <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '5.5rem', marginTop: '1rem', fontSize: '15px'}}> 
           Soy is a complete protein and rich in vitamins and minerals. Soybean protein provides all the essential amino acids in the amounts needed for human health.
            </p>
        </div>

        <div style={{marginLeft: '-3rem'}}>
          <img 
            src="../Ingredient2.png" 
            alt="logo"
            height={140}
            width={140}
            style={{marginTop: '3rem', marginLeft: '7rem', borderRadius: '75px'}} 
          /> 
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '10.5rem', marginTop: '1.7rem'}}>OILS</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '5.5rem', marginTop: '1rem', fontSize: '15px'}}> 
          The perfect mix of lipids from sea algae, coconut, sunflower, flaxseed and canola. Rich with omega-3, unsaturated fatty acids DHA and EPA, which contribute to the normal function of the heart and brain function.
          </p>
      </div>

      <div style={{marginLeft: '-3rem'}}>
          <img 
            src="../Ingredient3.png" 
            alt="logo"
            height={140}
            width={140}
            style={{marginTop: '3rem', marginLeft: '7rem', borderRadius: '75px'}} 
          /> 
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '9.1rem', marginTop: '1.7rem'}}>OAT FLOUR</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '5.7rem', marginTop: '1rem', fontSize: '15px'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

      <div style={{marginLeft: '-3rem'}}>
          <img 
            src="../Ingredient4.png" 
            alt="logo"
            height={140}
            width={140}
            style={{marginTop: '3rem', marginLeft: '7rem', borderRadius: '75px'}} 
          /> 
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '8.3rem', marginTop: '1.7rem'}}>ISOMALTULOSE</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '5.7rem', marginTop: '1rem', fontSize: '15px'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

      <div style={{marginLeft: '-3rem'}}>
          <img 
            src="../Ingredient5.png" 
            alt="logo"
            height={140}
            width={140}
            style={{marginTop: '3rem', marginLeft: '7rem', borderRadius: '75px'}} 
          /> 
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '7rem', marginTop: '1.7rem'}}>MINERALS VITAMINS</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '5.7rem', marginTop: '1rem', fontSize: '15px'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

      </div>
    </div>
  )
}