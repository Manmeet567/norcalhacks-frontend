import './ExploreFeed.css'

function EventCard( { event } ) {

  const startDateTimeString = event?.startTime;
  const endDateTimeString = event?.endTime;
  const startDateTime = new Date(startDateTimeString)
  const endDateTime = new Date(endDateTimeString)

  const startDate =  startDateTime.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
  const startTime = startDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const endTime = endDateTime.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <div className="event-card">
                    <h2>{event?.title}</h2>
                    <div className="date-time">
                      <p><b>Date - </b>{startDate}</p>
                      <p><b>{event?.startTime} - {endTime}</b></p>
                    </div>
                    <p style={{marginBottom:"8px"}}><b>Location - {event?.location}</b></p>
                    <p style={{marginBottom:"8px"}}><b>Created By - </b>{event?.author}</p>
                    <h4>Description - </h4>
                    <p style={{textAlign:"justify"}}>{event?.desc}</p>

                    <button style={{margin:"14px auto 0", width:"100px", borderRadius:"5px", border:"none", padding:"10px 0", backgroundColor:"#398378", color:"white", cursor:"pointer"}}>Learn More</button>
                </div>
  )
}

export default EventCard