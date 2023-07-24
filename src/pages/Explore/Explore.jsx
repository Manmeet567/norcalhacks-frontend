import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import ExploreFeed from '../../Components/ExploreFeed/ExploreFeed'

function Explore() {

    const [countryList, setCountryList] = useState([]);

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

    useEffect(() => {
        const getCountries = async () =>{
            const response = await fetch('https://restcountries.com/v3.1/all')

            const json = await response.json()
            if(!response.ok) {
                setCountryList([])
            }

            if(response.ok) {
                setCountryList(json)
            }
        }

        getCountries();
    }, [])

  return (
    <div className="explore">
        <Navbar items = {Items}/>
        
        <ExploreFeed countries={countryList} />

    </div>
  )
}

export default Explore