import React, { Component } from 'react'
import Cards from '../shopProducts/cards'
import axios from '../../axios'
import {Route,Switch} from 'react-router-dom'
import Product from '../productDisplay/productDisplay'
import Login from '../LoginContainer/login'
import Cart from '../CartContainer/Cart'
import Checkout from '../checkoutContainer/checkout'
class Shop extends Component{
 

  render(){
    console.log('Local storage',localStorage.getItem('authtoken'))
      return(
       <Switch>   
        <Route path="/login" exact render={(props)=><Login {...props} />}/>
        <Route path="/" exact render={(props) => <Cards {...props} logIn={this.props.logIn}/>}  />
        <Route path="/cart"  component={Cart}/>
        <Route path="/product/:id" exact render={(renderProps)=><Product renderProps={renderProps}/>} />
      
        </Switch>
      )
  }

}
export default Shop;