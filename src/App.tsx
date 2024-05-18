import React from 'react';
import './App.css';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import FinalStep from './steps/FinalStep';

function App() {
  const [step, setStep] = React.useState(1);

  return (
    <>
      <div className="progress-bar" style={{ width: `${(step / 4) * 100}%` }} />
      <div className="page">
        {step === 1 && <Step1 goNext={() => setStep(step + 1)} />}
        {step === 2 && <Step2 goNext={() => setStep(step + 1)} />}
        {step === 3 && <Step3 goNext={() => setStep(step + 1)} />}
        {step === 4 && <FinalStep />}
        <div className="btn-stub"/>
      </div>
    </>
  );
}

export default App;
