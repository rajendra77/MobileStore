import React from 'react'

export default function CartTotal({value}) {
     const {clearCart,subTotal}=value
  return (
    <React.Fragment>
       <div className='container-fluid'>
            <div className="row d-flex justify-content-end">
                 <div className="col-10 col-md-4 col-lg-4 mx-right text-capitalize my-5 text-muted text-italic">
                     <button 
                      onClick={()=>clearCart()}
                     className='my-3 button1'>
                         Clear Cart
                     </button>
                     <h3>SubTotal : $ <strong>{subTotal}</strong> </h3>
                     <h3>Tax : $ </h3>
                     <h3>Total : $</h3>
                 </div>
            </div>
       </div>
    </React.Fragment>
  )
}
