import axios from '../../axios'
import { LOGIN, ERROR } from './actiontypes'


const loginSucceed=(user)=>{
    return{
        type:LOGIN,
        user:user
    }
}

const loginFailed=()=>{
    return {
        type:ERROR
    }
}
export const loginAsync=(url,userEmail,userPassword)=>{
    return (dispatch)=>{
        switch(url){
            case '/checkauth':
                axios.get(url,{
                    headers:{
                        Authorization:"brew "+localStorage.getItem('authtoken')
                    }
                }).then(response=>{
                        // console.log('From loginasync [loginaction.js] response:',response," url: ",url)
                        if(response.data['loggedIn']){
                            dispatch(loginSucceed(response.data['user']))
                        }else{
                            dispatch(loginFailed())
                        }
                    }).catch(err=>{console.log("Error from login action.js ",err)})
                    break;
        
            case './login':
                axios.post(url,{
                    userEmail,
                    userPassword
                }).then(response=>{
                    console.log('From loginasync [loginaction.js] response:',response," url: ",url)
                    localStorage.setItem('authtoken',response.data.token);
                    localStorage.setItem("expireOn",response.data. expireOn);
                    dispatch(loginSucceed(response.data['user']));

                }).catch(err=>{console.log("Error from login action.js ",err)})
                break;
            }
    }
}
