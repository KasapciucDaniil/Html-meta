import React from 'react'
import {Nav, NavDropdown, Button} from 'react-bootstrap'

import './index.scss'

export const Simpleat = () => {
  return (
    <div className="simpleat-border">
      <div className="simpleat">
      <h1 className="simpleat__title">SIMPLEAT — SUPER FOOD</h1>

      <p className="simpleat__text">Nutritional Profile.<br />
      Click on the Title to learm more</p>

      <Nav fill className="simpleat__navbar" variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="link-3">Macronutreins <br />
          <strong className="navbar-title">_______</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Vitamins <br />
          <strong className="navbar-title">_____</strong></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Minerals <br />
          <strong className="navbar-title">_____</strong></Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="block-card">
        <div>
           <img 
             alt="logo"
             className="bottle-img"
             src="../Bottle.png"
           />   
           <h3 className="bottle-title">What's inside?
          </h3>
        </div>
      

        <div>
          <ul style={{marginTop: '3.5rem', marginLeft: '3rem'}}>
          <div className="components__value">
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
            <div className="components__value">
             <li className="footer-li">Fat</li>
             <li className="footer-li-second" style={{marginLeft: '11.9rem'}}>27.7g</li>
            </div>
               <NavDropdown.Divider />
               <div className="components__value">
                <li className="footer-li">Saturated</li>
                <li className="footer-li-second" style={{marginLeft: '9.2rem'}}>10.5g</li>
               </div>
                 <NavDropdown.Divider />
                 <div className="components__value">
                  <li className="footer-li">Monosaturated</li>
                  <li className="footer-li-second" style={{marginLeft: '7rem'}}>5.3g</li>
                 </div>
                   <NavDropdown.Divider />
                   <div className="components__value">
                    <li className="footer-li">Polyunsaturated</li>
                    <li className="footer-li-second" style={{marginLeft: '6.65rem'}}>10.4g</li> 
                   </div> 
                     <NavDropdown.Divider />
                     <div className="components__value">
                      <li className="footer-li">Omega 3 fatty acids</li>
                      <li className="footer-li-second" style={{marginLeft: '5.2rem'}}>1.3g</li>
                     </div>
                       <NavDropdown.Divider />
                       <div className="components__value">
                        <li className="footer-li">Omega 6 fatty acids</li> 
                        <li className="footer-li-second" style={{marginLeft: '5.1rem'}}>7.6g</li> 
                      </div>
                       <NavDropdown.Divider />
                       <div className="components__value">
                        <li className="footer-li">Carbohydrates</li>
                        <li className="footer-li-second" style={{marginLeft: '7.2rem'}}>80.8g</li>
                      </div>
                     <NavDropdown.Divider />
                     <div className="components__value">
                      <li className="footer-li">Sugars</li>
                      <li className="footer-li-second" style={{marginLeft: '10.2rem'}}>20.7g</li>
                     </div>
                   <NavDropdown.Divider />
                   <div className="components__value">
                    <li className="footer-li">Fiber</li>
                    <li className="footer-li-second" style={{marginLeft: '10.8rem'}}>7.0g</li>
                   </div>
                 <NavDropdown.Divider />
                  <div className="components__value">
                  <li className="footer-li">Protein</li>
                  <li className="footer-li-second" style={{marginLeft: '9.9rem'}}>40.1g</li>
                 </div>  
               <NavDropdown.Divider />
               <div className="components__value">
               <li className="footer-li">Salt</li>
               <li className="footer-li-second" style={{marginLeft: '11.3rem'}}>2.1g</li>
              </div>
          </ul>
        </div>
      </div>

      <div className="simpleat__options">
        <Button variant="success" className="simpleat-btn">Order now</Button>
      </div>
      </div>
    </div>
  )
}