import './App.css'
import React from 'react';
import {useState , createContext, useContext} from 'react';

const BulbContext = createContext();

function App() {
  // Rolling up the state, un optimal re-renders => passing state using props
  // multiple components need access to the same state
  // Prop drilling => drilling props through all components
  // Context API => Application Programming Interface => manage state more effectively and solve props drilling

  // Context: React.createContext() => serve as a data storage
  const [bulbOn , setBulbOn] = useState(false) ;

  return <>
    <BulbContext.Provider value={{
      bulbOn,
      setBulbOn
    }}>
      <Light></Light>
    </BulbContext.Provider>

  </>
}


function Light() {
  return <div>
    <LightBulb />
    <LightSwitch />
  </div>
}

function LightBulb() {
  const {bulbOn} = useContext(BulbContext);
  return <div>

  </div>
}
function LightSwitch () {
  return <div>
    <button>Bulb on </button>

  </div>
}

export default App ;