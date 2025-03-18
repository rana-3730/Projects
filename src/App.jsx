import './App.css'
import React from 'react';
import {useRef} from 'react';



function App() {
    const inputRef = useRef();
    // useRef => like id attribute in css it provide a ref attribute
    // we can give a name to ref
    // useRef => reference to a value, such that when u change the value ,
    // the component DOES NOT RE-RENDER


    function focusOnInput(){
        inputRef.current.focus();


    }
    return <div>
        Sign up
        <input ref={inputRef} type={"text"}/>
        <input type={"text"}></input>
        <button onClick={focusOnInput}>Submit</button>
    </div>

}

export default App ;