import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useCreateEvent = () => {

    const {user} = useAuthContext(); 
    const [status, setStatus] = useState(null)
    const [error, setError] = useState(null)

    const createEvent = async (obj) => {
        setStatus(false);
        
        const response = await fetch('http://localhost:4000/api/createEvent', {
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'authorization': `Bearer ${user.token}`
            },
            body:JSON.stringify(obj)
        })

        const json = await response.json();
        
        if(!response.ok) {
            setStatus(false)
            setError(json.error)
        }

        if(response.ok) {
            setStatus(true)
        }
    }

    return {createEvent, status, error}
}