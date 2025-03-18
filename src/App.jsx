import './App.css'
import React from 'react';
import { BrowserRouter , Routes , Route , Link , useNavigate , Outlet} from "react-router-dom";
// HashRouter => browser extension

function App() {
    // single page application => some part of page will change
    // great user experience => avoid full page
    // Link => user click
    // useNavigate => automatic navigate
    // Layouts => Next.js
    // custom array like routes = [{ path : "" , element: <element>} ]
    // then map to them into <Route> </Route> components
    // useRef =>

    return (
        <>

            {/* the naive way is to wrap above all inside anchor tag */}
            <BrowserRouter>
                <Link to="/home" >Allen Neet</Link>  | <Link to="/neet/online-coaching/class11">Class 11 </Link>|
                <Link to="/neet/online-coaching/class12">Class 12</Link>

                <Routes>
                   <Route path="/" element={<Layout />}>
                       { /* What is path variable *!/ {}*/}
                       {/* It restricts the random url   */}
                       <Route path="/neet/online-coaching/class11" element={<Class11Program /> }></Route>
                       <Route path="/neet/online-coaching/class12" element={<Class12Program /> }></Route>
                       <Route path="/Home" element={<Landing />}></Route>
                       <Route path="*" element={<ErrorPage/>} />
                       {/* manage random routes */}
                   </Route>
                </Routes>
            </BrowserRouter>
        </>
    )

}
function Layout(){
return <div>

   <Outlet />
    footer
</div>
}
function Landing(){
    return <div>
        Hello there
    </div>

}


function Class11Program(){
    return <div>
        Neet Program for 11 class
    </div>
}

function Class12Program(){
    const navigate = useNavigate();
    function redirectUser(){
        navigate("/")
    }

    return <div>
        Neet Program from 12 class
        <button onClick={redirectUser}>Go back to landing page </button>
    </div>

}
function ErrorPage(){
    return <div>
        Page not found
    </div>
}
export default App ;