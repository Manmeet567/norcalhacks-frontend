import { Stack } from '@mui/material'
import EventCard from '../../ExploreFeed/EventCard'

function Eventfeed() {
  return (
    <div className="eventFeed" style={{width:"100%", marginTop:"40px", padding:"20px"}}>
            <h2 style={{ color:"#398378"}}>Recently added Events:</h2>
            
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={1} sx={{mt:"20px", width:"100%", justifyContent:"center", alignItems:"center" , flexWrap:"wrap"}}>
              <EventCard />
              <EventCard />
              <EventCard />
            </Stack>

          </div>
  )
}

export default Eventfeed