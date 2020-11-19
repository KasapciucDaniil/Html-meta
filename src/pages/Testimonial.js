import React from 'react'

export const Testimonial = () => {
  return (
    <div style={{marginTop: '2rem'}} className="testimonial-page">
      <h1 style={{fontWeight: '400', textAlign: 'center'}}>Testimonial</h1>

      <p style={{textAlign: 'center', fontSize: '15px', marginTop: '2rem'}}>Simpleat is made to provide the perfectly balanced diet with every nutrient your body needs for optimal health.</p>

      <div style={{display: 'flex', marginLeft: '-1.1rem'}}>
        <div className="human-1">
          <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             style={{marginLeft: '8.7rem', marginTop: '0.5rem'}} 
           />
           <div style={{paddingTop: '4rem', marginLeft: '0.3rem'}}>
            <strong style={{color: 'white', fontSize: '14px'}}>Anna,27 • Manager</strong>
            <p style={{color: 'white', fontSize: '12px', fontWeight: '500'}}>Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
        </div>

        <div className="human-2">
        <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             style={{marginLeft: '8.7rem', marginTop: '0.5rem'}} 
           />
           <div style={{paddingTop: '4rem', marginLeft: '0.3rem'}}>
            <strong style={{color: 'white', fontSize: '14px'}}>Chester,33 • Manager</strong>
            <p style={{color: 'white', fontSize: '12px',fontWeight: '500'}}>Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
        </div>

        <div className="human-3">
        <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             style={{marginLeft: '8.7rem', marginTop: '0.5rem'}} 
           />
           <div style={{paddingTop: '4rem', marginLeft: '0.3rem'}}>
            <strong style={{color: 'white', fontSize: '14px'}}>Noah,25 • Manager</strong>
            <p style={{color: 'white', fontSize: '12px', fontWeight: '500'}}>Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
        </div>

        <div className="human-4">
        <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             style={{marginLeft: '8.7rem', marginTop: '0.5rem'}} 
           />
           <div style={{paddingTop: '4rem', marginLeft: '0.3rem'}}>
            <strong style={{color: 'white', fontSize: '14px'}}>Victor,23 • Manager</strong>
            <p style={{color: 'white', fontSize: '12px', fontWeight: '500'}}>Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
        </div>

      </div>
    </div>
  )
}