import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'
import { Drawer,Box, Stack, Menu, MenuItem } from '@mui/material'
import {SlClose} from 'react-icons/sl'
import {FaUserCircle} from 'react-icons/fa'

function Navbar(props) {

  const items = props.items

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const [open,setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="navbar" style={{position:"fixed", zIndex:"999", width:"100%", height:"70px", backgroundColor:"#398378", display:"flex", justifyContent:"center", boxShadow:"inset rgba(0, 0, 0, 0.2) 0px -20px 20px 0px, rgba(0, 0, 0, 0.2) 0px 20px 20px 0px"}}>
        <div className="inner-content" >
            <div className="logo" style={{display:"flex", alignItems:"end"}}>
              <img src={logo} alt="logo" width="60px" />
              <h1 style={{color:"white", marginBottom:"5px"}}>Taurite</h1>
            </div>

            <Stack direction="row" spacing={3} sx={{alignItems:"center"}}>
            <div className="menu-items">
              {items?.map((item) => (
                <div className="item" key={item.name}>
                  <Link to={item.link} style={{color:"white", textDecoration:'none', fontSize:"20px", margin:"0 20px" }}>{item.name}</Link>
                </div>
              ))}
              <GiHamburgerMenu className='menu-btn' onClick={handleOpen}/>
            </div>
            <div className="userAcc" title='Profile' style={{color:"white", fontSize:"30px", cursor:"pointer"}}>
                <FaUserCircle id='user' aria-controls={openMenu ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={openMenu ? 'true' : undefined} onClick={handleClickMenu}/>

                <Menu id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleCloseMenu}
                  MenuListProps={{
                    'aria-labelledby': 'user',
                  }}
                >
                  <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
                  <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
                </Menu>
            </div>
            </Stack>
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