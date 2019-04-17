import React from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends React.Component{
    render()
    {
        const product={
            fontSize:'20px',
            color:'black'
        }
        return(

           <nav className='navbar navbar-expand-sm bg-primary  navbar-light'>

              <Link to='/' className='nav-link navbar-brand'>
                  <i className="fas fa-home"/>
              </Link>

              <ul className="navbar-nav ml-5">              
                   <li className="nav-item" style={product}>
                      <Link to='/' className='nav-link'>
                          Products
                      </Link>  
                   </li>                            
              </ul>

              <Link to='/cart' className='ml-auto'>
                 <button >
                    <i className="fas fa-cart-plus" />
                        My Cart
                 </button>
              </Link>

           </nav>

        )
    }
}