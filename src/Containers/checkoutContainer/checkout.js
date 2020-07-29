import React,{Component} from 'react'
import {Box, Paper, withStyles,Typography, Button} from "@material-ui/core"
import axios from '../../axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import BackDrop from '../../components/Backdrop/Backdrop'
const StyledBar=withStyles({
    indeterminate:{
        position:"fixed",
        top:"45%",
        left:"45%",
        zIndex:"300"
    }
})(CircularProgress)

class Checkout extends Component{
    state={
        loggedIn:false,
        shippingDetails:null,
        totalPrice:0,
        items:null,
        loading:true
    }
    componentDidMount(){
        console.log("From [checkout.js] Componet mounted")
        axios.get('/checkauth',{
            headers:{
                Authorization:"brew "+localStorage.getItem('authtoken')
            }
        })
        .then(response=>{
           if(response.data['loggedIn']){
            this.setState({
                loggedIn:true,
                shippingDetails:response.data['user'].shippingDetails,
                totalPrice:this.props.totalPrice,
                items:this.props.items,
                loading:false
            })
            this.props.doOrder(true)
        }else{
               this.props.history.replace('/login')
           }

            
        })
    }
    componentWillUnmount(){
        console.log("From checkout.js component will unmount")
        this.props.doOrder(false)
    }

    render(){
       

        return(
            <React.Fragment>
              {
                    this.state.loading? <React.Fragment><BackDrop/><StyledBar /></React.Fragment>:

                
            <Box flex flexDirection="column">
                <Box>
                    <Paper style={{padding:"10px"}}>
                        {this.state.shippingDetails?
                        <React.Fragment>
                        <Typography variant="h6" display="block">
                            {this.state.shippingDetails.name}
                        </Typography>
                        <Typography variant="body1">
                            {this.state.shippingDetails.address+" "+this.state.shippingDetails.area
                            + " "+this.state.shippingDetails.city+" "+this.state.shippingDetails.state}
                        </Typography>
                        <Typography variant="subtitle1" display="block">
                            {this.state.shippingDetails.phoneNumber}
                        </Typography>
                        </React.Fragment>
                        :
                            null
                        }
                        <Button fullWidth color="primary">
                            Add a address
                        </Button>
                    </Paper>
                </Box>
            </Box>
              }        
            </React.Fragment>
        
        );
    }


}

export default Checkout