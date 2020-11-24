import React from 'react'

import './index.scss'

export const Ingredients = () => {

  return (
    <div className="ingredients">
      <h1 className="ingredients__title">MAIN INGREDIENTS</h1>
      <p className="ingredients__text">What is inside Simpleat?</p>

     <div className="ingredients-wrapper">
        <div className="ingredient">
          <img 
            src="../Ingredient1.png" 
            alt="logo"
            className="ingredient__img"
          /> 
          <h5 className="ingredient__title">SOYBEAN PROTEIN</h5>
          <p className="ingredient__text"> 
           Soy is a complete protein and rich in vitamins and minerals. Soybean protein provides all the essential amino acids in the amounts needed for human health.
          </p>
        </div>

        <div className="ingredient">
          <img 
            src="../Ingredient2.png" 
            alt="logo"
            className="ingredient__img"
          /> 
          <h5 className="ingredient__title">OILS</h5>
          <p className="ingredient__text"> 
          The perfect mix of lipids from sea algae, coconut, sunflower, flaxseed and canola. Rich with omega-3, unsaturated fatty acids DHA and EPA, which contribute to the normal function of the heart and brain function.
          </p>
        </div>

        <div className="ingredient">
          <img 
            src="../Ingredient3.png" 
            alt="logo"
            className="ingredient__img"
          /> 
          <h5 className="ingredient__title">OAT FLOUR</h5>
          <p className="ingredient__text"> 
            Oat flour is made from whole oats and contains beta-glucans. This fiber have shown to lower risk factors for heart disease such as high cholesterol and high blood pressure.
          </p>
        </div>

        <div className="ingredient">
          <img 
            src="../Ingredient4.png" 
            alt="logo"
            className="ingredient__img"
          /> 
          <h5 className="ingredient__title">ISOMALTULOSE</h5>
          <p className="ingredient__text"> 
            Isomaltulose is a natural occurring disaccharide. It keeps you energetic without the spikes of refined sugar.
          </p>
        </div>

        <div className="ingredient">
          <img 
            src="../Ingredient5.png" 
            alt="logo"
            className="ingredient__img"
          /> 
          <h5 className="ingredient__title">MINERALS VITAMINS</h5>
          <p className="ingredient__text"> 
            A bottle of Simpleat contains 20% of daily requirements of all micronutrients for your body.
          </p>
        </div>
      </div>
    </div>
  )
}