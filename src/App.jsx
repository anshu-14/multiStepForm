import { useState } from "react";
import { useMultistepForm } from "./useMultistepForm";
import UserForm from "./UserForm";
import AddressForm from "./AddressForm";
import AccountForm from "./AccountForm";
let InitialData = {
  firstname: "",
  lastname: "",
  age: "",
  city: "",
  street: "",
  area: "",
  email: "",
  password: "",
};
function App() {
  const [data,setdata]=useState(InitialData);
  function updateFields (fields)
  {
    setdata((prev)=>{
      return {...prev,...fields}
    })

  }
  const { steps, currentStepIndex, step, back, next, isFirstStep, isLastStep } =
    useMultistepForm([<UserForm {...data} updateFields={updateFields}/>, <AddressForm {...data} updateFields={updateFields}/>, <AccountForm {...data} updateFields={updateFields}/>]);
  function submitForm(e) {
    e.preventDefault();
    next();
  }
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
      <form onSubmit={submitForm}>
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
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          {<button type="submit">{isLastStep ? "Finish" : "Next"}</button>}
        </div>
      </form>
    </div>
  );
}

export default App;
