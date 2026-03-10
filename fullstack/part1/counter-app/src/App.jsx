import Display from "./Display";
import { useState } from "react";
import Button from "./Button";

let counterRegular = 1;
function App() {
  
  // let myState = useState(1)
  // let counter = myState[0]
  // let setCounter = myState[1]

  const [counter, setCounter] = useState(1);

  function clickMe(){
    setCounter(counter + 1)
    counterRegular = counterRegular + 1;
    let myDiv2 = document.getElementById("myDiv2");
    // counter++;    
    myDiv2.innerText = `The counterRegular in myDiv2 is at ${counterRegular}`;
    // console.log(`Counter is at ${counter}`);
  }

  return (
  <>     
      <div id="myDiv">The Counter in myDiv is at {counter}</div>
      <Button onClickFunc={clickMe} label="Increase Count" />
      <Button onClickFunc={()=>{setCounter(counter-1)}} label="Decrease Count" />
      <Button label = "reset" onClickFunc={() => {setCounter(0)}} />
      <div id="myDiv2">The counterRegular in myDiv2 is at {counterRegular}</div>
      <Display counter = {counter} />
    </>
  );
}

export default App;
