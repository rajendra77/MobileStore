import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context'

export default class Product extends Component {
  render() {
    const {id,img,inCart,title,price}=this.props.product

    return (

      <div className="container col-9 mx-auto col-md-6 col-lg-3 mx-3 my-3">
           <div className='card'>
              <ProductConsumer>
                {value=>(
                    <div className="img-container p-5" onClick={()=>value.handleDetail(id)}>
                    <Link to='details'>
                        <img src={img} alt='hey' className='card-img-top'/>
                    </Link>    
                    <button
                        className='cart-btn'
                        disabled={inCart?true:false}
                        onClick={()=>{
                           value.addToCart(id)
                           value.openModal(id)
                        }}
                   >
                       {inCart ? (<p className='text-capitilize' disable='true'>In Cart</p>) : (<i className='fas fa-cart-plus'></i>)}
                      </button>         
                    </div>
                   
                )}
              </ProductConsumer>
              <div className="cart-footer d-flex justify-content-center ml-0">
                     <p className="text-capitilize align-self-center ml-0">
                     {title}
                        </p>
                        <h4 className="text-blue text-italic">
                       <span className='mr-1'> ${price}</span>
                       </h4>
                   </div>
          </div>
      </div>
  
    )
  }
}

Product.propTypes={
  product:PropTypes.shape({
    id:PropTypes.number,
    img:PropTypes.string,
    title:PropTypes.string,
    inCart:PropTypes.bool,
    price:PropTypes.number
  }).isRequired
}
