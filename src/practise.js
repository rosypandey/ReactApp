import Home from '../Pages/Home'
import About from '../comp/About'
import Service from '../comp/Service'
import Contact from '../comp/Contact'
import Pages from '../comp/Pages'
import Block from '../comp/Block'

<Routes>
         <Route path = "/" component = {<Home/>} />
         <Route path = "/about" component = {<About/>} />
         <Route path = "/contact" component = {<Contact/>} />
         <Route path = "/service" component = {<Service/>} />
         <Route path = "/blocks" component = {<Block/>} />
         <Route path = "/pages" component = {<Pages/>} />
   </Routes>


import React from 'react'
import CatData from '../Data/CatData'
import ImgData from '../Data/ImgData'

export default function Body() {
  return (
    <>
    <div className='row container'>
<div className='col-lg-8 pt-5'>
    
        <div>
            <h1><strong>What do we do?</strong></h1>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
               some form, by injected humour, or randomised words which dont look even slightly believable.</p>
           </div>
            </div>
          
         <div className='col-lg-4'><img className='w-100 pt-5' src='http://trydo.rainbowit.net/assets/images/about/about-3.jpg'/></div>
           </div>
           <div className='container text-center mt-5'><h1><strong>Our Service</strong></h1>
       <p> There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration.</p> </div>
           <div className='row container my-5 text-center mx-2'>
               <div className='col-lg-4 danger py-5'>
                 {CatData.slice(0,1).map((w)=>(<h2>{w.title}</h2> ))}
                 {CatData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
            <div className='col-lg-4 danger py-5'>  {CatData.slice(1,2).map((w)=>(<h2>{w.title}</h2> ))}
            {CatData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))}
            </div>
            <div className=' col-lg-4 danger py-5'>  {CatData.slice(2,3).map((w)=>(<h2>{w.title}</h2> ))}
             {CatData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))} </div>           </div>
             <div className='row container pt-5 text-center mx-2'>
            <div className=' col-lg-4 danger py-5'>   {CatData.slice(3,4).map((w)=>(<h2>{w.title}</h2> ))} 
            {CatData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))}</div>
            <div className=' col-lg-4 danger py-5'>   {CatData.slice(4,5).map((w)=>(<h2>{w.title}</h2> ))}
             {CatData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))} </div>
            <div className=' col-lg-4 danger py-5'>   {CatData.slice(5,6).map((w)=>(<h2>{w.title}</h2> ))}  
            {CatData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))}</div>
           </div>
           <div className='row container my-5 text-center ms-5'>
<div classname="col-lg-12">
  <img width={1200} src='http://trydo.rainbowit.net/assets/images/bg/bg-image-26.jpg'/>
</div>
           </div>
           <div className='container row'>
            <div className='col-lg-12 text-center'>
            {ImgData.slice(0,5).map((a)=>(<img src={a.img}/>))}
            </div>
            <div className='col-lg-12 text-center pt-3'>
            {ImgData.slice(6,10).map((a)=>(<img src={a.img}/>))}
            </div>
            
           </div>
             </>
  )
}


import React from 'react'
import { useParams } from 'react-router'
import PostData from '../Data/PostData'
import CatData from '../Data/PostData'
export default function Cat() {
  let {cid}=useParams()
  let cpost=PostData.filter((s)=>s.cat==cid)
  console.log(cpost);
  return (
    <div className='container py-3'>
      <h4>Category post</h4>
      <div className='row'>
        {cpost.map((d)=>(
          <div className='col-lg-3'>{d.title}</div>
        ))}
      </div>
     
    </div>
  )
}

<div class="container">
  <div class="row">
    <div class="col-lg-12">
      <ul class="brand-style-2">
        <li><img src="/assets/images/brand/brand-01.png" alt="Logo Images/"></li>
        <li><img src="/assets/images/brand/brand-02.png" alt="Logo Images/"></li>
          <li><img src="/assets/images/brand/brand-03.png" alt="Logo Images"/></li>
          <li><img src="/assets/images/brand/brand-04.png" alt="Logo Images/"></li>
          <li><img src="/assets/images/brand/brand-05.png" alt="Logo Images/"></li>
          <li><img src="/assets/images/brand/brand-06.png" alt="Logo Images/"></li>
          <li><img src="/assets/images/brand/brand-02.png" alt="Logo Images/"></li>
          <li><img src="/assets/images/brand/brand-03.png" alt="Logo Images/"></li>
          <li><img src="/assets/images/brand/brand-04.png" alt="Logo Images/">
  </ul>
  </div>
  </div>
  </div>

  <div className='container row'>
            <div className='col-lg-12 text-center'>
            {ImgData.slice(0,5).map((a)=>(<img src={a.img}/>))}
            </div>
            <div className='col-lg-12 pt-3 text-center'>
            {ImgData.slice(6,10).map((a)=>(<img src={a.img}/>))}
            </div>
            
           </div>


           <div className='row container py-5 text-center mx-2'>
               <div className='col-lg-4 '> 
               <div className='danger'><i class="bi bi-people icon "></i>
                 {PostData.slice(0,1).map((w)=>(<h2>{w.title}</h2> ))}
                 {PostData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
                 </div>