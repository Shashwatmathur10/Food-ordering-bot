import React, { useState } from 'react';
import MealSelection from './MealSelection';
import UpdateMeal from './UpdateMeal';
import CancelMeal from './CancelMeal';

const Bot = () => {
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleMealSelection = (meal) => {
    setSelectedMeal(meal);
  };

  const handleUpdateMeal = (updatedMeal) => {
    setSelectedMeal(updatedMeal);
  };

  const handleCancelMeal = () => {
    setSelectedMeal(null);
  };

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <div>
      <h1>Food Ordering Bot</h1>
      {!orderPlaced ? (
        <>
          {!selectedMeal ? (
            <MealSelection onSelectMeal={handleMealSelection} />
          ) : (
            <div>
              <p>Your selected meal: {selectedMeal}</p>
              <UpdateMeal selectedMeal={selectedMeal} onUpdateMeal={handleUpdateMeal} />
              <CancelMeal onCancelMeal={handleCancelMeal} />
              <button onClick={handleOrder}>Place Order</button>
            </div>
          )}
        </>
      ) : (
        <p>Thank you for your order! Your {selectedMeal} will be delivered soon.</p>
      )}
    </div>
  );
};

export default Bot;
