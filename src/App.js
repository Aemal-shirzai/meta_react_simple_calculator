import {useReducer, useRef} from "react"; 
import "./App.css";


const calculator = (state, action) => {
  let inputValue = Number(action.inputRef.value)
  switch (action.type) {
    case "plus":
      return state + inputValue
    case 'minus':
      return state - inputValue
    case 'times':
      return state * inputValue
    case 'divide':
      return inputValue > 0 ? state / inputValue : state
    case 'resetInput':
      action.inputRef.value = ''
      return state
    case 'resetResult':
      return 0
    default:
      return state;
  }
};

function App() { 
  const inputRef = useRef(null);
  const [result, calculate] = useReducer(calculator, 0);

  function setCalculation(e, calculationType) {
    e.preventDefault();
    calculate({type: calculationType, inputRef: inputRef.current});
  }
 
  return ( 
    <div className="App"> 
      <div> <h1>Simplest Working Calculator</h1> </div> 
      <form> 
        <p> { result } </p> 
        <input pattern="[0-9]" ref={inputRef} type="number" placeholder="Type a number" /> 
        <div>
          <button onClick={(e) => setCalculation(e, 'plus')}>add</button>
          <button onClick={(e) => setCalculation(e, 'minus')}>subtract</button>
          <button onClick={(e) => setCalculation(e, 'times')}>multiply</button>
          <button onClick={(e) => setCalculation(e, 'divide')}>divide</button>
          <button onClick={(e) => setCalculation(e, 'resetInput')}>reset input</button>
          <button onClick={(e) => setCalculation(e, 'resetResult')}>reset result</button>
        </div> 
      </form>
    </div> 
  ); 
} 
 
export default App; 
