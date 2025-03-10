import './App.css'

function App() {


  return (
    <>
     <div style={{backgroundColor:"#95a5a6" , height:"100vh"}}>
         <div style={{display:"flex" ,justifyContent:"center"}}>
             <div>
                 <PostComponent></PostComponent>
                 <br></br>
                 <PostComponent></PostComponent>
                 <br></br>
                 <PostComponent></PostComponent>
             </div>

         </div>
     </div>
    </>
  )
}
const style = {width :200 , backgroundColor :"white" , borderRadius:10 , borderColor :"gray " , borderWidth: 1 , padding:20}
    function PostComponent () {
    return <div style={style}>
        <div style={{display:"flex" , padding:20}}>
        <img src={"https://static.wikia.nocookie.net/dreamworks/images/0/01/Profile_-_Mr._Wolf.png/revision/latest?cb=20240303023615"}
             style={{
                 width: 50,
                 height:50,
                 borderRadius:"50%"
             } }/>
        <div style={{fontSize:10,margin:10}}>
        <b>
            100 devs
        </b>
        <div>23,888 followers</div>
        <div>12m</div>
        </div>
    </div>
        <div>
            what do know now to big check out how these folks won $6000 in bounties.

        </div>


    </div>
}
export default App
