import { Container, Stack, TextField,Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/taurite-logo.png'


function Login() {
  return (
    <Container maxWidth={false} sx={{height:"100vh", display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"#398378", padding:"0 20px"}}>
        <Link to='/'><img style={{marginTop:"30px"}} src={logo} height="200px" width="350px"  alt="logo"/></Link>

        <Stack spacing={3} sx={{width:"500px", backgroundColor:"white", padding:"20px 40px", borderRadius:"5px"}}>
            <h1 style={{color:"#398378", textDecoration:"underline"}}>Log In to continue</h1>
            <FormGroup>
                <TextField label="Username" variant="outlined" sx={{mb:"20px",  '& label.Mui-focused': {
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
                <TextField type='password' label="Password" variant="outlined" sx={{mb:"20px",  '& label.Mui-focused': {
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
                
                <FormControlLabel control={<Checkbox defaultChecked sx={{ color: "#398378",'&.Mui-checked': { color: "#398378" } }} />} label="Remember Me"/>

                <Button size="small" sx={{padding:"4px 15px 2px", color:"white", fontWeight:"bold", fontSize:'20px', mt:'20px', backgroundColor:'#398378', textTransform:"none", ":hover":{ bgcolor:"#26564f"}}}>Log In</Button>
            </FormGroup>
            <h4 style={{textAlign:"center", color:"#398378"}}>New user?, <Link to='/signup' style={{textDecoration:"underline", color:"#398378"}}>Signup Here</Link></h4>
        </Stack>

    </Container>  
  )
}

export default Login