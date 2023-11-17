import React,{useState, useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const inputRef = useRef(null); //created for auto focusing 
  useEffect (() => { inputRef.current.focus();}, []); // for auto focusing 

  const handler = e => {
    setInput(e.target.value);
  }
  return (
    <div className="App">
    <input type="text" value={input} name="input" onChange={handler} ref={inputRef}></input><br></br>
    
    <h4>Result: {result}</h4>
    <button onClick={() => setInput(input+'+')}><b>+</b></button>
    <button onClick={() => setInput(input+'-')}><b>-</b></button>
    <button onClick={() => setInput(input+'*')}><b>x</b></button>
    <button onClick={() => setInput(input+'/')}><b>/</b></button>
    <button onClick={() => setResult(eval(input))}><b>=</b></button>
    <button onClick={() => setInput('')}><b>AC</b></button><br />
    
    <button onClick={() => setInput(input+'1')}><b>1</b></button>
    <button onClick={() => setInput(input+'2')}><b>2</b></button>
    <button onClick={() => setInput(input+'3')}><b>3</b></button>
    <button onClick={() => setInput(input+'4')}><b>4</b></button>
    <button onClick={() => setInput(input+'5')}><b>5</b></button>
    <button onClick={() => setResult('')}><b>C</b></button><br />

    <button onClick={() => setInput(input+'6')}><b>6</b></button>
    <button onClick={() => setInput(input+'7')}><b>7</b></button>
    <button onClick={() => setInput(input+'8')}><b>8</b></button>
    <button onClick={() => setInput(input+'9')}><b>9</b></button>
    <button onClick={() => setInput(input+'0')}><b>0</b></button>
    <button onClick={() => setInput(input+'.')}><b>.</b></button><br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
  );
}

export default App;
