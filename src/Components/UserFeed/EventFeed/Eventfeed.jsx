import { Stack,Card, CardContent,CardActions , Typography, Button } from '@mui/material'

function Eventfeed() {
  return (
    <div className="eventFeed" style={{width:"100%", marginTop:"40px", padding:"20px"}}>
            <h2 style={{ color:"#398378"}}>Explore Events:</h2>
            
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{mt:"20px", width:"100%", justifyContent:"center", alignItems:"center" , flexWrap:"wrap"}}>
              <Card sx={{ minWidth: 275, maxWidth:400}}>
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

              <Card sx={{ minWidth: 275, maxWidth:400 }}>
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
  )
}

export default Eventfeed