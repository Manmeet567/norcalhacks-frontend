import Navbar from "../../Components/Navbar/Navbar"

function UserHomePage() {

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
            name:"People",
            link:'/connect'
        },
        {
            name:"Explore",
            link:"/explore"
        }
    ]

  return (
    <div className="userHomePage">
        <Navbar items={Items}/>
    </div>
  )
}

export default UserHomePage