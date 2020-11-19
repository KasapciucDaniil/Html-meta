import React from 'react'
import { Button } from 'react-bootstrap'

export const SecondHome = () => {
  return (
    <div className="second-page">
      <h1 style={{textAlign: 'center', fontWeight: '400', marginTop: '4rem', marginLeft: '1rem'}} className="main-title">WHY SIMPLEAT?</h1>
      <p style={{color: '#777', textAlign: 'center', marginTop: '1.5rem', marginLeft: '1rem'}}>Enjoy all the benefits of Simpleat</p>

     <div style={{display: 'flex', marginLeft: '-1.3rem'}}>
        <div>
          <div className="block-1">
           <img 
             src="../logo1.png" 
             alt="logo"
             height={35}
             width={35}
             style={{marginTop: '1.5rem', marginLeft: '1.4rem'}} 
           /> 
          </div>
          <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '4.6rem', marginTop: '1.7rem'}}>COMPLETE NUTRITION</h5>
          <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '3.9rem', marginTop: '1.2rem', fontSize: '15px'}}> 
            One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
            </p>
        </div>

        <div style={{marginLeft: '-3rem'}}>
          <div className="block-2">
           <img 
              src="../logo2.png" 
              alt="logo"
              height={35}
              width={35}
              style={{marginTop: '1.4rem', marginLeft: '1.5rem'}} 
          /> 
          </div>
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '7.3rem', marginTop: '1.7rem'}}>SAVE TIME</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '3.9rem', marginTop: '1.2rem', fontSize: '15px'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

      <div style={{marginLeft: '-3rem'}}>
      <div className="block-3">
           <img 
              src="../logo3.png" 
              alt="logo"
              height={35}
              width={35}
              style={{marginTop: '1.4rem', marginLeft: '1.6rem'}} 
          /> 
          </div>
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '6.8rem', marginTop: '1.7rem'}}>SAVE MONEY</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '3.9rem', marginTop: '1.2rem', fontSize: '15px'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

      <div style={{marginLeft: '-3rem'}}>
      <div className="block-4">
           <img 
              src="../Nutritional4.png" 
              alt="logo"
              height={35}
              width={35}
              style={{marginTop: '1.4rem', marginLeft: '1.4rem'}} 
          /> 
          </div>
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '6.5rem', marginTop: '1.7rem'}}>GREAT HEALTH</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '3.9rem', marginTop: '1.2rem', fontSize: '15px'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

      <div style={{marginLeft: '-3rem'}}>
      <div className="block-5">
           <img 
              src="../logo5.png" 
              alt="logo"
              height={35}
              width={35}
              style={{marginTop: '1.4rem', marginLeft: '1.45rem'}} 
          /> 
          </div>
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '6.7rem', marginTop: '1.7rem'}}>HIGH ENERGY</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '3.9rem', marginTop: '1.2rem', fontSize: '15px'}}> 
           One bottle of Simleat provides 20% of your daiyly needs for calories and micronutrients
          </p>
      </div>

      <div style={{marginLeft: '-3rem'}}>
      <div className="block-6">
           <img 
              src="../logo6.png" 
              alt="logo"
              height={35}
              width={45}
              style={{marginTop: '1.4rem', marginLeft: '1.1rem'}} 
          /> 
          </div>
         <h5 style={{fontWeight: '500', fontSize: '14px', marginLeft: '6.9rem', marginTop: '1.7rem'}}>NO HUNGER</h5>
         <p style={{color: '#777', width: '180px', textAlign: 'center', marginLeft: '3.9rem', marginTop: '1.2rem', fontSize: '15px'}}> 
           A bottle of Simpleat immediately saves you from hunger and satisfy your body needs. 
          </p>
      </div>

      </div>

      <Button variant="success">Order Simpleat</Button> 
    </div>
  )
}