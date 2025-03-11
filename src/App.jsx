import './App.css'
import {useState} from "react"
function App() {
  return (
    <>
         <ToggleMessage></ToggleMessage>
        <ToggleMessage></ToggleMessage>
        <ToggleMessage></ToggleMessage>
    </>
  )
}




   function ToggleMessage(){
        const [isVisible , setIsVisible] = useState(false); // defining a new variable
        // When the value of a state variable changes,
       // the component that uses the state variables re-renders

       function toggle(){
           setIsVisible(prev => !prev)
       }
       return <div>
           <button onClick={toggle}>
               Toggle Message
           </button>
           {isVisible && <h3>hello there</h3> }

             </div>


    }



export default App
