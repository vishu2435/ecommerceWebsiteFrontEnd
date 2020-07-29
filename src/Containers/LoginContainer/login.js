import React, { Component } from 'react';
import { emphasize } from '@material-ui/core';
import {Input,Button} from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import axios from '../../axios'
import LogIn from '../../components/Login/Login'
import { loginAsync } from '../../store/actions/loginaction';
import { connect } from 'react-redux';


class Login extends Component{
    state={
        isLoggedIn:false,
        email:null,
        password:null
    }
    componentDidMount(){
     
        this.props.onLogIn('/checkauth')
    }
    handleChange=(e)=>{
        if(e.target.name==="email"){
        this.setState({
            email:e.target.value

        })
       }
       if(e.target.name==="password"){
        this.setState({
            password:e.target.value

        })
       }
        
    }
    handleClick=(e)=>{
        this.props.onLogIn('./login',this.state.email,this.state.password);
    }
render(){
    return (
        <React.Fragment>
           {!this.props.loggedIn? <LogIn handleClick={this.handleClick} handleChange={this.handleChange}/>:<Redirect to="/"/>}
        </React.Fragment>
    )
}

}
const mapContainerToState=(state)=>{
    return {
        user:state.loginReducer.user,
        loggedIn:state.loginReducer.loggedIn
    }
}
const mapContainerToDispatch=(dispatch)=>{
    return{
        onLogIn:(url,email,password)=>dispatch(loginAsync(url,email,password))
    }
}
export default connect(mapContainerToState,mapContainerToDispatch)(Login);