import React, { useState } from 'react';

function SpendingPage({ onBack }) {
    const [spendingAmount, setSpendingAmount] = useState('');
  
    const handleInputChange = (event) => {
      setSpendingAmount(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Do something with the spending amount (e.g., store...it in state)
};

        return (
        <div>
        <h2>How much do you want to spend?</h2>
        <form onSubmit={handleSubmit}>
        <label>
        Amount:
        <input
                type="number"
                value={spendingAmount}
                onChange={handleInputChange}
            />
        </label>
        <button type="submit">Submit</button>
        </form>
        <button onClick={onBack}>Go back</button>
        </div>
        );
    
    
}

export default SpendingPage;