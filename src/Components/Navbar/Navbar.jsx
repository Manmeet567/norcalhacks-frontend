import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Navbar(props) {

  const items = props.items

  return (
    <div className="navbar" style={{width:"100%", height:"70px", backgroundColor:"#398378", display:"flex", justifyContent:"center", boxShadow:"inset rgba(0, 0, 0, 0.2) 0px -20px 20px 0px"}}>
        <div className="inner-content" >
            <div className="logo" style={{display:"flex", alignItems:"end"}}>
              <img src={logo} alt="logo" width="60px" />
              <h1 style={{color:"white", marginBottom:"5px"}}>Taurite</h1>
            </div>

            <div className="menu-items">
              {items?.map((item) => (
                <div className="item" key={item}>
                  <Link to={item.link} style={{color:"white", textDecoration:'none', fontSize:"20px", margin:"0 20px" }}>{item.name}</Link>
                </div>
              ))}

              {/* <div className="item">
                <Link to='' style={{color:"white", textDecoration:'none', fontSize:"20px", margin:"0 20px"}}>Create Events</Link>
              </div> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar