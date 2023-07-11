import './userFeed.css'
import Eventfeed from './EventFeed/eventfeed'
import { Stack,Card, CardContent,CardActions , Typography, Button } from '@mui/material'


function UserFeed() {
  return (
    <div className="userFeed">
        <div className="inner-content-uf">
          <Eventfeed />
          
          <div className="postFeed" style={{marginTop:"40px"}}>
            <h2 style={{ color:"#398378"}}>Posts by Community : </h2>

            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{mt:"20px", width:"100%", justifyContent:"center", alignItems:"center"}}>
            <Card sx={{ minWidth: 275, maxWidth:200}}>
                <CardContent>
                  <Typography sx={{ fontSize: 25, color:'#398378', textAlign:'center' }} gutterBottom>
                    <b>Event Title</b>
                  </Typography>
                  <Typography sx={{  textAlign:'justify' }} >
                  Empower change by organizing and hosting events focused on social equality. From workshops and conferences to community gatherings, our platform provides you with the tools to create meaningful experiences and drive positive impact.
                  </Typography>
                
                </CardContent>
                <CardActions>
                  <Button className='ce-btn' size="medium" sx={{margin:"0px auto", color:"#398378", ":hover":{bgcolor:"#398378", color:"white"}}}>Learn More</Button>
                </CardActions>
              </Card>

              <Card sx={{ minWidth: 275, maxWidth:200}}>
                <CardContent>
                  <Typography sx={{ fontSize: 25, color:'#398378', textAlign:'center' }} gutterBottom>
                    <b>Event Title</b>
                  </Typography>
                  <Typography sx={{  textAlign:'justify' }} >
                  Empower change by organizing and hosting events focused on social equality. From workshops and conferences to community gatherings, our platform provides you with the tools to create meaningful experiences and drive positive impact.
                  </Typography>
                
                </CardContent>
                <CardActions>
                  <Button className='ce-btn' size="medium" sx={{margin:"0px auto", color:"#398378", ":hover":{bgcolor:"#398378", color:"white"}}}>Learn More</Button>
                </CardActions>
              </Card>

              <Card sx={{ minWidth: 275, maxWidth:200}}>
                <CardContent>
                  <Typography sx={{ fontSize: 25, color:'#398378', textAlign:'center' }} gutterBottom>
                    <b>Event Title</b>
                  </Typography>
                  <Typography sx={{  textAlign:'justify' }} >
                  Empower change by organizing and hosting events focused on social equality. From workshops and conferences to community gatherings, our platform provides you with the tools to create meaningful experiences and drive positive impact.
                  </Typography>
                
                </CardContent>
                <CardActions>
                  <Button className='ce-btn' size="medium" sx={{margin:"0px auto", color:"#398378", ":hover":{bgcolor:"#398378", color:"white"}}}>Learn More</Button>
                </CardActions>
              </Card>
            </Stack>
            
          </div>

        </div>
    </div>
  )
}

export default UserFeed