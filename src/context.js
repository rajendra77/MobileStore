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
            modalProduct:detailProduct,
            subTotal:0
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
      })
    }

    openModal =(id)=>{
      const product=this.getItem(id)
      this.setState({
        modalOpen:true,
        modalProduct:product
      })
    }

    closeModal=()=>{
      this.setState({
        modalOpen:false 
      })
    }
    increment=(id)=>{   
      const cart=this.state.cart.map((item)=>{
          if(item.id===id)
          {
            item.count++        
          }
          
      })
      this.setState({
          cart:cart
      })
    }

    decrement=()=>{
      console.log("count is decremented")
    }

    clearCart=()=>{
     this.setProduct()
    
      this.setState({
        cart:[]
      })
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

