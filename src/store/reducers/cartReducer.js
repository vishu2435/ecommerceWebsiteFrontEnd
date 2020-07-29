import {ADDTOCART, ERROR, CHANGEQUANTITY} from '../actions/actiontypes'

const initialState={
    cartProducts:[],
    totalPrice:0,
    orderNow:false,
    
}

const cartreducer=(state=initialState,action)=>{
    switch(action.type){
      case ADDTOCART:  
        return {
            ...state,
            cartProducts:action.cartItems,
            totalPrice:action.totalPrice,
    
        }
    
      case CHANGEQUANTITY:{
          var cartP=state.cartProducts.map(c=>{
              if(c._id===action.id){
                  c.qty=action.qty
              }
              return c;
            })
            return {
                ...state,
                cartProducts:cartP,
                totalPrice:action.totalPrice
            }

      }

    }
    
    
    return state
}

export default cartreducer