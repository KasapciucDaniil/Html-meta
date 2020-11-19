import React, {useEffect, useState} from 'react'
import { Form, Button, Modal } from 'react-bootstrap'

export const Home = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

    useEffect(() => {
      handleShow()
    }, [])  

    return(
       <div className="home-page" >
          <img 
           src="../home1.png" 
           alt="logo"
           height={280}
           width={260}
           style={{marginTop: '3rem', marginLeft: '7rem'}} 
         /> 
         <div className="info-home">
           <h1 style={{fontWeight: '400'}}>MORE THAN FOOD</h1>

           <p style={{width: '460px', textAlign: 'center', marginLeft: '-3.5rem', marginTop: '2.5rem'}}>Everything your body needs is one bottle of Simpleat.Drink Simpleat and forget about hunger.Be the first to try nutrition designed for your needs.</p>
           
           <h5 style={{marginLeft: '1rem'}}>Free shipping for orders over €90</h5>

           <Form.Control style={{marginLeft: '-2rem', marginTop: '2rem'}} as="select">
             <option>12 bottles</option>
               <option>24 bottles</option>
                <option>36 bottles</option>
               <option>48 bottles</option>
              <option>60 bottles</option>
              <option>72 bottles</option>
               <option>84 bottles</option>
                <option>96 bottles</option>
               <option>108 bottles</option>
              <option>120 bottles</option>
           </Form.Control>


         <div style={{display: 'flex'}}>
         <div style={{display: 'flex', marginTop: '1rem', marginLeft: '-2rem'}}>
           <Form.Check type="checkbox"/> 
           <div style={{marginLeft: '1rem'}}>
            <p style={{color: '#36C1BA'}}>One-Time</p>
            <p style={{color: '#999', marginTop: '-1rem'}}>Purchase</p>
           </div>
          </div>

          <div style={{display: 'flex', marginTop: '1rem', marginLeft: '7rem'}}>
           <Form.Check type="checkbox"/> 
           <div style={{marginLeft: '1rem'}}>
            <p style={{color: 'black'}}>Subscribe</p>
            <p style={{color: '#999', marginTop: '-1rem'}}>and save 5%</p>
           </div>
          </div>
         </div>

         <div style={{display: 'flex', marginTop: '2rem'}}>
           <div style={{marginLeft: '-2rem'}}>
            <p style={{fontWeight: '400'}}><strong>€32</strong></p>
            <p style={{marginTop: '-1rem', color: '#555'}}>€2.60 per meal (400 kcal)</p>
           </div>
           
           <Button style={{marginLeft: '3rem', marginTop: '0.2rem'}} variant="success">Add to cart</Button>
         </div>

         </div>
         <Modal 
           show={show} 
           onHide={handleClose}
          >
          <Modal.Header closeButton>
            <Modal.Title style={{margin: '0 auto'}}>Внимание!</Modal.Title>
            </Modal.Header>
            <p style={{fontSize: '15px', fontWeight: '400', marginLeft: '0.4rem'}}>Этот сайт использует файли cookie Google. Это необходимо для его нормальной работы анализа трафика! <br />
            Это помогает обеспечивать качество услуг, накапливать статистику использования, а также выявлять и устранять нарушения!</p>
            <Modal.Footer>

              <Button variant="success" 
                 onClick={handleClose}
                 style={{marginTop: '0.5rem'}}
              >
                OK!
             </Button>
           </Modal.Footer>
        </Modal>
       </div> 
    )
}