import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom';
export default class Details extends Component {
  render() {
  
    return (
     <ProductConsumer>
       {value =>{
            const {company,title,price,img,info,inCart}=value.details
            return(
               <div className='container py-5'>
                  <div className="row">
                     <div className="col-lg-6 col-md-6 mx-auto text-center">
                            <img src={img} alt='pic' />
                     </div>
                     <div className="col-sm-10 col-lg-6 col-md-6 mx-auto text-center">
                        <div className='title'><h2 >Modal:{title}</h2></div>

                        <h4 className='text-title text-capitalize text-muted mt-3 my-2'>     
                             Made By : <strong className='text-uppercase'>{company}</strong>
                        </h4>

                        <h4 className='text-blue'>
                            <strong>Price :</strong>${price}<br></br>
                        </h4>
                     
                         <p className='font-wight-bold text-capitalize'>Some info about product</p>
                         <p className='text-muted lead'>{info}</p>
                          
                        <Link to='/'>
                              <button className='button1 m-2'>
                                 Back To Products
                               </button>
                      </Link>
                      <Link>
                             <button 
                              className='button1 m-2'
                              disabled={inCart?true:false}
                              onClick={()=>console.log('you have clicked on Cart')}
                             >                        
                                 {inCart?'In Cart':'Add to Cart'}
                                 
                             </button>
                      </Link>
                     </div>

              
              
                  </div>
               </div>
            )
        }}
         
     </ProductConsumer>
    )
  }
}
