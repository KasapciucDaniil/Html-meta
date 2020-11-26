import React from 'react'
import { Form } from 'react-bootstrap'

import './style.scss'

export const Footer = () => {
  return (
    <div className="footer-border">
       <div>
          <div className="footer__first">
            <div className="footer-block1">
            <div className="contact-links">
               <a href="https://www.facebook.com/simpleat.me/">
                <img 
                  alt="logo"
                  src="../social1.png" 
                  className="footer-img-contact"
                />
               </a>
               <p className="img__txt" style={{marginTop: '1rem', marginLeft: '0.3rem'}}>BLOG</p>
              </div> 
              <div className="line"></div>

              <div className="contact-links">
               <a href="https://twitter.com/startupchile/status/1213153252331675649">
               <img 
                 alt="logo"
                 className="footer-img-contact"
                 src="../social2.png" 
               />
               </a> 
               <p  className="img__txt" style={{marginTop: '1rem', marginLeft: '0.6rem'}}>FAQ</p>
              </div> 
              <div className="line"></div>

              <div className="contact-links">
               <a href="https://www.instagram.com/simpleat_ar/?hl=ru">
                <img 
                  alt="logo"
                  src="../social3.png"
                  className="footer-img-contact"
                  style={{marginLeft: '-0.8rem'}} 
                />  
               </a> 
               <p className="img__txt" style={{marginTop: '1rem', marginLeft: '-0.5rem'}}>LEGAL</p>
              </div> 
            </div>
              <p className="img__txt" style={{marginLeft: '2.5rem'}}>© 2018, Simpleat</p>
          </div>
       </div>

      <div className="last-footer" style={{display: 'flex'}}>
        <div style={{display: 'flex', marginTop: '0.2rem'}}>
            <img 
              className="footer-img-contact"
              alt="logo"
              src="../phone.png"
              style={{marginLeft: '8rem', marginTop: '1rem'}} 
             />
               <p className="img__txt" style={{marginLeft: '0.5rem', marginTop: '0.7rem'}}>+123 456-789-000 <br />
               Every day from 8 AM - 8 PM</p>
         </div> 

         <div style={{display: 'flex', marginTop: '0.2rem'}}>
           <a href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">
           <img 
              alt="logo"
              src="../mail.png"
              style={{marginLeft: '3rem', marginTop: '1rem'}} 
             />
           </a>
               <p className="img__txt" style={{marginLeft: '0.5rem', marginTop: '0.7rem'}}>info@simleat.me <br />
               We will respond ASAP</p>
         </div> 

         <Form.Control as="select" custom>
           <div className="select-footer"></div>
           <option style={{paddingLeft: '1rem'}}>English</option>
         </Form.Control>
       </div>
    </div>
  )
}