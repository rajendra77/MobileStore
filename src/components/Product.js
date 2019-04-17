import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Product extends Component {
  render() {
    const {img,inCart,title,price}=this.props.product
    return (

      <div className="container col-9 mx-auto col-md-6 col-lg-3 mx-3 my-3">
           <div className='card'>
              <div className="img-container p-5" onClick={()=>console.log('you have clikc on img container')}>
                 <Link to='details'>
                     <img src={img} alt='hey' className='card-img-top'/>
                 </Link>    
                 <button
                     className='cart-btn'
                     disable={inCart?'true':'false'}
                     onClick={()=>console.log('you have click on cart')}
                >
                    {inCart ? (<p className='text-capitilize' disable='true'>In Cart</p>) : (<i className='fas fa-cart-plus'></i>)}
                </button>         
              </div>
               <div className="cart-footer d-flex justify-content-center ml-0">
                <p className="text-capitilize ml-0">
                  {title}
                </p>
                <h4 className="text-blue mr-1 text-italic">
                 ${price}
                </h4>
               </div>

          </div>
      </div>
  
    )
  }
}
