import './App.css'
import React from 'react';
import {useState , useEffect , useRef } from 'react';



function App() {
  const [currentCount , setCurrentCount] = useState(1);
  // const [timer , setTimer] = useState(0);
  const timer = useRef()

  // This will run only one time for one click on start button
  function startClock() {
      console.log("clock started")
      let value = setInterval(()=>{
          setCurrentCount(currentCount => currentCount + 1 )
      } , 1000)
      // setTimer(value)
      timer.current = value
  }
  function stopClock() {
      clearInterval(timer.current);
  }

    return <div>
        {currentCount}
        <br />
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>

    </div>

}

export default App ;