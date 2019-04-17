import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext=React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {

    constructor(props){
        super(props)
        this.state={
            products:storeProducts,
            details:detailProduct
        }
    }

    handleDetail =() =>{
      console.log('this is handle detial method')
    }

    addToCart = () =>{
      console.log('this is add to cart method')
    }
  render() {
    return (
     <ProductContext.Provider value={{
       ...this.state,
       handleDetail:this.handleDetail,
       addToCart:this.addToCart,
       
       }}>
         {this.props.children}
     </ProductContext.Provider>
    )
  }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}

