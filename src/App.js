import React,{Component} from 'react';
import Layout from './components/Layout/layout'
import Shop from './Containers/shop/shop'
import {BrowserRouter } from 'react-router-dom';
import axios from './axios'
import { connect } from 'react-redux';
import { loginAsync } from './store/actions/loginaction';

class App extends Component{
    
    componentWillMount(){
        this.props.checklogin('/checkauth')
        console.log("from app.js [Component did mount]")
        
    }
    
    
    render(){
        var userName=null;
       if(this.props.loggedIn){
            userName=this.props.user.userName
       }
        return (
            <BrowserRouter>
              <Layout logInstate={this.props.loggedIn} userName={userName}>
                    <Shop  />
                 
              </Layout>
              </BrowserRouter>
   
        )
    }
} 
const mapContainerToState=(state)=>{
    return{
        loggedIn:state.loginReducer.loggedIn,
        user:state.loginReducer.user
    }
}
const mapContainerToDispatch=dispatch=>{
    return{
        checklogin:(url)=>dispatch(loginAsync(url))
    }
}
export default connect(mapContainerToState,mapContainerToDispatch)(App);


