import React, { Component } from 'react'
import {ProductConsumer} from '../../context'
import Title from '../Title'
import EmptyCart from './EmptyCart'
import CartColums from './CartColums'
import CartList from './CartList'

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value=>{
           if(value.cart.length>0){
             return(
               <div className='container-fluid'>
                 <Title name="Cart" title="Your" />
                 <CartColums />
                 <CartList value={value}/>
               </div>
             )
           }
           else{
             return(
              <EmptyCart />
             )
           }
         
        }}
      </ProductConsumer>
    )
  }
}
