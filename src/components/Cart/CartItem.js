import React from 'react'

export default function CartItem({item,value}) {
    const {img,title,price,inCart,count,total}=item
   
  return (
    <div className='container'>
      <div className="ro w">
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase text-muted">
            <img style={{width:'50px' ,height:'50px'}} src={img} alt='img' />
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           {title}
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           {price}
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
          {count}
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           Remove
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase">
           {total}
         </div>
      </div>
    </div>
  )
}
