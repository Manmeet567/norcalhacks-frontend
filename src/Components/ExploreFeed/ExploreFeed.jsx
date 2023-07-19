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
          {/* Event feed content */}
        </div>
      </div>
    </div>
  )
}

export default ExploreFeed
