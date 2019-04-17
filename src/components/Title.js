import React from 'react'

export default function Title({name,title}) {
  return (
    <div className='row'>
      <div className='col-sm-4'>
        <h3>
           <strong className='text-title'>{title}</strong> {name} 
        </h3>
      </div>     
    </div>
  )
}
