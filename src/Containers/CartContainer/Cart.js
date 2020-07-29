import React, { Component } from 'react'
import CART from '../../components/Cart/cart'
import axios from '../../axios'
import {Redirect,Route} from 'react-router-dom';
import Checkout from '../checkoutContainer/checkout';
import {connect} from 'react-redux'
import { addToCartAsync ,changeQtyAsync} from '../../store/actions/cartAction';

class Cart extends Component{
    state={
        cartProducts:[],
        totalPrice:0,
        loggedIn:false,
        orderNow:false,
    }
    componentDidMount(){
        console.log('From [Cart.jsx] container ',this.props)
        this.props.addItem('/cart')
    
        // axios.get('/cart',{
        //     headers:{
        //         Authorization:"brew "+localStorage.getItem('authtoken')
        //     }
        // }).then(response=>{
        //     console.log("response cart container ",response)
        //     if(response.data['error']){
        //         this.props.history.replace('/login')
        //     }else{
                
        //         this.setState({
        //             cartProducts:[...response.data['products']],
        //             totalPrice:response.data['totalPrice'],
        //             loggedIn:true
        //         })

        //     }

           
        // })
        //   .catch(err=>{console.log("response cart container ",err)})
    
    
        }
    
    changeQuantity=(id,e)=>{

      this.props.changeQuantity(e.target.value,id,this.props);

    }
    handleOrder(){
        axios.post('/order',{
            headers:{
                Authorization:"brew "+localStorage.getItem('authtoken')
            }
        }).then(response=>{
            //console.log("response qty container ",response)
            if(response.data['error']){
                this.props.history.replace('/login')
            }else{
              if(response.data['isSuccessful']){
                  this.props.history.push('/orderconfirmed')
              }
            }
        })
    }
    changeToOrder=(doOrder)=>{
        this.setState({
            orderNow:doOrder
        })
    }
    handleCheckout=()=>{
        this.props.history.push('/cart/checkout')
    }
    render(){
      
        return (
           <React.Fragment>
               <Route path="/cart/checkout" exact render={(props)=><Checkout {...props} doOrder={this.changeToOrder} totalPrice={2300} items={{}}/>}/>
           {
            this.props.login?<CART doOrder={this.state.orderNow} cartProducts={this.props.cartProducts} handleCheckout={this.handleCheckout} changeQuantity={this.changeQuantity} totalPrice={this.props.totalPrice}/>
            :this.props.history.replace('/login')
           } 
            
         
           
        </React.Fragment>
        )
    }
}

const mapContainerToState=(state)=>{
    return{
        cartProducts:state.cartReducer.cartProducts,
        totalPrice:state.cartReducer.totalPrice,
        login:state.loginReducer.loggedIn
    }
}
const mapContainerToDispatcher=(dispatch)=>{
    return{
        addItem:(url)=>dispatch(addToCartAsync(url)),
        changeQuantity:(qty,id,props)=>dispatch(changeQtyAsync(qty,id,props))
    }
}
export default connect(mapContainerToState,mapContainerToDispatcher)(Cart);