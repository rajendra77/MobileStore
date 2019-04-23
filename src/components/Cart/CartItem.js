import React from 'react'

export default function CartItem({item,value}) {
     const {id,img,title,price,inCart,count,total}=item
     const {increment,decrement,clearCart}=value
  return (
    <div className='container'>
      <div className="row">
         <div className="col-10 col-lg-2 mx-auto text-center text-uppercase ">
            <img style={{width:'50px' ,height:'50px'}} src={img} alt='img' />
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-muted my-3 font-italic text-sm ">
           {title}
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center  text-muted my-3 font-italic text-sm">
           {price}
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center  text-muted my-3 font-italic text-sm">

          <button 
             className='btn-sm mx-2'
             onClick={()=>increment(id)}
           >
            <i className="fas fa-minus"/>
          </button>
           
            {count}

          <button 
            className='btn-sm mx-2'
            onClick={()=>decrement(id)}
            >
             <i className="fas fa-plus"/>
          </button>

         </div>
         <div className="col-10 col-lg-2 mx-auto text-center text-muted my-3 font-italic text-sm ">
             <i className="fas fa-trash text-danger"/>
         </div>
         <div className="col-10 col-lg-2 mx-auto text-center  text-muted my-3 font-italic text-sm">
           {total}
         </div>
      </div>
    </div>
  )
}
