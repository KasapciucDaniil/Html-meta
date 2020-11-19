import React from 'react'
import { FormControl, Form, Button } from 'react-bootstrap'

export const Join = () => {
  return (
    <div className="join-page">
       <h1 style={{fontWeight: '300', textAlign: 'center', marginTop: '4rem'}}>JOIN US</h1>

       <p style={{color: '#777',  marginLeft: '27.5rem', marginTop: '3.5rem'}}>Nutritional Profil
        Click on the Title to learm more</p>

        <Form inline>
         <FormControl style={{marginLeft: '22rem'}} type="text" placeholder="Your e-mail" className="mr-sm-2" />
         <Button variant="success">SIGN UP</Button>
       </Form>
    </div>
  )
}