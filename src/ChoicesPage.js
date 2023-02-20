function ChoicesPage({ onChoiceSelection }) {
    const handleChoiceClick = (choice) => {
      onChoiceSelection(choice);
    };
  
    return (
      <div>
        <h2>Which option do you prefer?</h2>
        <button onClick={() => handleChoiceClick('Option 1')}>Option 1</button>
        <button onClick={() => handleChoiceClick('Option 2')}>Option 2</button>
        <button onClick={() => handleChoiceClick('Option 3')}>Option 3</button>
      </div>
    );
  }
  