import React from "react"
import { Container,Navbar,Nav, Button } from "react-bootstrap"
import './Navigation.css'
import { useSelector,useDispatch } from "react-redux"
import { authAction } from "../store/authSlice"
import { useNavigate } from "react-router-dom"
import { darkModeAuction } from "../store/darkModeSlice"

const Navigation=()=>{

  const isPremium=useSelector(state=>state.auth.isPremium)
  const isLogin=useSelector(state=>state.auth.isLogin)
  const isDarkMode=useSelector((state)=>state.theme.inDarkMode)

  const navigate=useNavigate()
  const dispatch=useDispatch()
  const logoutHandler=()=>{
    dispatch(authAction.logout())
    navigate('/')
   
  }

  const switchThemeHandler=(event)=>{
    event.preventDefault()
  
    dispatch(darkModeAuction.changeTheme())
  }
    return(
        <Navbar expand="lg"  className="bg-body-tertiary ">
        <Container>
          <Navbar.Brand href="#home" className="bg-success border border-ridge rounded text-light p-1 m-2 ">MyExpenses</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href={!isLogin?'/':'/add-expense'} className="fw-bolder">{!isLogin?'':'Home'}</Nav.Link>
              {isLogin && <Nav.Link href="/view" className="fw-bolder">View Expenses</Nav.Link>}
              {isPremium && isLogin && <Nav.Link href="/report" className="fw-bolder">Generate Report</Nav.Link>}
              {isLogin && <button className="border-0 bg-transparent fw-bolder" onClick={logoutHandler} >Logout</button>}
              <Button onClick={switchThemeHandler} className='mx-3 nav-link'>{isDarkMode?<span><i className="fa-solid fa-sun" style={{color: '#d4ea34'}}></i> Light Mode</span>
           :<span><i className="fa-regular fa-moon" style={{color: '#cf642a'}}></i> Dark Mode</span>}</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
    
}

export default Navigation