
import React from 'react'
import PostData from '../Data/PostData'
import ImgData from '../Data/ImgData'


export default function Home() {
  return (
    <>
    <div className=' container'>
      <div className='row'>
<div className='col-lg-8 pt-5'>
    
        <div>
            <h1><strong>What do we do?</strong></h1>
            <p>
              There are many variations of passages of Lorem Ipsum available, but 
              the majority have suffered alteration in 
               some form, by injected humour, or randomised words which dont look even slightly believable.</p>
           </div>
           <div><h1>Our Working Process.</h1></div>
          <div>
            <div className='my-5'>
            <h5>Designing</h5><span className='label'><strong>81%</strong></span>
          <div className="progress">
               <div className="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example" style={{width: '81%'}} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100} />
            </div></div>
    <div className='my-5'><h5>Management</h5><span className='label'><strong>72%</strong></span>
    <div className="progress">
    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" aria-label="Success striped example" style={{width: '72%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
    </div></div>
    <div className='my-5'><h5>Marketing</h5><span className='label'><strong>89%</strong></span>
    <div className="progress">
    <div className="progress-bar progress-bar-striped bg-info" role="progressbar" aria-label="Info striped example" style={{width: '89%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
    </div></div>
   <div className='my-5'><h5>Development</h5><span className='label'><strong>57%</strong></span>
   <div className="progress">
    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" aria-label="Warning striped example" style={{width: '57%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
  </div></div>
  
</div>

            </div>
          
         <div className='col-lg-4'><img className='w-100 pt-5' src='http://trydo.rainbowit.net/assets/images/about/about-3.jpg'/></div>
           </div></div>
           <div className='container text-center mt-5'><h1><strong>Our Service</strong></h1>
       <p> There are many variations of passages of Lorem Ipsum available,
         but the majority have suffered alteration.</p> </div>
          
          <div className='container'>
            <div className='row text-center '>
            <div className='col-lg-4'> 
               <div className='danger'><i class="bi bi-app icon "></i>
                 {PostData.slice(0,1).map((w)=>(<h2>{w.title}</h2> ))}
                 {PostData.slice(0,1).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
                 </div>
                 <div className='col-lg-4 '> 
               <div className='danger'><i class="bi bi-diamond icon "></i>
                 {PostData.slice(1,2).map((w)=>(<h2>{w.title}</h2> ))}
                 {PostData.slice(1,2).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
                 </div>
                 <div className='col-lg-4 '> 
               <div className='danger'><i class="bi bi-people icon "></i>
                 {PostData.slice(2,3).map((w)=>(<h2>{w.title}</h2> ))}
                 {PostData.slice(2,3).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
                 </div>
                 <div className='col-lg-4 '> 
               <div className='danger'><i class="bi bi-tv icon "></i>
                 {PostData.slice(3,4).map((w)=>(<h2>{w.title}</h2> ))}
                 {PostData.slice(3,4).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
                 </div>
                 <div className='col-lg-4 '> 
               <div className='danger'><i class="bi bi-diamond icon "></i>
                 {PostData.slice(4,5).map((w)=>(<h2>{w.title}</h2> ))}
                 {PostData.slice(4,5).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
                 </div>
                 <div className='col-lg-4 '> 
               <div className='danger'><i class="bi bi-tv icon "></i>
                 {PostData.slice(5,6).map((w)=>(<h2>{w.title}</h2> ))}
                 {PostData.slice(5,6).map((w)=>(<p>{w.desc}</p> ))}
                 </div>
                 </div>

            </div>
          </div>
             

             
             
        <div className='row container my-5 text-center ms-5 rel'>
<div classname="col-lg-12 ">
  <img width={1200} src='http://trydo.rainbowit.net/assets/images/bg/bg-image-26.jpg'/>
 <div className='pos'><i class="bi bi-play-circle-fill icon1"></i></div>
  
</div>
           </div>
           <div className='container row '>
            <div className='text-center'>
            {ImgData.slice(0,5).map((a)=>(
            <img src={a.img} className='ww'/>))}
            </div>
            <div className='col-lg-12 pt-3 text-center'>
            {ImgData.slice(6,10).map((a)=>(<img src={a.img} className='ww'/>))}
            </div>
            </div>
           
             </>
  )
}