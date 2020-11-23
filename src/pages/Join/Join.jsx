import React from 'react'
import { FormControl, Form, Button } from 'react-bootstrap'

import './index.scss'

export const Join = () => {
  return (
    <div className="join-border">
      <div className="join-page">
        <div>
          <h1 className="title">JOIN US</h1>
          <p className="txt">Nutritional Profil
            Click on the Title to learm more</p>
        </div>

      <Form inline>
         <FormControl 
            style={{margin: '0 auto'}} 
            type="text" 
            placeholder="Your e-mail" 
            className="mr-sm-2" />
               <Button variant="success" className="btn-sign">SIGN UP</Button>
      </Form>
      </div>
    </div>
  )
}