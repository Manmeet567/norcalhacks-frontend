
import Navbar from "../../Components/Navbar/Navbar"
import './CreateEvent.css'

function CreateEvent() {

    const Items = [
        {
            name:"Create Event",
            link:"/createEvent"
        },
        {
            name:"Share Post",
            link:"/newPost"
        },
        {
            name:"Explore",
            link:"/explore"
        }
    ]

  return (
    <div className="createEvent" style={{backgroundColor:"#66f1dc5d", height:"100vh"}}>
        <Navbar items={Items}/>
        
        <div className="ce-inner-content">

            <h2 style={{color:"#398378", marginTop:"20px"}}>Create Event:</h2>

            <div className="ce-form" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <input type="text" name="title" id="title" placeholder="Event Title" />
                <textarea placeholder="Event Description" name="desc" />
                <input type="text" name="location" placeholder="Event location" />
                <input type="time" name="time" />
                <button >Submit</button>
            </div>

        </div>
    </div>
  )
}

export default CreateEvent