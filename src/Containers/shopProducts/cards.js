import React,{useState , useEffect,Component} from 'react';
import {Box} from '@material-ui/core'
import OneCard from '../../components/shopProducts/product/onecard';
import axios from '../../axios'
import classes from './cards.module.css'
import Backdrop from '../../components/Backdrop/Backdrop'
import { Redirect } from 'react-router';
import Spinner from '../../components/Spinner/Spinner'
import Divider from "@material-ui/core/Divider";
class Cards extends Component {

    state={
        products:[],
        loggedin:false,
        errorAdding:false
    }
    handleAddToCart(pId){
        axios.post('/cart',{id:pId},{
            headers:{
                Authorization:"brew "+localStorage.getItem('authtoken')
            }
        }).then(response=>{
            if(response.data['error']){
                this.props.history.push('/login')
            }else{
                this.props.history.push('/cart')
            }

        })
        .catch(err=>{
          console.log("Logging error from shop handle AddtoCart ", err)
    })

    }
    handleproductClick=(pId)=>{
        let url="/latestproducts/"+pId;
        axios.get(url)
        .then(response=>{
           console.log("Product data",response.data);
            
        })
        .catch(err=>{})
    }
    componentDidMount(){

        console.log("['CARDS.JS']  state   ",this.state)
        if(this.state.products.length==0){     
        axios.get('/',{
            headers:{
                Authorization:"brew "+localStorage.getItem('authtoken')
            }
        })
        .then(response=>{
        console.log("Axios response",localStorage.getItem('authtoken'))
            
            let products=[];
            if(response.data["loggedIn"]){
            
        }
            let keys=Object.keys(response.data);
            for(let i=0 ;i<keys.length;i++ ){
                //console.log("Logging keys from shop",keys[i])
                if(keys[i]!=="error"&&keys[i]!=="user"&&keys[i]!=="loggedIn"){
                    products.push(response.data[keys[i]])
                }
                
            } 

            console.log("Logging from shop",products);
            
            this.setState({
                products:products,
            
            })
        })
        .catch(error=>{
            console.log("Error from card",error);
            
        })
    }
    }
render(){
    return(
        
            <React.Fragment>
       {this.state.products.length!==0?
        <div className={classes.row}>
        {this.state.products.map((c,id)=>{
            return(
                <div className={classes.element}>
            <OneCard 
            addToCart={()=>this.handleAddToCart(c._id)}
            key={id}
            id={c._id}
            clicked={()=>(this.handleproductClick(c._id))}
            title={c.pName}
            price= {c.price}
            avatarSrc={c.imgUrl}/>
             
                </div>
            )
        }) }
        </div>:
        <React.Fragment>
        <Backdrop/>
        <Spinner/>
        </React.Fragment>
       }
       </React.Fragment>    );
}
}

export default Cards