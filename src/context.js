import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext=React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {

    constructor(props){
        super(props)
        this.state={
            products:[],
            details:detailProduct,
            cart:[],
            modalOpen:false,
            modalProduct:detailProduct
        }
    }
    componentDidMount(){
       this.setProduct()
    }
    setProduct =()=>{
      let tempProducts=[]
      storeProducts.forEach(item=>{
       const singleItem={...item}
       tempProducts=[...tempProducts,singleItem]
      })

      this.setState(()=>{
         return {
           products:tempProducts
         }
      })
    }
    
    getItem = id =>{
      const product=this.state.products.find(item=>item.id===id)
      return product
    }

    handleDetail =id =>{
      const product=this.getItem(id)
      this.setState(()=>{
        return{
          details:product
        }
      })
    }

    addToCart = (id) =>{
      const tempProducts=[...this.state.products]
      const index=tempProducts.indexOf(this.getItem(id))
      const product=tempProducts[index]
      product.inCart=true
      product.count=1
      const price=product.price
      product.total=price
      this.setState(()=>{
        return{
          product:tempProducts,
          cart:[...this.state.cart,product]
        }
      },()=>{
        console.log(this.state.cart,this.state.products)
      })
    }

    openModal =(id)=>{
      const product=this.getItem(id)
      this.setState({
        modalOpen:true,
        modalProduct:product
      },()=>{
        console.log(this.state.openModal,this.state.modalProduct)
      })
    }

    closeModal=()=>{
      this.setState({
        modalOpen:false 
      })
    }
    increment=()=>{
      console.log("count is increment")
    }

    decrement=()=>{
      console.log("count is decremented")
    }

    clearCart=()=>{
      console.log("cart is empty now")
    }
   
  render() {
    return (
     <ProductContext.Provider value={{
       ...this.state,
       handleDetail:this.handleDetail,
       addToCart:this.addToCart,
       openModal:this.openModal,
       closeModal:this.closeModal,
       increment:this.increment,
       decrement:this.decrement,
       clearCart:this.clearCart,

       }}>
    
         {this.props.children}
     </ProductContext.Provider>
    )
  }
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}

