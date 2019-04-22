import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
  render() {
      
    return (
      <ProductConsumer>
          {value=>{
              const {modalOpen,closeModal}=value
              const {img,title,price}=value.modalProduct

              if(!modalOpen){
                  return (
                    null
                  )
              }
              else{
                  return(
                  <div className='modalContainer'>
                   <div className='container'>
                      <div className="row">
                        <div id='modal' className="col-8 col-md-6 col-lg-4 mx-auto p-5 text-center">
                          <h2>Item added to cart</h2>
                          
                              <img className='img-fluid' src={img} alt='img' />
                              <h5>{title}</h5>
                              <h5 className='text-muted'>Price : $ {price}</h5>
                              <Link to='/'>
                                <button
                                 className='button1 mx-1'
                                onClick={()=>closeModal()}
                                 >
                                    Continue Shopping
                                </button>
                              </Link>

                              <Link to='/cart'>
                                <button
                                 className='button1 mx-1'
                                  onClick={()=>closeModal()}
                                 >
                                   Go to Cart
                                </button>
                              </Link>

                        </div>
                      </div>
                   </div>
                  </div>
                  
                  )
                  
              }

          }}
      </ProductConsumer>
    )
  }
}
