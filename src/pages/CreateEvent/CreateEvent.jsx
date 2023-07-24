import {TextField,Button, FormGroup,} from '@mui/material'
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useState, useEffect} from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import './CreateEvent.css'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useCreateEvent } from '../../hooks/useCreateEvent';
import { useAuthContext } from '../../hooks/useAuthContext';

function CreateEvent() {

    
    const { user } = useAuthContext();
    const [time,setTime] = useState('')

    const [eventData, setEventData] = useState({
        title:'',
        desc:'',
        location:'',
        startTime:dayjs('YYYY-MM-DDTHH:mm:ss'),
        endTime:dayjs('YYYY-MM-DDTHH:mm:ss'),
        author:user?.user.username
    })

    const {createEvent, status, error} = useCreateEvent();

    useEffect(() => {
        if(status){
            toast.success("Event Created Successfully")
        }
        if(error){
            toast.error(`Error:${error}`)
        }
    }, [status,error])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEventData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleStartTimeChange = (newValue) => {
        // Update the time state variable
        setTime(newValue);
    
        // Update the startTime property in eventData object
        setEventData((prevEventData) => ({
          ...prevEventData,
          startTime: dayjs(newValue)
        }));
        setTime('')
      };

      const handleEndTimeChange = (newValue) => {
        setTime(newValue)

        setEventData((prevEventData) => ({
            ...prevEventData,
            endTime: dayjs(newValue)
          }));
          setTime('')
      }


      const inputValidation = (eventData) =>{
        if(!eventData.title || !eventData.desc || !eventData.location || !eventData.startTime || !eventData.endTime){
            toast.error('Please fill in all fields', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            return false;
        }
        return true
      }

      const handleSignup = (e) => {
        e.preventDefault()
        const validated = inputValidation(eventData)
        if(validated){
            createEvent(eventData)
        }
    }

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
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
        <div className="createEvent" style={{backgroundColor:"#66f1dc5d", minHeight:"100vh"}}>
        <Navbar items={Items}/>
        
        <div className="ce-inner-content">

            <h2 style={{color:"#398378", marginTop:"20px"}}>Create Event:</h2>

            <div className="ce-form" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <FormGroup sx={{width:"500px", mt:"30px"}}>
                <TextField value={eventData.title} autoFocus onChange={handleInputChange} required label="Event Title" variant="outlined" name='title' sx={{mb:"20px",  '& label.Mui-focused': {
                    color: '#398378',
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: 'green',
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor: '#398378',
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#398378',
                    },
                },}}/>
                <TextField type='text' multiline value={eventData.desc} autoFocus onChange={handleInputChange} required label="Event-Description" name='desc' variant="outlined" sx={{mb:"20px",  '& label.Mui-focused': {
                    color: '#398378',
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: 'green',
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor: '#398378',
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#398378',
                    },
                },}} />

                <TextField value={eventData.location} autoFocus onChange={handleInputChange} required label="Event-Location" variant="outlined" name='location' sx={{mb:"20px",  '& label.Mui-focused': {
                    color: '#398378',
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: 'green',
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                    borderColor: '#398378',
                    },
                    '&.Mui-focused fieldset': {
                    borderColor: '#398378',
                    },
                },}}/>  

                <DateTimePicker
                required
                    label="Event's Start Time"
                    value={eventData.startTime}
                    onChange={handleStartTimeChange}
                    sx={{mb:"20px", '& label.Mui-focused': {
                        color: '#398378',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'green',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        borderColor: '#398378',
                        },
                        '&.Mui-focused fieldset': {
                        borderColor: '#398378',
                        },
                    },}}
                />

                <DateTimePicker
                required
                    label="Event's End Time"
                    value={eventData.endTime}
                    onChange={handleEndTimeChange}
                    sx={{'& label.Mui-focused': {
                        color: '#398378',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottomColor: 'green',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                        borderColor: '#398378',
                        },
                        '&.Mui-focused fieldset': {
                        borderColor: '#398378',
                        },
                    },}}
                />
                

                <Button disabled={false} onClick={handleSignup} size="small" sx={{padding:"4px 15px 2px", color:"white", fontWeight:"bold",textTransform:"none" ,fontSize:'20px', mt:'20px', backgroundColor:'#398378', ":hover":{ bgcolor:"#26564f"}}}>Submit</Button>
            </FormGroup>
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
    </LocalizationProvider>
  )
}

export default CreateEvent