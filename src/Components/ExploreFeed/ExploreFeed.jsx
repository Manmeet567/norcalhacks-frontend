import { Select, MenuItem,InputLabel,FormControl } from "@mui/material"
import { useEffect, useState } from "react"
import './ExploreFeed.css'

function ExploreFeed({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState("")
  const [countryNames, setCountryNames] = useState([])

  useEffect(() => {
    const names = countries.map((country) => country.name.common)
    setCountryNames(names.sort())
  }, [countries])

  const string1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolorum aspernatur ipsum sit architecto veniam illo repellat?"

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

                  <div className="event-card">
                    <h2>Event-Title</h2>
                    <div className="date-time">
                      <p><b>Date - </b>12-July-2023</p>
                      <p><b>12:30pm - 3:00pm</b></p>
                    </div>
                    <p style={{marginBottom:"8px"}}><b>Location - Hawaii</b></p>
                    <p style={{marginBottom:"8px"}}><b>Created By - </b>Hiro</p>
                    <h4>Description - </h4>
                    <p style={{textAlign:"justify"}}>{string1}</p>

                    <button style={{margin:"14px auto 0", width:"100px", borderRadius:"5px", border:"none", padding:"10px 0", backgroundColor:"#398378", color:"white", cursor:"pointer"}}>Learn More</button>
                  </div>

                  
            </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreFeed
