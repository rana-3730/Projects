import './App.css'
import {useState} from "react"
import PostComponent from "../components/Post.jsx"
function App() {
    const posts = [{
        name:"harkirat",
        subtitle:"10000 followers",
        time:"2m ago",
        image:"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description:"What to know how to win big? Check out how the"
    }]
    // postComponents => is an array of PostComponents
    const postComponents = posts.map(post => <PostComponent
        name={post.name}
        subtitle={post.subtitle}
        time={post.time}
        image={post.image}
        description={post.description}
    />)



    function addPost() {

    }
  return (
      <>
          <div style={{background: "#dfe6e9", height: "100vh",}}>
              <button onClick={addPost} >Add post</button>
              <div style={{display: "flex", justifyContent: "center"}}>
                  <div>
                      {postComponents}
                  </div>
              </div>
          </div>


      </>
  )
}


export default App
