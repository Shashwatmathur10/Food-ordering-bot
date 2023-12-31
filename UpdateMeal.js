import React, { useState } from 'react';

const UpdateMeal = ({ selectedMeal, onUpdateMeal }) => {
  const [updatedMeal, setUpdatedMeal] = useState(selectedMeal);

  const handleUpdate = () => {
    onUpdateMeal(updatedMeal);
  };

  return (
    <div>
      <h2>Update Your Meal:</h2>
      <input
        type="text"
        value={updatedMeal}
        onChange={(e) => setUpdatedMeal(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateMeal;
