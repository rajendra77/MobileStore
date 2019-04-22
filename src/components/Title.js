import React from 'react'

export default function Title({name,title}) {
  return (
    <div className='container'>
        <div className='row'>
           <div className='col-10 col-md-6 mx-auto text-center'>
              <h3>
                       <strong className='text-title'>{title}</strong> {name} 
                </h3>
          </div>     
       </div>
    </div>
    
  )
}
