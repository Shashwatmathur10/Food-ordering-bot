import React from 'react';

const CancelMeal = ({ onCancelMeal }) => {
  return (
    <div>
      <button onClick={onCancelMeal}>Cancel Meal</button>
    </div>
  );
};

export default CancelMeal;
