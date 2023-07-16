import '../CreateEvent/CreateEvent.css'
import {TextField,Button, FormGroup,} from '@mui/material'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useState} from 'react'
import Navbar from "../../Components/Navbar/Navbar"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function SharePost() {

    const [eventData, setEventData] = useState({
        title:'',
        desc:'',
        location:'',
        startTime:dayjs('2023-05-10T03:30'),
        endTime:dayjs('2023-5-12T12:00')
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEventData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

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
        console.log(eventData)
    }

    const Items = [
        {
            name:"Create Event",
            link:"/createEvent"
        },
        {
            name:"Share Post",
            link:"/newPost"
        },
        {
            name:"Explore",
            link:"/explore"
        }
    ]

    return (
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <div className="createEvent" style={{backgroundColor:"#66f1dc5d", minHeight:"100vh"}}>
            <Navbar items={Items}/>
            
            <div className="ce-inner-content">
    
                <h2 style={{color:"#398378", marginTop:"20px"}}>Share a Post:</h2>
    
                <div className="ce-form" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <FormGroup sx={{width:"500px", mt:"30px"}}>
                    <TextField value={eventData.title} autoFocus onChange={handleInputChange} required label="Title" variant="outlined" name='title' sx={{mb:"20px",  '& label.Mui-focused': {
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
                    <TextField type='text' multiline value={eventData.desc} autoFocus onChange={handleInputChange} required label="Description" name='desc' variant="outlined" sx={{mb:"20px",  '& label.Mui-focused': {
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
    
    
                    <Button onClick={handleSignup} size="small" sx={{padding:"4px 15px 2px", color:"white", fontWeight:"bold",textTransform:"none" ,fontSize:'20px', mt:'20px', backgroundColor:'#398378', ":hover":{ bgcolor:"#26564f"}}}>Submit</Button>
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

export default SharePost