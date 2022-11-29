import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import PostData from '../Data/PostData'

export default function Cat() {
  let {cid}=useParams()
  let cpost=PostData.filter((s)=>s.cat==cid)
  console.log(cpost);
  return (
    <div className='container-fluid py-3'>
      <h4>category page{cid.desc}

      </h4>
      <div className='row'>
        {cpost.map((d)=>(
          <div className=' card col-lg-4'>
            <img src={d.img} className="w-100" width="100%"/>
            <h5><Link to={`/detail/${d.id}`}>{d.desc}</Link></h5>
          </div>
        ))}
      </div>
     
    </div>
  )
}
