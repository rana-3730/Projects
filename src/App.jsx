import './App.css'
import React from 'react';
import {BrowserRouter, Routes , Route } from "react-router-dom"
import {useState , useEffect } from "react"

function App() {


    return (
        <>
            hello there
            <BrowserRouter>
                <Routes>
                    <Route path="/neet/online" element={<Neet />}></Route>
                    <Route path="/jee/online" element={<Jee></Jee>}></Route>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
function Neet(){
    return <div>
        Hello Neet aspirants
    </div>
}
function Jee() {
    return <div>
        Hello Jee aspirants
    </div>
}

function Home(){
    return <div>
        Hello there aspirants
    </div>
}

export default App ;