import messages from "./data.js";
import {useState} from "react";
function App() {
  const [step, setStep] = useState(1);
  const[isOpen, setIsOpen] = useState(true)
  function handlePrevious() {
    if (step > 1)
    setStep(curStep => curStep-1 );
  }
  function handleNext() {
    if (step <=3)
    setStep(curStep => curStep+1);

  }
  if (step >=4) {
    return (<div className='success'>
    <div className="card">
    <div style={{borderRadius:"200px", height:"200px", width:"200px", background: "#F8FAF5", margin:"0 auto"}}>
      <i className="checkmark">✓</i>
    </div>
      <h1>Success</h1> 
      <p>You successful chased your target;<br/> Congratulation!</p>
    </div>
  </div>)
  }
  return (
    <>
    <button className="close" onClick={() => setIsOpen(false)}>&times;</button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="not-found-container buttons">
          <h1>Oops!</h1>
          <h4>Something went wrong!</h4>
          <button
            style={{ background: "#7850f2", color: "#fff" }}
            onClick={() => setIsOpen(open =>!open)}
          >
            GO BACK
          </button>
        </div>
      )}
    </>
    )
}

export default App;
