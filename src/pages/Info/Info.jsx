import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

import './style.scss'

export const Info = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="info-page">
      <div className="info-value">
         <div className="info-1">
           <h2 style={{color: 'white', fontWeight: '300'}}>WHAT IS SIMPLEAT ?</h2>
          
           <p style={{textAlign: 'center', color: 'white', width: '357px', marginTop: '2rem', marginLeft: '-2.7rem'}}>
             What is Simpleat?
              Simpleat is made to provide the perfectly balanced diet with every nutrient your body needs for optimal health.
            </p>

            <p style={{textAlign: 'center', color: 'white', width: '330px', marginTop: '2rem', marginLeft: '-2rem'}}>
              Simpleat will take care of your hunger while you have more important things to do whether it is your work, business, travel or simply having fun.
            </p>
         </div>  

         <div className="coffe-v" onClick={handleShow}>
         <img 
             src="../player1.png" 
             alt="logo"
             height={50}
             width={50}
             style={{marginLeft: '12.5rem', marginTop: '6rem'}} 
           />
         </div>
         
         <Modal 
           show={show} 
           onHide={handleClose}
          >
          <Modal.Header closeButton>
            <Modal.Title style={{margin: '0 auto'}}>Coffe time!</Modal.Title>
            </Modal.Header>
            <section>
           <iframe
                title="video"
                src="https://www.youtube.com/embed/3MOs2Yaou68"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video"
              />  
         </section>
            <Modal.Footer>

              <Button variant="danger" 
                 onClick={handleClose}
                 style={{marginTop: '1rem'}}
              >
                Close
             </Button>
           </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}