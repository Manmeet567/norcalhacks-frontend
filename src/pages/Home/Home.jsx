import { Container, Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../../assets/taurite-logo.png'

function Home() {
  return (
    // main theme color -> #398378
    <Container sx={{backgroundColor:"#398378",  cursor:"default", paddingBottom:'50px'}} maxWidth={false}>
      <div className="hTitle" style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:"column", alignItems:"center"}}>
        <img src={logo} height="200px" width="350px"  alt="logo"/>
        <h1 style={{color:'white',textAlign:"center", border:"5px solid #fff", padding:"8px 20px"}}>Welcome to Taurite where you can unite, Empower and create change in society.</h1>
      </div>

      <div className="hmain" style={{width:'100%', display:'flex', justifyContent:'center', flexDirection:"column", alignItems:"center", color:"#fff", marginTop:"30px"}}>
        <h2 style={{textDecoration:"underline"}}>Explore Social Equality</h2>
        <p style={{marginTop:"10px", fontSize:"20px", width:"50%",textAlign:"center"}}>Discover inspiring stories, educational resources, and initiatives dedicated to social equality. Together, we can build a more equitable future.</p>

        <h2 style={{textDecoration:"underline", marginTop:"20px"}}>Get Involved:</h2>
        <p style={{marginTop:"10px", fontSize:"20px", width:"50%",textAlign:"center"}}>Are you new here? Click the button below to sign up and join our community of changemakers. Let's work</p>
        <Link to="/signup"><Button size="small" sx={{padding:"2px 15px", color:"#398378", fontWeight:"bold", fontSize:'20px', marginTop:'10px', textTransform:"none", backgroundColor:'white', ":hover":{color:"White", bgcolor:"#2e2f2fd1"}}}>Sign Up</Button></Link>

        <p style={{marginTop:"10px", fontSize:"20px", width:"50%",textAlign:"center"}}>Already part of our community? Click the button below to log in and access exclusive content, connect with like-minded individuals, and continue your journey toward social equality.</p>
        <Link to="/login"><Button size="small" sx={{padding:"2px 15px", color:"#398378", fontWeight:"bold", fontSize:'20px', marginTop:'10px', backgroundColor:'white', ":hover":{color:"White", bgcolor:"#2e2f2fd1"}, textTransform:"none"}}>Log In</Button></Link>

        <h2 style={{textDecoration:"underline", marginTop:"20px"}}>With Taurite you can:</h2>
        
        <div className="featureList" style={{marginTop:'20px', display:'flex', justifyContent:'center'}}>
        <Card sx={{ minWidth: 275, maxWidth:275, marginRight:'20px' }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, color:'#398378', textAlign:'center' }} gutterBottom>
              <b>Create Events</b>
            </Typography>
            <Typography sx={{  textAlign:'justify' }} >
            Empower change by organizing and hosting events focused on social equality. From workshops and conferences to community gatherings, our platform provides you with the tools to create meaningful experiences and drive positive impact.
            </Typography>
           
          </CardContent>
          <CardActions>
            <Button className='ce-btn' size="medium" sx={{margin:"0px auto", color:"#398378", ":hover":{bgcolor:"#398378", color:"white"}}}>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth:275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, color:'#398378', textAlign:'center' }} gutterBottom>
              <b>Share knowledge</b>
            </Typography>
            <Typography sx={{  textAlign:'justify' }} >
            Amplify your voice and contribute to the conversation surrounding social equality. Share your thoughts and expertise through informative and inspiring knowledge posts. Engage with a diverse community and promote education for all.
            </Typography>
           
          </CardContent>
          <CardActions>
            <Button className='ce-btn' size="medium" sx={{margin:"0px auto",color:"#398378", ":hover":{bgcolor:"#398378", color:"white"}}}>Learn More</Button>
          </CardActions>
        </Card>

        <Card sx={{ minWidth: 275, maxWidth:275, marginLeft:'20px' }}>
          <CardContent>
            <Typography sx={{ fontSize: 25, color:'#398378', textAlign:'center' }} gutterBottom>
              <b>Connect</b>
            </Typography>
            <Typography sx={{  textAlign:'justify' }} >
            Empower change by organizing and hosting events focused on social equality. From workshops and conferences to community gatherings, our platform provides you with the tools to create meaningful experiences and drive positive impact.
            </Typography>
           
          </CardContent>
          <CardActions>
            <Button className='ce-btn' size="medium" sx={{margin:"0px auto",color:"#398378", ":hover":{bgcolor:"#398378", color:"white"}}} onClick={() => {console.log("clicked")}}>Learn More</Button>
          </CardActions>
        </Card>
        </div>
      </div>

    </Container>
  )
}

export default Home