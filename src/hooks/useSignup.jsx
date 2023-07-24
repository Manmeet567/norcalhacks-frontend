import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading,setLoading] = useState(null)
    const {dispatch} = useAuthContext()


    const signup = async (username, password, rememberme) => {
        setLoading(true)
        setError(null)

        const response = await fetch('https://taurite-backend.onrender.com/api/user/signup', {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setLoading(false);
            setError(json.error)
        }

        if(response.ok){
            if(rememberme){
                localStorage.setItem('user', JSON.stringify(json))
            }
            dispatch({type:'LOGIN', payload:json})
            setLoading(false)
        }
    }

    return {signup, loading, error}
}