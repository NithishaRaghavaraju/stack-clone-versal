import React,{ useEffect} from 'react'
import {Link,useNavigate} from "react-router-dom"
import {useSelector, useDispatch} from "react-redux"
import decode from "jwt-decode"
import logoo from "../../assets/logo.png"
import search from "../../assets/search-solid.svg"
import Avatar from "../../components/Avatar/avatar"
import Button from "../../components/Button/button"
import "./Navbar.css"
import { setCurrentUser } from '../../actions/currentUser'
import icon from "../../assets/icon.png"
import bars from "../../assets/bars-solid.svg"
import "../LeftSidebar/LeftSidebar.css"
import {NavBars, SearchNav} from "./navbar.js"



const Navbar = () => {
  const dispatch = useDispatch()
  var User = useSelector((state => (state.currentUserReducer)))
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch({ type : "LOGOUT"});
    navigate("/")
    dispatch(setCurrentUser(null))
  }

  useEffect(()=>{
      const token = User?.token
      if(token){
        const decodedToken = decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
          handleLogout()
        }
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem("Profile"))))
  },[dispatch])


  return (
    <div className='search-small'>
    <nav className='main-nav'>
        <div className='navbar'>
            <button className='small-nav-icon sm-search-btn' onClick={NavBars}><img src={bars} alt="bars" className="bar"/></button>
            <Link to="/" className="nav-item nav-logo">
                <img src={logoo} alt="logo" className="big-nav-icon"/>
                <img src={icon} alt="icon" className='small-nav-icon col-s-2 very-sm'/>
            </Link>
            <Link to="/" className="nav-item nav-btn small-nav">About</Link>
            <Link to="/Subcriptions" className="nav-item nav-btn col-s-2 very-sm">Subcription</Link>
            <Link to="/" className="nav-item nav-btn col-s-2 small-nav">For Teams</Link>
            <form className='big-nav-icon'>
               <input type="text" placeholder='Search ........' className='small-nav' />
               <img src={search} alt="search" width="18" className='search-icon col-s-2'/>
       
            </form>
            <form className='small-nav-icon ' style={{ flexGrow : 0 }}>
               <button type="button" className="sm-search-btn very-sm" onClick={SearchNav}><img src={search} alt="search" width="18" style={{position: "initial", margin: "5px"}} className='search-icon'/></button>
            </form>
            {User === null ? 
               <Link to="/auth" className='nav-item nav-links col-s-2'>Log In</Link> 
               : 
               <>
                 <Avatar backgroundColor="#009dff" px="10px" py="7px" borderRadius="50%" className="col-s-2"><Link to={`/Users/${User.result._id}`} style={{color : "white",textDecoration :"none"}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                 <button className='nav-item nav-links col-s-2 very-sm' onClick={handleLogout}>Log Out</button>
               </>
           
            }
            

        </div>
        <div className='small-nav-icon small-search nav-sm'>
    <input type="text" className='vsm-search' placeholder='Search ........' />
    
    </div>
    </nav>
    
    </div>
  )
}

export default Navbar
