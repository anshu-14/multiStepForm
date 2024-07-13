import { useState } from 'react'
import { useMultistepForm } from './useMultistepForm'

function App() {
  const {steps,currentStepIndex,step,back,next,isFirstStep,isLastStep}=useMultistepForm([
    <div>One</div>,
    <div>Two</div>
  ])
  return (
    <div
      style={{
        border: "1px solid black",
        position: "relative",
        background: "white",
        padding: "2rem",
        margin: "1rem",
        fontFamily: "Arial",
        borderRadius: ".5rem",
      }}
    >
      <form>
        <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
          {currentStepIndex + 1}/{steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5rem",
          }}
        >
          {!isFirstStep && <button type="button" onClick={back}>Back</button>}
          { <button type="button" onClick={next}>
            {isLastStep?"Finish" : "Next"}
            </button>}
          
        </div>
      </form>
    </div>
  );
}

export default App
