import './App.css'
import React from 'react';
import {useState , useEffect } from "react"

function App() {

    // These events

    return (
        <>
            <ErrorBoundary>
                <Card1></Card1>
            </ErrorBoundary>

            <Card2></Card2>


        </>
    )

}
function Card1(){
    throw new Error("App is no working ")
    return <div style={{background: "red" , borderRadius:10 ,padding:10 , margin: 5}}>
        Hi there
    </div>
}
function Card2(){
    return <div style={{background: "red" , borderRadius:10 ,padding:10, margin:5}}>
        Hi there
    </div>
}


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <div style={{background: "red", borderRadius: 10, padding: 10, margin: 5}}>
                Something went wrong
            </div>
        }

        return this.props.children;
    }
}


export default App
