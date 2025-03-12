import './App.css'
import {useState , useEffect } from "react"

function App() {
    const [currentTab , setCurrentTab] = useState("1")
    const [tabData , setTabData ] = useState({})
    const [loading , setLoading ] = useState(true);
    useEffect(() => {
        // jsonplaceholder => free fake api
        // send a backend request
        setLoading(true)
        console.log("request is send to backend to get data for tab  " + currentTab)
        fetch('https://jsonplaceholder.typicode.com/todos/' + currentTab)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setTabData(json)
                setLoading(false)

            })
    }, [currentTab]);

    function changeTab(value){
        setCurrentTab(value);
    }



  return (
      <>
          <div>
              <button onClick={() => changeTab("1")} style={{color: currentTab === "1" ? "red" : "black"}}>Todo #1</button>
              <button onClick={()=> changeTab("2")} style={{color: currentTab === "2" ? "red" : "black"}}>Todo #2</button>
              <button onClick={()=> changeTab("3")} style={{color: currentTab === "3" ? "red" : "black"}}>Todo #3</button>
              <button onClick={() => changeTab("4")} style={{color: currentTab === "4" ? "red" : "black"}}>Todo #4 </button>
              <br />
              <div>
                  { loading ? "loading..." : tabData.title}
              </div>

          </div>

      </>
  )
}


export default App
