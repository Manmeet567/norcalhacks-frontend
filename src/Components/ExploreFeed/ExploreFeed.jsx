import { Select, MenuItem,FormControl } from "@mui/material"
import { useEffect, useState } from "react"
import './ExploreFeed.css'
import EventCard from "./EventCard"
import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from "../../hooks/useAuthContext"

function ExploreFeed({ countries }) {
  
  const [selectedCountry, setSelectedCountry] = useState("")
  const [countryNames, setCountryNames] = useState([])
  const [events, setEvents] = useState([])

  const { user } = useAuthContext()

  const fetchData = async (country) => {
      const response = await fetch(`http://localhost:4000/api/location?country=${country}`, {
        headers:{
          'authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json()
      console.log(json)
      if(!response.ok) {
        toast.error(`Error: ${json.error}`)
      }

      if(response.ok){
        setEvents(json)
      }
  };

  useEffect(() => {
    if (selectedCountry && selectedCountry !== 'None') {
      fetchData(selectedCountry);
    }

  }, [selectedCountry])



  useEffect(() => {
    const names = countries.map((country) => country.name.common)
    setCountryNames(names.sort())
  }, [countries])

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch('http://localhost:4000/api/getEvents',{
        headers:{
          'authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json()
      if(!response.ok) {
        toast.error(`Error: ${json.error}`)
      }
      if(response.ok){
        setEvents(json)
      }
    }

    getEvents()
  }, [])

  return (
    <div className="exploreFeed" style={{ width: "100%", minHeight: "100vh", maxHeight: "100%", paddingTop: "70px", display: "flex", backgroundColor: "#66f1dc5d", justifyContent: "center" }}>
      <div className="inner-content-ef" >

        <div className="location-form">
          <h1 className="heading-ef" style={{color:"#398378"}}>Search Events by Location:</h1>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <div className="select-area" style={{ marginLeft:"40px"}}>
            <Select value={selectedCountry} className="select-ef"  sx={{ width: "200px"}}  onChange={(e) => setSelectedCountry(e.target.value)} inputProps={{ 'aria-label': 'Without label' }}>
                <MenuItem value="None">
                    <p>None</p>
                </MenuItem>
                {countryNames.map((country) => (
                <MenuItem key={country} value={country}>
                    {country}
                </MenuItem>
                ))}
            </Select>
            </div>
        </FormControl>
        </div>

        <div className="event-feed" >
          <h2 className="heading-ef" style={{color:"#398378"}}>Ongoing Events:</h2>
            <div className="events-section">

                  {events?.map((event) => (
                    <EventCard key={event._id} event = {event}/>
                  ))}

                  
            </div>
        </div>
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

export default ExploreFeed
