import React from 'react';

const MealSelection = ({ onSelectMeal }) => {
  const availableMeals = ['Meal A', 'Meal B', 'Meal C'];

  return (
    <div>
      <h2>Available Meals:</h2>
      <ul>
        {availableMeals.map((meal) => (
          <li key={meal} onClick={() => onSelectMeal(meal)}>
            {meal}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealSelection;
