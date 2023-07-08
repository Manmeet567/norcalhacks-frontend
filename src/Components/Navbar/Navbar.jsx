import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import { Drawer,Box, Stack } from '@mui/material'
import {SlClose} from 'react-icons/sl'

function Navbar(props) {

  const items = props.items

  const [open,setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="navbar" style={{position:"fixed", width:"100%", height:"70px", backgroundColor:"#398378", display:"flex", justifyContent:"center", boxShadow:"inset rgba(0, 0, 0, 0.2) 0px -20px 20px 0px, rgba(0, 0, 0, 0.2) 0px 20px 20px 0px"}}>
        <div className="inner-content" >
            <div className="logo" style={{display:"flex", alignItems:"end"}}>
              <img src={logo} alt="logo" width="60px" />
              <h1 style={{color:"white", marginBottom:"5px"}}>Taurite</h1>
            </div>

            <div className="menu-items">
              {items?.map((item) => (
                <div className="item" key={item.name}>
                  <Link to={item.link} style={{color:"white", textDecoration:'none', fontSize:"20px", margin:"0 20px" }}>{item.name}</Link>
                </div>
              ))}

              <GiHamburgerMenu className='menu-btn' onClick={handleOpen}/>
            </div>
        </div>

        <Drawer open={open} anchor='right' onClose={handleClose}>
            <div className="menu" style={{width:"300px", height:"100vh", backgroundColor:"#398378", display:"flex", justifyContent:"center"}}>
              <Box sx={{width:"200px", height:"500px", mt:"80px"}}>
                <SlClose onClick={handleClose} style={{cursor:"pointer",color:"white", fontSize:"40px", transform:"translate(170px, -40px)"}}/>
                <Stack spacing={5} sx={{color:"white"}}>
                  {items?.map((item) => (
                    <Link key={item.name} to={item.link} style={{textDecoration:'none', color:"white"}}><h3>{item.name}</h3></Link>
                  ))}
                </Stack>
              </Box>
            </div>
        </Drawer>

    </div>
  )
}

export default Navbar