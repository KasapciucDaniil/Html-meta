import React from 'react'
import {Nav, NavDropdown, Button} from 'react-bootstrap'

import './index.scss'

export const Simpleat = () => {
  return (
    <div className="simpleat-page">
      <h1 style={{fontWeight: '400', textAlign: 'center'}}>SIMPLEAT — SUPER FOOD</h1>

      <p style={{color: '#777', height: '131px', width: '230px', textAlign: 'center',  marginLeft: '25rem', marginTop: '4rem'}}>Nutritional Profile.<br />
      Click on the Title to learm more</p>

      <Nav fill variant="tabs" style={{width: '50rem', marginLeft: '7rem'}}>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Macronutreins <br />
          <strong style={{fontWeight: '800'}}>_______</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Vitamins <br />
          <strong style={{fontWeight: '800'}}>_____</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Minerals <br />
          <strong style={{fontWeight: '800'}}>_____</strong></Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="block-card" style={{display: 'flex'}}>
        <div className="bottle">
           <img 
             width={120}
             height={300}
             alt="logo"
             src="../Bottle.png"
             style={{marginTop: '5rem', marginLeft: '9rem'}}
           />   
           <h3 style={{marginTop: '-10rem', marginLeft: '7.5rem', fontWeight: '350'}}>What's inside?
          </h3>
        </div>
      

        <div>
          <ul style={{marginTop: '3.5rem', marginLeft: '3rem'}}>
          <div style={{display: 'flex'}}>
           <li className="footer-li" style={{marginTop: '1rem'}}>Calories</li>
           <div>
           <li className="footer-li-main" style={{marginLeft: '10rem',marginTop: '-1rem'}}>Amont</li>
           <li className="footer-li-second" style={{marginLeft: '10rem', marginTop: '1rem'}}>400 kcal</li>
           </div>
           <div>
            <li className="footer-li-main" style={{marginLeft: '8rem', marginTop: '-1rem'}}>%RI</li>
            <li className="footer-li-second" style={{marginLeft: '8rem', marginTop: '1rem'}}>20%</li>
           </div>
          </div>
            <NavDropdown.Divider style={{width: '480px'}}/>
            <div style={{display: 'flex'}}>
             <li className="footer-li">Fat</li>
             <li className="footer-li-second" style={{marginLeft: '11.9rem'}}>27.7g</li>
            </div>
               <NavDropdown.Divider />
               <div style={{display: 'flex'}}>
                <li className="footer-li">Saturated</li>
                <li className="footer-li-second" style={{marginLeft: '9.2rem'}}>10.5g</li>
               </div>
                 <NavDropdown.Divider />
                 <div style={{display: 'flex'}}>
                  <li className="footer-li">Monosaturated</li>
                  <li className="footer-li-second" style={{marginLeft: '7rem'}}>5.3g</li>
                 </div>
                   <NavDropdown.Divider />
                   <div style={{display: 'flex'}}>
                    <li className="footer-li">Polyunsaturated</li>
                    <li className="footer-li-second" style={{marginLeft: '6.65rem'}}>10.4g</li> 
                   </div> 
                     <NavDropdown.Divider />
                     <div style={{display: 'flex'}}>
                      <li className="footer-li">Omega 3 fatty acids</li>
                      <li className="footer-li-second" style={{marginLeft: '5.2rem'}}>1.3g</li>
                     </div>
                       <NavDropdown.Divider />
                       <div style={{display: 'flex'}}>
                        <li className="footer-li">Omega 6 fatty acids</li> 
                        <li className="footer-li-second" style={{marginLeft: '5.1rem'}}>7.6g</li> 
                      </div>
                       <NavDropdown.Divider />
                       <div style={{display: 'flex'}}>
                        <li className="footer-li">Carbohydrates</li>
                        <li className="footer-li-second" style={{marginLeft: '7.2rem'}}>80.8g</li>
                      </div>
                     <NavDropdown.Divider />
                     <div style={{display: 'flex'}}>
                      <li className="footer-li">Sugars</li>
                      <li className="footer-li-second" style={{marginLeft: '10.2rem'}}>20.7g</li>
                     </div>
                   <NavDropdown.Divider />
                   <div style={{display: 'flex'}}>
                    <li className="footer-li">Fiber</li>
                    <li className="footer-li-second" style={{marginLeft: '10.8rem'}}>7.0g</li>
                   </div>
                 <NavDropdown.Divider />
                  <div style={{display: 'flex'}}>
                  <li className="footer-li">Protein</li>
                  <li className="footer-li-second" style={{marginLeft: '9.9rem'}}>40.1g</li>
                 </div>  
               <NavDropdown.Divider />
               <div style={{display: 'flex'}}>
               <li className="footer-li">Salt</li>
               <li className="footer-li-second" style={{marginLeft: '11.3rem'}}>2.1g</li>
              </div>
          </ul>
        </div>
      </div>
      <Button variant="success" style={{marginLeft: '28rem', marginTop: '3rem'}}>Order now</Button>
    </div>
  )
}