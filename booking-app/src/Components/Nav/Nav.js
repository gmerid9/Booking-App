import { Link } from "react-router-dom"
import "./nav.css"


export default function Nav (props) {
    return (

    <>

    <div className="navbar">
    <div className="navContainer">
     <span className="logo">BookingApp</span>
   
   <div className="navItemsContainer">
    
         
          <Link className="navItems" to="/"> Home</Link>
             <Link className="navItems"  to="/about"> About</Link>
            <Link className="navItems"  to="/reservation"> Reservation </Link>
            <Link className="navItems" to="/contact"> Contact </Link> 
           <Link to="/auth">  <button className="navButton">Signup/Login </button>
           </Link>
          {/* <button className="navButton">Login</button> */}
            </div>
     </div>

    </div>

    </>
      
    )
  }