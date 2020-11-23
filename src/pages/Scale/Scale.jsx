import React from 'react'

import './index.scss'

export const Scale = () => {
  return (
    <div className="index-border">
     <div className="scale-page">
       <h1 className="title">LOW GLYCEMIC AND INSULIN INDEX</h1>

      <div className="block">
      <p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 

        <img 
            src="../scale.png" 
            alt="logo"
            height={288}
            width={710}
            className="img"
          /> 
     </div>
    </div> 
  </div>
  )
}