import './App.css'
import {useState} from "react"
import PostComponent from "../components/Post.jsx"
function App() {
    const posts = [{}]
  return (
      <>
          <div style={{background: "#dfe6e9", height: "100vh",}}>
              <button >Add post</button>
              <div style={{display: "flex", justifyContent: "center"}}>
                  <div>
                      <PostComponent
                          name={"harkirat"}
                          subtitle={"10000 followers"}
                          time={"2m ago"}
                          image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
                          description={"What to know how to win big? Check out how the"}
                      ></PostComponent>
                  </div>
              </div>
          </div>


      </>
  )
}


export default App
