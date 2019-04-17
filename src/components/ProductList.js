import React, { Component } from 'react'
import Product from './Product'
import Title from './Title';
import {ProductConsumer} from '../context'
export default class ProductList extends Component {

  constructor(props){
    super(props)
    this.state={
      products:[]
    }
  }
  render() {
    return (
       <div className='container'>
         <Title name='Rajendra singh' title='Hey' />
         <div className="row">
           <ProductConsumer>
             {value=>{
                return value.products.map(product =>{
                  return <Product key={product.key} product={product}/>
                })
             }}
           </ProductConsumer>
         </div>
       </div>
    )
  }
}
