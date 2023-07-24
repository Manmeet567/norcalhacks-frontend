import Navbar from "../../Components/Navbar/Navbar"
import UserFeed from "../../Components/UserFeed/UserFeed"

function UserHomePage() {

    const Items = [
        {
            name:"Create Event",
            link:"/createEvent"
        },
        {
            name:"Events",
            link:"/events"
        }
    ]

  return (
    <div className="userHomePage">
        <Navbar items={Items}/>
        <UserFeed />
    </div>
  )
}

export default UserHomePage