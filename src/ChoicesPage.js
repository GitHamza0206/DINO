function ChoicesPage({ onChoiceSelection }) {
    const handleChoiceClick = (choice) => {
      onChoiceSelection(choice);
    };
  
    return (
      <div>
        <h2>What will you accompany your wine with ?</h2>
        <button onClick={() => handleChoiceClick('Option ')}>Red Meat</button><br/>
        <button onClick={() => handleChoiceClick('Option 2')}>Fish</button><br/>
        <button onClick={() => handleChoiceClick('Option 3')}>Cheese</button>
      </div>
    );
  }
export default ChoicesPage;  