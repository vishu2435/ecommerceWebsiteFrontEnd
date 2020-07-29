import { ERROR, LOGIN, ADDTOCART } from "../actions/actiontypes";

const initialState={
    loggedIn:false,
    user:{}
}


const loginReducer=(state=initialState,action)=>{
    switch(action.type){
        case ERROR:
            return{
                ...state,
                loggedIn:false
            }
        case ADDTOCART:
            return{
                ...state
            } 
        case LOGIN:
            return {
                ...state,
                user:{
                    ...action.user
                },
                loggedIn:true
            }
        default:
            return state
    }

    
}

export default loginReducer