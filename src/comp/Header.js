import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import CatData from '../Data/CatData'
import Detail from '../Pages/Detail'
import Home from '../Pages/Home'
import Cat from '../Pages/Cat'


export default function Header() {
  return (
    <>
    <div className='container-fluid bg-dark py-3 bg'>
     <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">

    <a className="navbar-brand" href="#"><img src='http://trydo.rainbowit.net/assets/images/logo/logo.png' alt=''/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ ">Home</Link>
       </li>
       <li className="nav-item d-flex">
       {CatData.map((b)=>(
         <Link className="nav-link" to={`/cat/${b.id}`}>{b.cat}</Link>
       ))}
        </li>
      
        <li className="nav-item">
          <a className="nav-link btn btn-border" href="#">Buy NOW</a>
        </li>
       </ul>
     
    </div>
  </div>
</nav>
<h4 className='text-light space'>WE ARE AGENCY</h4>
<p className='banner text-light space '>
TECHNOLOGY & INNOVATION FOR AGENCY SERVICES.</p>
<a href='' className='btn btn-danger bt'>CONTACT US</a>
    </div>
    
    <Routes>
         <Route path= "/" element = {<Home/>} />
         <Route path="/cat/:cid" element={<Cat/>}/>
         <Route path="/detail/:id" element={<Detail/>}/>
   </Routes>
    
   
    </>
  )
}
