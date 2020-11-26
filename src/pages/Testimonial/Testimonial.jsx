import React from 'react'

import './index.scss'

export const Testimonial = () => {
  return (
    <div className="testimonial-border">
      <div className="main-value">
      <h1 className="title">Testimonial</h1>

      <p className="main-txt">Simpleat is made to provide the perfectly balanced diet with every nutrient your body needs for optimal health.</p>

      <div className="cards">
        <div className="human-1">
          <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             className="img-player"
           />
           <div className="card-value">
            <strong className="title-card">Anna,27 • Manager</strong>
            <p className="txt-card">Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
        </div>

        <div className="human-2">
        <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             className="img-player"
           />
           <div className="card-value">
            <strong className="title-card">Chester,33 • Manager</strong>
            <p className="txt-card">Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
        </div>

        <div className="human-3">
        <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             className="img-player"
           />
           <div className="card-value">
            <strong className="title-card">Noah,25 • Manager</strong>
            <p className="txt-card">Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
        </div>

        <div className="human-4">
        <img 
             src="../player1.png" 
             alt="logo"
             height={33}
             width={33}
             className="img-player"
           />
           <div className="card-value">
            <strong className="title-card">Victor,23 • Manager</strong>
            <p className="txt-card">Lorem ipsum dolor sit elit,sed do eiusmod elit,sed do eiusmod ipsum </p>
           </div>
         </div>
        </div>
      </div>
    </div>
  )
}