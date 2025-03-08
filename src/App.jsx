import { useState } from 'react';
import './App.css'

function App() {
  const [num, setNum] = useState(1);

  // function plusLogic() {
  //   setNum(num + 1);
  // }

  // function minusLogic() {
  //   setNum(num - 1);
  // }

  return (
    <>
      <div className={num < 5 ? 'first' : 'second'} id="card">
        <p style={num > 5 ? {color: 'red'} : {color: 'green'}}>{num > 5 ? 'Extra' : 'Norm'}</p>
        <h1 style={num < 5 ? { color: 'green', fontFamily: 'monospace' } : { color: 'red', fontFamily: 'cursive' }}>{num}</h1>
        {/* <button onClick={plusLogic}>+</button>
      <button onClick={minusLogic}>-</button> */}
        <button onClick={() => setNum(num + 1)}>+</button>
        <button onClick={() => setNum(num - 1)}>-</button>
      </div>
    </>
  )
}

export default App
