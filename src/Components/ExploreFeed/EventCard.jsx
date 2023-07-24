import './ExploreFeed.css'
import dayjs from 'dayjs';
import {FaTrash} from 'react-icons/fa6'
import { useAuthContext } from '../../hooks/useAuthContext';
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function EventCard( { event } ) {

  const { user } = useAuthContext();

  const startDateTimeString = event?.startTime;
  let endDateTimeString = event?.endTime;
  let startDate = dayjs(startDateTimeString).format('DD/MM/YY');
  let startTime = dayjs(startDateTimeString).format('hh:mm A');
  let endTime = dayjs(endDateTimeString).format('hh:mm A')

  function refreshPage() {
    window.location.reload(true);
  }

  const handleDelete = async (_id) => {
    const response = await fetch(`http://localhost:4000/api/deleteEvent/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${user.token}`
      },
    });

    const json = await response.json()
    if(!response.ok){
      toast.error(`${json.error}`)
    }

    if(response.ok){
      toast.success(`${json.message}`)
      refreshPage()
    }
  }

  return (
    <div className="event-card">
                    <h2>{event?.title}</h2>
                    <div className="date-time">
                      <p><b>Date - </b>{startDate}</p>
                      <p><b>{startTime} - {endTime}</b></p>
                    </div>
                    <p style={{marginBottom:"8px"}}><b>Location - {event?.location}</b></p>
                    <p style={{marginBottom:"8px"}}><b>Created By - </b>{event?.author}</p>
                    <h4>Description - </h4>
                    <p style={{textAlign:"justify"}}>{event?.desc}</p>

                    <div className="btns" style={{display:"flex", justifyContent:"space-between", marginTop:"20px"}}>
                    {/* <button style={{ borderRadius:"5px", border:"none", padding:"10px", backgroundColor:"#398378", color:"white", cursor:"pointer"}}>Learn More</button> */}

                    {user.user.username === event?.author && <button onClick={() => handleDelete(event?._id)} style={{ borderRadius:"5px", border:"none", padding:"10px", backgroundColor:"#398378", color:"white", cursor:"pointer"}}><FaTrash /></button>}
                    </div>

                    <ToastContainer
            position="bottom-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
        />
                </div>
  )
}

export default EventCard