import './App.css'

function App() {


  return (
    <>
     <div style={{backgroundColor:"#95a5a6" , height:"100vh"}}>
         <div style={{display:"flex" ,justifyContent:"center"}}>
             <div>
                 <PostComponent
                 title={"100 devs"}
                 subtitle={"200k followers"}
                 time={"12 min"}
                 imageUrl={"https://www.williamjacket.com/wp-content/uploads/2024/12/Mr.-Wolf-The-Bad-Guys-Blue-Blazer-For-Men.webp"}
                 ></PostComponent>
                 <br></br>
                 <PostComponent
                     imageUrl={"https://static.wikia.nocookie.net/dreamworks/images/0/01/Profile_-_Mr._Wolf.png/revision/latest?cb=20240303023615"}
                 ></PostComponent>
                 <br></br>
                 <PostComponent
                     imageUrl={"https://static.wikia.nocookie.net/dreamworks/images/0/01/Profile_-_Mr._Wolf.png/revision/latest?cb=20240303023615"}
                 ></PostComponent>
             </div>

         </div>
     </div>
    </>
  )
}
const style = {width :200 , backgroundColor :"white" , borderRadius:10 , borderColor :"gray " , borderWidth: 1 , padding:20}
    function PostComponent ({subtitle,title,  time , imageUrl}) {
    return <div style={style}>
        <div style={{display:"flex" , padding:20}}>
        <img src={imageUrl}
             style={{
                 width: 50,
                 height:50,
                 borderRadius:"50%"
             } }/>
        <div style={{fontSize:10,margin:10}}>
        <b>
            {title}
        </b>
        <div>{subtitle}</div>
            {time && <div style={{display: "flex"}}>
                <div>{time}</div>
                <div><img
                    src={"https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="}
                    style={{
                        height: 12, width: 12
                    }}/></div>

            </div>}
        </div>
        </div>
        <div>
            what do know now to big check out how these folks won $6000 in bounties.

        </div>


    </div>
    }

export default App
