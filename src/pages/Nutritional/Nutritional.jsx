import React from 'react'

import './index.scss'

export const Nutritional = () => {
  return (
    <div className="nutritional">
      <h1 className="nutritional__title">NUTRITIONAL FACTS</h1>

      <div className="nutritional-main">
      
      <div className="nutritional-left">
        <div className="nutritional-left-components">
           <div>
             <strong style={{marginLeft: '5.7rem'}}>Energy</strong> 
              <p className="nutritional-text-left" style={{width: '150px'}}>400 kcal in one bottle 20% of your daily needs</p>
           </div>
           <img 
             src="../Nutritional1.png" 
             alt="logo"
             height={40}
             width={30}
             style={{marginLeft: '0.5rem', }} 
           />
        </div>

        <div className="nutritional-left-components" style={{marginLeft: '5rem'}}>
           <div>
             <strong style={{marginLeft: '5.6rem'}}>Nutrients</strong> 
              <p className="nutritional-text-left" style={{width: '160px'}}>25 micronutrients 20% of your daily requirements in each bottle</p>
           </div>
           <img 
             src="../Nutritional2.png" 
             alt="logo"
             height={40}
             width={40}
             style={{marginLeft: '0.5rem', }} 
           />
        </div>

        <div className="nutritional-left-components">
           <div>
             <strong>Neutral pleasant taste</strong> 
              <p className="nutritional-text-left" style={{width: '228px',marginLeft: '-3.7rem'}}>Enjoy Simpleat's neutral taste several times a day and never get tired</p>
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
         className="nutritional__imageLeft"
      />

      <img 
         src="../Home1.png" 
         alt="logo"
         className="nutritional__image"
      />

      <img 
         src="../EllipseR.png" 
         alt="logo"
         className="nutritional__imageRight"
      />

      <div className="nutritional-right">
        <div className="nutritional-right-components">
        <img 
             src="../Nutritional4.png" 
             alt="logo"
             height={40}
             width={40}
             style={{marginLeft: '0.5rem', }} 
           />
           <div>
             <strong style={{marginLeft: '0.7rem'}}>Vegan, lactose-free, nut-free</strong> 
              <p className="nutritional-text-right">Easy to make food descisions.</p>
           </div>
        </div>

        <div className="nutritional-right-components" style={{marginLeft: '3.5rem'}}>
        <img 
             src="../Nutritional5.png" 
             alt="logo"
             height={40}
             width={40}
           />
           <div>
             <strong style={{marginLeft: '0.6rem'}}>Scientifically approved</strong> 
              <p className="nutritional-text-right" style={{width: '200px',marginLeft: '0.6rem'}}>Simpleat is designed in a lab, based on clinical studies and produced using the latest high-tech.</p>
           </div>
        </div>

        <div className="nutritional-right-components"  style={{marginLeft: '1rem'}}>
          <img 
             src="../Nutritional6.png" 
             alt="logo"
             height={40}
             width={30}
             style={{marginLeft: '0.5rem', }} 
           />
           <div>
             <strong style={{marginLeft: '0.7rem'}}>Neutral pleasant taste</strong> 
              <p className="nutritional-text-right" style={{width: '228px',marginLeft: '0.7rem'}}>Enjoy Simpleat's neutral taste several times a day and never get tired</p>
           </div>
         </div>
       </div>
      </div>
    </div>
  )
}