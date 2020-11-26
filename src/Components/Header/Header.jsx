import React from 'react'
import { Button } from 'react-bootstrap'

import './style.scss'

export const Header = () => (
    <div className="header-border">
      <div className="header">
         <img 
           src="../header1.png" 
           alt="logo"
           className="header__img"
         />
         <p className="header__txt" style={{marginLeft: '0.2rem'}}>Cat</p>
         <p className="header__txt" style={{marginLeft: '1rem'}}>Contact</p>
      </div> 
      <div className="header__logo">
      <img 
           src="../header2.png" 
           alt="logo"
           height={45}
           width={70}
           style={{marginTop: '1rem', marginLeft: '7.5rem'}} 
         />
      </div> 
      <div className="header-sign">
      <img 
           src="../header3.png" 
           alt="logo"
           height={18}
           width={14}
           style={{marginTop: '1.5rem', marginLeft: '13rem'}} 
         />
         <p className="header__txt" style={{marginLeft: '0.2rem'}}>Sign in</p>
         <Button style={{marginTop: '0.7rem', marginLeft: '3rem'}} className="btn-header" variant="success">Order now</Button>
      </div>
    </div>
)