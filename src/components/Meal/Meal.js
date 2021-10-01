import React from 'react';
import "./Meal.css"
const Meal = (props) => {
    
    const { idMeal,strMeal,strCategory,strMealThumb,strInstructions,strArea} = props.meal;
    return (
        <div className="meal-container">
            <img src={strMealThumb} alt="" />
            <p>Id:{idMeal}</p>
            <h2>Name: {strMeal}</h2>
            <p>Category: {strCategory}</p>
            <p>Area: {strArea}</p>
            
        </div>
    );
};

export default Meal;