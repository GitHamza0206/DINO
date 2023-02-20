import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import LandingPage from './LandingPage';
import ChoicesPage from './ChoicesPage';
import SpendingPage from './SpendingPage';



function App() {
  const [step, setStep] = useState(0);

  const handleChoiceSelection = (choice) => {
    // Do something with the choice (e.g., store it in state)
    setStep(step + 1); // Move to the next step
  };
  
  switch (step) {
    case 0:
      return <LandingPage onNext={() => setStep(step + 1)} />;
    case 1:
      return <ChoicesPage onChoiceSelection={handleChoiceSelection} />;
    case 2:
      return <SpendingPage onBack={() => setStep(step - 1)} />;
    default:
      return null;
  }


  
}

export default App;
