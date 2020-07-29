import axios from '../../axios'

import {ADDTOCART,ERROR, CHANGEQUANTITY,DELETEQUANTITY, CHANGEPRICE} from './actiontypes'

const addToCart=(cartItems,totalPrice,loggedIn)=>{
    return{
        type:ADDTOCART,
        cartItems:cartItems,
        totalPrice:totalPrice,
        loggedIn:loggedIn
    }
}

const deleteProduct=(id)=>{
    return{
        type:DELETEQUANTITY,
        id:id
    }
}
const changeQty=(qty,id,totalPrice)=>{
    
        return{
            type:CHANGEQUANTITY,
            qty:qty,
            id:id,
            totalPrice:totalPrice
        }
    
}
const changePrice=(totelPrice)=>{
    return{
        type:CHANGEPRICE,
        totelPrice:totelPrice
    }
}
export const changeQtyAsync=(qty,id,props)=>{
    console.log("From [cartAction.js]",qty,id,props)
    return dispatch=>{
        
        axios.post('/changeQty',{id:id,qty:qty},{ 
            headers:{
         Authorization:"brew "+localStorage.getItem('authtoken')
        }
     }).then(response=>{
         console.log("response qty container ",response)
         if(response.data['error']){
             props.history.replace('/login')
         }else{
             
             if(qty!==0){
                dispatch(changeQty(qty,id,response.data['totalPrice']))
             }
             else{
               dispatch(deleteProduct(id))
             }
            
         }
     })
    }
}

export const addToCartAsync=(url)=>{
    return (dispatch)=>{
        axios.get(url,{
            headers:{
                Authorization:"brew "+localStorage.getItem('authtoken')
            }
        }).then(response=>{
            if(response.data['error']){
               dispatch(error())
            }else{
                dispatch(addToCart([...response.data['products']],response.data['totalPrice'],true))
            }

        }).catch(err=>{console.log("response [cartAction.js]",err)})
    }
}

// export const addProductToCartAscync=(url)=>{
//     return(dispatch)=>{
//         axios.post(url)
//     }
// }

const error=()=>{
    return {
        type:ERROR
    }
}