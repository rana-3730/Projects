import './App.css'
import React from 'react';
import {BrowserRouter, Routes , Route, Link, useNavigate } from "react-router-dom"
import {useState , useEffect } from "react"

function App() {
    // single page app => re-fetching some parts instead of full page fetching
    return (
        <>
            hello there

            <BrowserRouter>
                <Link to={"/"}>Allen</Link> |
                <Link to={"/neet/online"}>Neet</Link> |
                <Link to={"/jee/online"}>Jee</Link>
                <Routes>
                    <Route path="/neet/online" element={<Neet />}></Route>
                    <Route path="/jee/online" element={<Jee></Jee>}></Route>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
function ErrorPage(){
    return <div>
        Sorry page not found
    </div>
}
function Neet(){
    return <div>
        Hello Neet aspirants
    </div>
}
function Jee() {
    const navigate = useNavigate();

    function redirectUser(){
        navigate("/")
    }
    return <div>
        Hello Jee aspirants
        <br />
        <button onClick={redirectUser}>Home</button>
    </div>
}

function Home(){
    return <div>
        Hello there aspirants
    </div>
}


export default App ;