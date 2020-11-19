import React from 'react'
import { Form } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className="main-footer">
       <div>
          <div style={{display: 'flex', marginTop: '-6rem', marginLeft: '31.5rem'}}>
             <div>
               <a href="https://www.facebook.com/simpleat.me/">
                <img 
                  height={40}
                  width={40}
                  alt="logo"
                  style={{cursor: 'pointer'}}
                  src="../social1.png" 
                />
               </a>
               <p style={{color: '#FFFFFF', fontSize: '13px', marginTop: '1rem', fontWeight: '300', marginLeft: '0.3rem'}}>BLOG</p>
              </div> 
              <div style={{ marginLeft: '1rem',borderLeft: '1px solid #F0F6F4', height: '30px', marginTop: '3.3rem'}}></div>

              <div style={{marginLeft: '2rem'}}>
               <a href="https://twitter.com/startupchile/status/1213153252331675649">
               <img 
                 height={40}
                 width={40}
                 alt="logo"
                 style={{cursor: 'pointer'}}
                 src="../social2.png" 
               />
               </a> 
               <p style={{color: '#FFFFFF', fontSize: '13px', marginTop: '1rem', fontWeight: '300', marginLeft: '0.6rem'}}>FAQ</p>
              </div> 
              <div style={{ marginLeft: '2rem',borderLeft: '1px solid #F0F6F4', height: '30px', marginTop: '3.3rem'}}></div>

              <div style={{marginLeft: '2rem'}}>
               <a href="https://www.instagram.com/simpleat_ar/?hl=ru">
                <img 
                  height={40}
                  width={40}
                  alt="logo"
                  src="../social3.png"
                  style={{marginLeft: '-0.8rem', cursor: 'pointer'}} 
                />  
               </a> 
               <p style={{color: '#FFFFFF', fontSize: '13px', marginTop: '1rem', fontWeight: '300', marginLeft: '-0.5rem'}}>LEGAL</p>
              </div> 
          </div>
          <p style={{color: '#FFFFFF', fontSize: '13px', marginLeft: '35.4rem', fontWeight: '300'}}>© 2018, Simpleat</p>
       </div>

      <div className="last-footer" style={{display: 'flex'}}>
        <div style={{display: 'flex', marginTop: '0.2rem'}}>
            <img 
              height={30}
              width={30}
              alt="logo"
              src="../phone.png"
              style={{marginLeft: '8rem', marginTop: '1rem', cursor: 'pointer'}} 
             />
               <p style={{color: '#FFFFFF', fontSize: '13px', fontWeight:  '300', marginLeft: '0.5rem', marginTop: '0.7rem'}}>+123 456-789-000 <br />
               Every day from 8 AM - 8 PM</p>
         </div> 

         <div style={{display: 'flex', marginTop: '0.2rem'}}>
           <a href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AccountChooser">
           <img 
              height={30}
              width={30}
              alt="logo"
              src="../mail.png"
              style={{marginLeft: '3rem', marginTop: '1rem', cursor: 'pointer'}} 
             />
           </a>
               <p style={{color: '#FFFFFF', fontSize: '13px', fontWeight:  '300', marginLeft: '0.5rem', marginTop: '0.7rem'}}>info@simleat.me <br />
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