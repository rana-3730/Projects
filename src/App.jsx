import './App.css'
import {useState , useEffect } from "react"

function App() {

    return (
        <>
            <Todo key={1} title={"Go to gym"} done={false}></Todo>
            <Todo key={2} title={"Eat food"} done={false}></Todo>

        </>
    )

}

function Todo({title ,done }){
    return <div>
        {title} - {done?"Done" : "Not done"}

    </div>
}





export default App
