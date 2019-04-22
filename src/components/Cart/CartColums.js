import React from 'react'

export default function CartColums() {
  return (
    <div className='container-fluid'>
       <div className="row">
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           Product
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           Name 
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
            Price
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
          Quantity
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           Remove
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           total
         </div>
       </div>
    </div>
  )
}
