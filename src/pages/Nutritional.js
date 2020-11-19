import React from 'react'

export const Nutritional = () => {
  return (
    <div style={{marginTop: '2rem'}} className="nutritional-page">
      <h1 style={{fontWeight: '400', textAlign: 'center'}}>NUTRITIONAL FACTS</h1>

      <div style={{display: 'flex', marginLeft: '-1.3rem'}}>
      
      <div>
        <div style={{display: 'flex', marginTop: '4rem', marginLeft: '8rem'}}>
           <div>
             <strong style={{marginLeft: '5.7rem'}}>Energy</strong> 
              <p style={{width: '150px', textAlign: 'right', color: '#777', fontSize: '14px'}}>400 kcal in one bottle 20% of your daily needs</p>
           </div>
           <img 
             src="../Nutritional1.png" 
             alt="logo"
             height={40}
             width={30}
             style={{marginLeft: '0.5rem', }} 
           />
        </div>

        <div style={{display: 'flex', marginTop: '2rem', marginLeft: '5rem'}}>
           <div>
             <strong style={{marginLeft: '5.6rem'}}>Nutrients</strong> 
              <p style={{width: '160px', textAlign: 'right', color: '#777', fontSize: '14px'}}>25 micronutrients 20% of your daily requirements in each bottle</p>
           </div>
           <img 
             src="../Nutritional2.png" 
             alt="logo"
             height={40}
             width={40}
             style={{marginLeft: '0.5rem', }} 
           />
        </div>

        <div style={{display: 'flex', marginTop: '2rem', marginLeft: '8rem'}}>
           <div>
             <strong>Neutral pleasant taste</strong> 
              <p style={{width: '228px', textAlign: 'right', color: '#777', fontSize: '14px', marginLeft: '-3.7rem'}}>Enjoy Simpleat's neutral taste several times a day and never get tired</p>
           </div>
           <img 
             src="../Nutritional3.png" 
             alt="logo"
             height={40}
             width={30}
             style={{marginLeft: '0.5rem', }} 
           />
        </div>
      </div>

      <img 
         src="../EllipseL.png" 
         alt="logo"
         height={277}
         width={70}
         style={{marginLeft: '1rem', marginTop: '5rem'}} 
      />

      <img 
         src="../Home1.png" 
         alt="logo"
         height={217}
         width={180}
         style={{marginLeft: '1rem', marginTop: '7rem'}} 
      />

      <img 
         src="../EllipseR.png" 
         alt="logo"
         height={277}
         width={70}
         style={{marginLeft: '1rem', marginTop: '5rem'}} 
      />

      <div>
        <div style={{display: 'flex', marginTop: '4rem', marginLeft: '1rem'}}>
        <img 
             src="../Nutritional4.png" 
             alt="logo"
             height={40}
             width={40}
             style={{marginLeft: '0.5rem', }} 
           />
           <div>
             <strong style={{marginLeft: '0.7rem'}}>Vegan, lactose-free, nut-free</strong> 
              <p style={{marginLeft: '0.7rem', textAlign: 'left', color: '#777', fontSize: '14px'}}>Easy to make food descisions.</p>
           </div>
        </div>

        <div style={{display: 'flex', marginTop: '3rem', marginLeft: '3.5rem'}}>
        <img 
             src="../Nutritional5.png" 
             alt="logo"
             height={40}
             width={40}
           />
           <div>
             <strong style={{marginLeft: '0.6rem'}}>Scientifically approved</strong> 
              <p style={{width: '200px', textAlign: 'left', color: '#777', fontSize: '14px', marginLeft: '0.6rem'}}>Simpleat is designed in a lab, based on clinical studies and produced using the latest high-tech.</p>
           </div>
        </div>

        <div style={{display: 'flex', marginTop: '2rem', marginLeft: '1rem'}}>
          <img 
             src="../Nutritional6.png" 
             alt="logo"
             height={40}
             width={30}
             style={{marginLeft: '0.5rem', }} 
           />
           <div>
             <strong style={{marginLeft: '0.7rem'}}>Neutral pleasant taste</strong> 
              <p style={{width: '228px', textAlign: 'left', color: '#777', fontSize: '14px', marginLeft: '0.7rem'}}>Enjoy Simpleat's neutral taste several times a day and never get tired</p>
           </div>
        </div>
      </div>
        

      </div>
    </div>
  )
}