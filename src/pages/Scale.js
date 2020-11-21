import React from 'react'

export const Scale = () => {
  return (
    <div className="index-page">
       <h1 style={{textAlign: 'center', fontWeight: '400', marginTop: '4rem', marginLeft: '1rem'}} className="main-title">LOW GLYCEMIC AND INSULIN INDEX</h1>

      <div style={{margin: '0 auto'}}>
      <p style={{color: '#777', textAlign: 'center', marginTop: '4rem', width : '710px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 

        <img 
            src="../scale.png" 
            alt="logo"
            height={288}
            width={710}
            style={{marginTop: '3.5rem', margin: '0 auto'}} 
          /> 
      </div>
    </div>
  )
}