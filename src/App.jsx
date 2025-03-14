import './App.css'
import React from 'react';
import {BrowserRouter, Routes , Route, Link, useNavigate , Outlet } from "react-router-dom"
import {useState , useEffect } from "react"

function App() {
    // single page app => re-fetching some parts instead of full page fetching
    return (
        <>
            <BrowserRouter>



               <Routes>
                   <Route path="/" element={<Layout></Layout>}>

                        <Route path="/neet/online" element={<Neet />}></Route>
                        <Route path="/jee/online" element={<Jee></Jee>}></Route>
                        <Route path="/home" element={<Home></Home>}></Route>
                        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
                   </Route>

                </Routes>
            </BrowserRouter>
        </>
    )

}

function Layout() {
    return <div style={{height :"100vh" ,  backgroundColor: "red "}}>
        <Header></Header>

        <div style={{height:"90vh" , background:"pink"}}>
            <Outlet />
        </div>
        Footer | Contact Us
    </div>
}
function Header(){
    return <div>
        <Link to={"/home"}>Allen</Link> |
        <Link to={"/neet/online"}>Neet</Link> |
        <Link to={"/jee/online"}>Jee</Link>
    </div>
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
        navigate("/home")
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