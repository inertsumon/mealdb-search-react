import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import "./Meals.css";

const Meals = () => {
    
    const [meals, setMeals] = useState([]);
    const [searchMeal, setSearchMeal] = useState('');
    // console.log(searchMeal);
  
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
        
                    setMeals(data.meals);
                
            })
    }, [searchMeal]);
    
    const handleSearch = event => {
        var searchText = event.target.value;
        // const matchedMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setSearchMeal(searchText);
} 

    return (
        <div>
            
            <div className='meal-search'>
                <h2>Search Your Food</h2>
                <input  onChange={handleSearch} type="text"/>
           </div>
            <div className="meals-container">
                
                {
                
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
            }
            </div>
        </div>
    );


};

export default Meals;