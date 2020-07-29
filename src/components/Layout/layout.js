import React from 'react'
import {Grid, Box} from '@material-ui/core'
import classes from './layout.module.css'
import Header from '../Navigation/Header' 
import {Route} from 'react-router-dom'



const layout=(props)=>{
// console.log("Logging from layout.js userName:",props.userName," logInstate: ",props.logInstate);

return(
<Box flex direction="column">
        <Box>
            <Route path='/' render={(pops)=><Header {...pops} logInstate={props.logInstate} userName={props.userName}  />}/>
        </Box>
        <Box style={{padding:"2px"}}>   
         
                <main className={classes.mobileOnly}>
                     {props.children}
                </main>
            
            
            
        </Box>    
    </Box>
)   
}


export default layout