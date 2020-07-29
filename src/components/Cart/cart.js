import React,{Component} from 'react'
import { Box, Button,Paper, Typography } from '@material-ui/core'
import classes from './cart.module.css'
import Qty from './Quantity/quantity'
const cart=(props)=>{
    return(
        <Box style={{padding:"10px"}} flex flexDirection="column">
            <Box>
                <Paper elevation={0}>
                    <Typography variant="h5">
                        Your Cart
                    </Typography>
                </Paper>
            </Box>
            <Box className={classes.items}>
                    {props.cartProducts.map(p=>{
                        var url="https://mama-ecommerce.herokuapp.com"+p.imgUrl;
                        return <Box key={p._id} className={classes.element}>
                                    <div className={classes.eachElement}> <img className={classes.image} src={url}/> </div>
                                    <div className={classes.eachElement}> <p>{p.pName}</p></div>
                                    <div className={classes.eachElement}> <p>{p.saleprice}</p></div>
                                    <div className={classes.eachElement}> {props.doOrder?p.qty:<Qty qty={p.qty} changeQuantity={(e)=>props.changeQuantity(p._id,e)}/>}</div>
                        </Box>
                    })}
            </Box>
            <Box>
                <Paper elevation={0}>
                    <Typography variant="h5">
                        Total : {props.totalPrice}
                    </Typography>
                    
                    <Button variant="outlined" onClick={props.handleCheckout}>
                    {props.doOrder?"Order":"Checkout"}
                    </Button>
                </Paper>
            </Box>
        </Box>
    )
}

export default cart;









