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
