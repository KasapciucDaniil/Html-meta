import React from 'react'
import { Button } from 'react-bootstrap'

export const Header = () => (
    <div className="header">
      <div style={{display: 'flex'}}>
         <img 
           src="../header1.png" 
           alt="logo"
           height={20}
           width={20}
           style={{marginTop: '1.4rem', marginLeft: '12rem'}} 
         />
         <p style={{marginTop: '1.2rem', marginLeft: '0.2rem', fontSize: '16px', color: '#121920'}}>Cat</p>
         <p style={{marginTop: '1.2rem', marginLeft: '1rem', fontSize: '16px', color: '#121920'}}>Contact</p>
      </div> 
      <div className="header-logo">
      <img 
           src="../header2.png" 
           alt="logo"
           height={45}
           width={70}
           style={{marginTop: '1rem', marginLeft: '7.5rem'}} 
         />
      </div> 
      <div className="header-sign" style={{display: 'flex'}}>
      <img 
           src="../header3.png" 
           alt="logo"
           height={18}
           width={14}
           style={{marginTop: '1.5rem', marginLeft: '13rem'}} 
         />
         <p style={{marginTop: '1.3rem', marginLeft: '0.2rem', fontSize: '15px', color: '#121920'}}>Sign in</p>
         <Button style={{marginTop: '0.7rem', marginLeft: '3rem'}} className="btn-header" variant="success">Order now</Button>
      </div>
    </div>
)