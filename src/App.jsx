import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      const newCalVal = "";
      setCalVal(newCalVal);
    } else if (buttonText === "=") {
      // eval function evaluates mathemetical expression
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Calcii</h1>
      <div className={styles.calculator}>
        <Display calVal={calVal}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </div>
  );
}

export default App;
