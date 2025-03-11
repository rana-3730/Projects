import './App.css'
import {useState , useEffect } from "react"

function App() {
    const [count , setCount ] = useState(0) ;
    // useEffect => lets you manage side-effects
    // side-effects => other than rendering the components
    // starting a clock , fetch data from an api, websockets are  side-effect
    // Problems => if you directly try to introduce side effects directly in the rendering
    // logic of a component , React would run that code every time the components renders.
    // This lead to => unnecessary effects , inconsistent behaviour , performance issues

    // runs on mount
    useEffect(() => {
        setInterval(() => increaseCount()
        , 1000)
    }, []);
    // setInterval(increaseCount,1000) => runs on every render

    function increaseCount() {
        setCount(count => count + 1 );
    }

  return (
      <>
          <div>
              <div style={{backgroundColor:"red" , width:20 , height:20 , borderRadius:20, marginLeft:5 , display:"flex", justifyContent:"center"}}>
                  {count}</div>
              <img src={"https://as1.ftcdn.net/v2/jpg/02/04/42/24/1000_F_204422460_EPBVMqQVwYI7vjMoHycZ0C1ZLZcDAVhE.jpg"}
              style={{height:30 , width:30}} onClick={increaseCount
              }/>
          </div>

      </>
  )
}


export default App
