import './App.css'
import {useState , useEffect } from "react"

function App() {

    return (
        <>
            <Card>
                <div style={{color: "green"}}>
                    what do you want to post<br></br>
                    <input style={{border: null}} type={"text"}/>
                </div>
            </Card>

        </>
    )

}

function Card({children}) {
    return <div style={{backgroundColor: "grey", borderRadius: 10, color: "white", padding: 10, margin: 10}}>
        UpperTopBar
        {children}
        LowerTopBar
        {children}
    </div>
}






export default App
