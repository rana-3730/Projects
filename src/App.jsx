import './App.css'
import {useState} from "react"

function App() {
    const [count , setCount ] = useState(0) ;


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
